# Revolution Property Maintenance - Booking System Setup Guide

## Overview
This guide will help you set up the complete booking system with database integration and email notifications.

## Prerequisites
- Node.js 18+ installed
- PostgreSQL database (or Supabase account)
- SMTP email service (Gmail, SendGrid, etc.)

## 1. Environment Configuration

Create a `.env.local` file in your project root with the following variables:

```env
# Supabase Configuration (recommended)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# SMTP Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM_EMAIL=noreply@revolutionpropertymaintenance.co.uk

# Admin Configuration
ADMIN_EMAIL=admin@revolutionpropertymaintenance.co.uk

# Security
NEXTAUTH_SECRET=your_random_secret_here
NEXTAUTH_URL=http://localhost:2000
```

## 2. Database Setup

### Option A: Using Supabase (Recommended)
1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings > API to get your URL and service role key
4. The database tables are already created via the migration file

### Option B: Using PostgreSQL
1. Install PostgreSQL on your system
2. Create a new database: `revolution_property_maintenance`
3. Run the SQL schema file:
   ```bash
   psql -U your_username -d revolution_property_maintenance -f database/schema.sql
   ```

## 3. Email Configuration

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail"
3. Use this app password in your `.env.local` file

### Other SMTP Providers
- **SendGrid**: Use your API key as password
- **Mailgun**: Use your domain and API key
- **AWS SES**: Configure with your AWS credentials

## 4. Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:2000/booking` to test the booking form

## 5. Testing the System

### Test Booking Submission
1. Fill out the booking form at `/booking`
2. Check your database for the new booking record
3. Verify that confirmation emails are sent

### Database Verification
```sql
-- Check recent bookings
SELECT * FROM bookings ORDER BY created_at DESC LIMIT 5;

-- Check booking status distribution
SELECT status, COUNT(*) FROM bookings GROUP BY status;
```

## 6. Production Deployment

### Environment Variables
Ensure all environment variables are set in your production environment:
- Vercel: Project Settings > Environment Variables
- Netlify: Site Settings > Environment Variables
- Railway/Heroku: Config vars

### Database Migration
If using your own PostgreSQL:
```bash
# Run migrations in production
psql $DATABASE_URL -f database/schema.sql
```

### Email Testing
Test email functionality in production:
1. Submit a test booking
2. Check spam folders if emails don't arrive
3. Verify SMTP credentials are correct

## 7. Security Considerations

### Form Security
- ✅ Honeypot field prevents basic spam
- ✅ Server-side validation
- ✅ Input sanitization
- ✅ SQL injection protection (using Supabase/parameterized queries)

### Email Security
- ✅ TLS encryption for SMTP
- ✅ Environment variables for credentials
- ✅ HTML email templates prevent injection

### Database Security
- ✅ Row Level Security (RLS) enabled
- ✅ Service role key for server-side operations
- ✅ Input validation and sanitization

## 8. Customization

### Adding New Services
Update the service list in:
- `app/booking/page.tsx` (serviceTypes array)
- Database services table
- Navigation dropdown

### Email Templates
Modify email templates in:
- `app/api/bookings/route.ts`
- `sendUserConfirmation()` function
- `sendAdminNotification()` function

### Form Fields
Add new fields by:
1. Updating the form state in `app/booking/page.tsx`
2. Adding validation in the API route
3. Updating database schema if needed

## 9. Monitoring and Analytics

### Database Queries
```sql
-- Booking analytics
SELECT 
  service,
  COUNT(*) as total_bookings,
  COUNT(CASE WHEN status = 'confirmed' THEN 1 END) as confirmed
FROM bookings 
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY service;

-- Daily booking trends
SELECT 
  DATE(created_at) as booking_date,
  COUNT(*) as bookings
FROM bookings 
WHERE created_at >= NOW() - INTERVAL '7 days'
GROUP BY DATE(created_at)
ORDER BY booking_date;
```

### Error Monitoring
- Check browser console for client-side errors
- Monitor server logs for API errors
- Set up email alerts for failed bookings

## 10. Troubleshooting

### Common Issues

**Emails not sending:**
- Check SMTP credentials
- Verify firewall/port settings
- Test with a simple SMTP client

**Database connection errors:**
- Verify connection string
- Check network connectivity
- Ensure database is running

**Form validation errors:**
- Check browser console
- Verify API endpoint is accessible
- Test with simple curl request

### Support
For technical support, check:
- Browser developer tools
- Server logs
- Database logs
- Email service logs

## 11. Future Enhancements

Potential improvements:
- Admin dashboard for managing bookings
- Calendar integration (Google Calendar, Outlook)
- SMS notifications
- Payment integration
- Customer portal
- Automated follow-up emails
- Booking reminders
- Service scheduling optimization

---

This setup provides a production-ready booking system with proper security, validation, and email notifications. The system is scalable and can be extended with additional features as needed.