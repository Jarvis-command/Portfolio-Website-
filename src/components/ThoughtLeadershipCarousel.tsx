import React, { useRef, useEffect, useState } from 'react';
import { type LeadershipItem } from '../data/leadershipItems';

interface ThoughtLeadershipCarouselProps {
  items: LeadershipItem[];
  autoScrollSpeed?: number; // milliseconds to scroll per iteration
}

const ThoughtLeadershipCarousel: React.FC<ThoughtLeadershipCarouselProps> = ({
  items,
  autoScrollSpeed = 25 // milliseconds between scroll updates (medium speed)
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-scroll function
  const autoScroll = () => {
    if (!carouselRef.current || isHovering || isDragging) return;

    const container = carouselRef.current;
    const scrollAmount = 1; // pixels to scroll per interval
    
    // Check if we need to loop back to start for seamless scrolling
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 50) {
      // Reset to a smooth position (loop seamlessly)
      container.scrollLeft = 0;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  // Set up auto-scroll interval
  useEffect(() => {
    scrollIntervalRef.current = setInterval(autoScroll, autoScrollSpeed);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [autoScrollSpeed, isHovering, isDragging]);

  // Handle hover events for pause/resume
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Handle drag/manual scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    const delta = dragStart - e.clientX;
    carouselRef.current.scrollLeft += delta;
    setDragStart(e.clientX);
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          handleMouseLeave();
          setIsDragging(false);
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 px-2 cursor-grab active:cursor-grabbing touch-pan-x"
        style={{
          scrollBehavior: 'smooth',
          touchAction: 'pan-x',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* Hide scrollbar with CSS */}
        <style>{`
          .thought-leadership-carousel::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Carousel Items - Optimized for 2 full cards visible */}
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group flex-shrink-0 w-[min(88vw,420px)] sm:w-[min(86vw,420px)] md:w-[min(80vw,480px)] max-w-full bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/15 hover:border-primary-300 flex flex-col select-none"
              draggable={false}
            >
              {/* Card Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-contain bg-gradient-to-br from-slate-100 to-blue-50 transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                draggable={false}
              />

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Icon and Category Badge */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0 shadow-md">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-sm font-bold text-primary-700 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2 leading-tight">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-xs leading-relaxed flex-1 line-clamp-2 mb-3">
                  {item.description}
                </p>

                {/* CTA */}
                <div className="text-primary-600 text-xs font-bold flex items-center gap-1 transition-all group-hover:gap-2 hover:text-primary-700">
                  Learn More
                  <span className="text-sm transition-transform group-hover:translate-x-1">-&gt;</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ThoughtLeadershipCarousel;
