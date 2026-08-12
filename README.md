# Portfolio Project

## Setup EmailJS for Contact Form

To enable the contact form to send emails to you, follow these steps:

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Set up your email service:**
   - Go to Email Services in your EmailJS dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account

3. **Create an email template:**
   - Go to Email Templates
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{company}}` - Sender's company
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email address

4. **Update the .env file** with your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

5. **Find your credentials:**
   - Service ID: From your email service settings
   - Template ID: From your email template settings
   - Public Key: From Account > General settings

## Development

```bash
npm install
npm run dev
```