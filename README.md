# Revolution Property Maintenance 🏠

**Professional Property Maintenance & Renovation Services Across South Wales**

A modern, responsive website with integrated booking system for Revolution Property Maintenance - your trusted partner for property transformations in Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, Neath and surrounding areas.

---

## 🌟 **Website Overview**

Revolution Property Maintenance is a comprehensive business website built with **Next.js 13**, **TypeScript**, and **Tailwind CSS**, featuring a complete booking system with email notifications and database integration. The site showcases professional property maintenance services with modern design and seamless user experience.

### **🎯 Target Audience**
- Property owners across South Wales
- Homeowners seeking renovation services
- Commercial property managers
- Real estate investors
- Local residents in Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, and Neath

### **🏢 Business Services**
- **Kitchen Remodeling** - Custom kitchen designs and installations
- **Bathroom Renovation** - Luxury bathroom transformations
- **Basement Finishing** - Converting basements into livable spaces
- **Home Additions** - Expanding homes with seamless additions
- **Full Home Renovation** - Complete property transformations
- **Painting & Decorating** - Professional interior/exterior painting
- **Flooring Services** - Installation of all flooring types
- **Plastering** - Wall and ceiling plastering services
- **Roofing** - Roof installation, repair, and maintenance

---

## 🚀 **Key Features**

### **💻 Website Features**
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **SEO Optimized** - Optimized for South Wales local search
- ✅ **Fast Performance** - Built with Next.js for optimal speed
- ✅ **Accessibility** - WCAG compliant design
- ✅ **Professional Photography** - High-quality service images

### **📋 Booking System**
- ✅ **Complete Booking Form** - Name, email, phone, service, date/time
- ✅ **Database Integration** - Secure data storage with Supabase/PostgreSQL
- ✅ **Email Notifications** - Automatic confirmations and admin alerts
- ✅ **Form Validation** - Client and server-side validation
- ✅ **Spam Protection** - Honeypot fields and input sanitization
- ✅ **Admin Dashboard Ready** - Database structure for future admin panel

### **📧 Email System**
- ✅ **SMTP Integration** - Support for Gmail, SendGrid, custom SMTP
- ✅ **Professional Templates** - Branded email templates
- ✅ **Dual Notifications** - Customer confirmation + admin alerts
- ✅ **HTML Email Support** - Rich formatting and branding

### **🔐 Security Features**
- ✅ **Input Sanitization** - All user inputs are cleaned and validated
- ✅ **SQL Injection Protection** - Parameterized queries
- ✅ **Environment Variables** - Secure credential storage
- ✅ **Rate Limiting Ready** - Structure for API rate limiting
- ✅ **HTTPS Ready** - SSL/TLS configuration support

---

## 🛠 **Technology Stack**

### **Frontend**
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Modern component library
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form handling and validation

### **Backend**
- **Next.js API Routes** - Serverless API endpoints
- **Node.js** - JavaScript runtime
- **Nodemailer** - Email sending library
- **Supabase** - Database and authentication (recommended)
- **PostgreSQL** - Relational database

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Tailwind CSS** - Styling
- **Git** - Version control

---

## 📦 **Installation Guide**

### **🎯 Quick Installation (Recommended)**

The easiest way to get started is using our automated installation script:

```bash
# 1. Download and run the installation script
chmod +x install.sh
./install.sh

# 2. Follow the interactive setup prompts
# 3. Start the development server
./start.sh
```

The script will automatically:
- ✅ Check system requirements
- ✅ Install Node.js if needed
- ✅ Configure environment variables
- ✅ Set up database connection
- ✅ Configure email settings
- ✅ Install dependencies
- ✅ Build the application
- ✅ Create startup scripts

---

### **🔧 Manual Installation**

If you prefer manual setup or need custom configuration:

#### **Step 1: System Requirements**

Ensure you have the following installed:

```bash
# Check Node.js version (18+ required)
node --version

# Check npm version
npm --version

# Install Node.js if needed (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Node.js if needed (macOS with Homebrew)
brew install node@20
```

#### **Step 2: Clone and Setup Project**

```bash
# Clone the repository (if from git)
git clone <repository-url>
cd revolution-property-maintenance

# Or if you have the files locally, navigate to the directory
cd /path/to/revolution-property-maintenance

# Install dependencies
npm install
```

#### **Step 3: Environment Configuration**

Create a `.env.local` file in the project root:

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit the environment file
nano .env.local
```

**Required Environment Variables:**

```env
# Supabase Configuration (Recommended)
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

#### **Step 4: Database Setup**

**Option A: Supabase (Recommended)**

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Get URL and Service Role Key from Settings > API
4. The database tables will be created automatically

**Option B: Local PostgreSQL**

```bash
# Install PostgreSQL (Ubuntu/Debian)
sudo apt-get install postgresql postgresql-contrib

# Create database
sudo -u postgres createdb revolution_property_maintenance

# Run database migrations
psql -U postgres -d revolution_property_maintenance -f supabase/migrations/20250609095743_withered_block.sql
```

#### **Step 5: Email Configuration**

**Gmail Setup:**
1. Enable 2-Factor Authentication
2. Generate App Password:
   - Google Account → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use this password in `.env.local`

