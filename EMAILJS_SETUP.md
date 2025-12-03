# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the "Send Message" functionality on your portfolio website.

## Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. The free plan includes 200 emails per month (perfect for a portfolio site)

## Step 2: Add an Email Service

1. Go to [Email Services](https://dashboard.emailjs.com/admin/integration) in your dashboard
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended if you use Gmail)
   - **Outlook/Office 365**
   - **Custom SMTP** (for other providers)
4. Follow the setup instructions for your chosen provider
5. Note your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to [Email Templates](https://dashboard.emailjs.com/admin/template) in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Template Name:** `Portfolio Contact Form`

**Subject:** `New Message from {{from_name}} - Portfolio Contact`

**Content:**
```
Hello,

You received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click "Save"
5. Note your **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to [Account](https://dashboard.emailjs.com/admin/integration) → "General"
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Update Your Website Code

1. Open `index.html` in your code editor
2. Find the `EMAILJS_CONFIG` section (around line 903)
3. Replace the placeholder values:

```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_public_key_here',      // Paste your Public Key
  SERVICE_ID: 'your_service_id_here',      // Paste your Service ID
  TEMPLATE_ID: 'your_template_id_here'     // Paste your Template ID
};
```

4. Save the file
5. Commit and push to GitHub

## Step 6: Test the Form

1. Deploy your changes to Vercel
2. Visit your portfolio website
3. Go to the Contact page
4. Fill out the contact form
5. Click "Send Message"
6. Check your email inbox for the test message

## Template Variables

The form uses these variables that match the template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - The message content
- `to_email` - Your email (hardcoded in the JavaScript)

## Troubleshooting

### "Email service not configured" error
- Make sure you've replaced all three placeholder values in `EMAILJS_CONFIG`
- Check for typos in your Service ID or Template ID

### Messages not being received
- Check your spam folder
- Verify your email service is connected correctly
- Check the EmailJS dashboard for error logs

### Still having issues?
- Check the browser console for error messages (F12 → Console)
- Review the EmailJS documentation: https://www.emailjs.com/docs/

## Security Note

- The Public Key is safe to expose in frontend code
- Never share your Private Key (not used in this setup)
- EmailJS handles rate limiting on the free plan

## Free Plan Limits

- 200 emails per month
- Perfect for portfolio sites
- Upgrade if you need more

---

**Need help?** Check the EmailJS documentation or reach out to their support.

