import { leadershipItems } from '../data/leadershipItems';

const Insights = () => {
  return (
    <section id="insights" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Insights</h2>
          <p className="text-gray-600 text-sm sm:text-base">Thought leadership posts, podcasts, articles, and speaking highlights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {leadershipItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary-300 flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-contain bg-gradient-to-br from-slate-100 to-blue-50"
                  loading="lazy"
                />

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-primary-700 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed flex-1 line-clamp-3 mb-3">
                    {item.description}
                  </p>
                  <span className="text-primary-600 text-xs font-bold">Read More</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Insights;