**SendGrid Setup:**
1. Create account at [sendgrid.com](https://sendgrid.com)
2. Generate API key
3. Use these settings:
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USERNAME=apikey
   SMTP_PASSWORD=your_sendgrid_api_key
   ```

#### **Step 6: Build and Start**

```bash
# Build the application
npm run build

# Start development server
npm run dev

# Or start production server
npm start
```

---

## 🌐 **Access Points**

Once installed, access your website at:

- **Main Website:** http://localhost:2000
- **Booking System:** http://localhost:2000/booking
- **Services:** http://localhost:2000/services
- **Portfolio:** http://localhost:2000/portfolio
- **About:** http://localhost:2000/about
- **Contact:** http://localhost:2000/contact

---

## 📊 **Database Schema**

The system creates the following database tables:

### **Bookings Table**
```sql
- id (UUID, Primary Key)
- first_name (VARCHAR)
- last_name (VARCHAR)
- email (VARCHAR)
- phone (VARCHAR)
- service (VARCHAR)
- preferred_date (DATE)
- preferred_time (VARCHAR)
- project_details (TEXT)
- status (VARCHAR: pending, confirmed, completed, cancelled)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### **Contacts Table**
```sql
- id (UUID, Primary Key)
- name (VARCHAR)
- email (VARCHAR)
- phone (VARCHAR)
- subject (VARCHAR)
- message (TEXT)
- status (VARCHAR: new, read, responded)
- created_at (TIMESTAMP)
```

### **Services Table**
```sql
- id (UUID, Primary Key)
- name (VARCHAR)
- description (TEXT)
- is_active (BOOLEAN)
- display_order (INTEGER)
- created_at (TIMESTAMP)
```

---

## 📧 **Email Templates**

The system includes professional email templates:

### **Customer Confirmation Email**
- Subject: "Booking Confirmation - Revolution Property Maintenance"
- Includes booking details, next steps, contact information
- Professional HTML formatting with company branding

### **Admin Notification Email**
- Subject: "🔔 New Booking: [Service] - [Customer Name]"
- Includes all customer details, booking information
- Action items and follow-up instructions

---

## 🔧 **Configuration Options**

### **Customizing Services**
Edit the services in:
- `app/booking/page.tsx` (serviceTypes array)
- Database services table
- Navigation dropdown

### **Updating Contact Information**
Update company details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `.env.local` file

### **Modifying Email Templates**
Email templates are in:
- `app/api/bookings/route.ts`
- Functions: `sendUserConfirmation()` and `sendAdminNotification()`

---

## 🚀 **Production Deployment**

### **Environment Variables**
Set these in your production environment:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Railway/Heroku: Config vars

### **Build Commands**
```bash
# Build command
npm run build

# Start command
npm start

# Install command
npm install
```

### **Domain Configuration**
Update `NEXTAUTH_URL` in production:
```env
NEXTAUTH_URL=https://yourdomain.com
```

---

## 📈 **Analytics & Monitoring**

### **Database Queries for Analytics**
```sql
-- Booking trends by service
SELECT service, COUNT(*) as bookings 
FROM bookings 
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY service;

-- Daily booking counts
SELECT DATE(created_at) as date, COUNT(*) as bookings
FROM bookings 
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Conversion rates by status
SELECT status, COUNT(*) as count,
       ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) as percentage
FROM bookings 
GROUP BY status;
```

---

## 🛡️ **Security Best Practices**

### **Implemented Security Features**
- ✅ Input validation and sanitization
- ✅ SQL injection prevention
- ✅ XSS protection
- ✅ CSRF protection ready
- ✅ Environment variable security
- ✅ Honeypot spam protection

### **Additional Security Recommendations**
- Use HTTPS in production
- Implement rate limiting
- Regular security updates
- Monitor error logs
- Backup database regularly

---

## 🔍 **Troubleshooting**

### **Common Issues**

**Port 2000 already in use:**
```bash
# Kill process on port 2000
sudo lsof -ti:2000 | xargs kill -9

# Or change port in package.json
"dev": "next dev -p 3000"
```

**Database connection errors:**
- Check connection string in `.env.local`
- Verify database is running
- Check firewall settings

**Email not sending:**
- Verify SMTP credentials
- Check spam folder
- Test with simple SMTP client

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 **Support & Contact**

### **Technical Support**
- Check browser developer tools for errors
- Review server logs for API issues
- Verify environment variables are set correctly
- Test database connectivity

### **Business Contact**
- **Phone:** 01554 123456
- **Email:** info@revolutionpropertymaintenance.co.uk
- **Address:** ERW Road, Llanelli SA15 2TE, South Wales

### **Service Areas**
Proudly serving across South Wales:
- Llanelli
- Swansea  
- Cardiff
- Carmarthen
- Ammanford
- Neath
- Surrounding areas

---

## 🎯 **Future Enhancements**

Potential improvements for future versions:
- 📊 Admin dashboard for booking management
- 📅 Calendar integration (Google Calendar, Outlook)
- 💳 Payment integration (Stripe, PayPal)
- 📱 SMS notifications
- 👤 Customer portal
- 🔄 Automated follow-up emails
- 📈 Analytics dashboard
- 🗓️ Appointment scheduling optimization
- 📋 Project management integration
- 💬 Live chat support

---

## 📄 **License**

This project is proprietary software for Revolution Property Maintenance. All rights reserved.

---

## 🙏 **Acknowledgments**

Built with modern web technologies:
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Shadcn/UI](https://ui.shadcn.com/) - Component library
- [Supabase](https://supabase.com/) - Database platform
- [Lucide](https://lucide.dev/) - Icon library

---

**Ready to revolutionize your property maintenance business! 🏠✨**

For installation support or questions, please contact our technical team.