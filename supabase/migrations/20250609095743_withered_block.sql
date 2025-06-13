-- Revolution Property Maintenance Booking System Database Schema
-- This file creates the complete database structure for the booking system

-- Create database (uncomment if creating a new database)
-- CREATE DATABASE revolution_property_maintenance;
-- USE revolution_property_maintenance;

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name varchar(100) NOT NULL,
  last_name varchar(100) NOT NULL,
  email varchar(255) NOT NULL,
  phone varchar(20) NOT NULL,
  service varchar(100) NOT NULL,
  preferred_date date NOT NULL,
  preferred_time varchar(20),
  project_details text,
  budget varchar(50),
  timeline varchar(50),
  status varchar(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

-- Create contacts table for general inquiries
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(200) NOT NULL,
  email varchar(255) NOT NULL,
  phone varchar(20),
  subject varchar(200),
  message text NOT NULL,
  status varchar(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded')),
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_service ON bookings(service);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);
CREATE INDEX IF NOT EXISTS idx_bookings_preferred_date ON bookings(preferred_date);

CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Create function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at timestamp on bookings
DROP TRIGGER IF EXISTS update_bookings_updated_at ON bookings;
CREATE TRIGGER update_bookings_updated_at
    BEFORE UPDATE ON bookings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing (optional)
-- INSERT INTO bookings (first_name, last_name, email, phone, service, preferred_date, preferred_time, project_details) VALUES
-- ('John', 'Smith', 'john.smith@example.com', '01554 123456', 'Kitchen Remodeling', '2024-02-15', '10:00 AM', 'Looking to renovate our kitchen with modern appliances and new cabinets.'),
-- ('Sarah', 'Jones', 'sarah.jones@example.com', '01792 987654', 'Bathroom Renovation', '2024-02-20', '2:00 PM', 'Complete bathroom renovation including new tiles and fixtures.');

-- Create admin user table (optional - for future admin panel)
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username varchar(50) UNIQUE NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  password_hash varchar(255) NOT NULL,
  role varchar(20) DEFAULT 'admin' CHECK (role IN ('admin', 'manager', 'staff')),
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  last_login timestamp with time zone
);

-- Create services table for dynamic service management
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(100) NOT NULL,
  description text,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

-- Insert default services
INSERT INTO services (name, description, display_order) VALUES
('Kitchen Remodeling', 'Complete kitchen renovation and remodeling services', 1),
('Bathroom Renovation', 'Bathroom renovation and modernization', 2),
('Basement Finishing', 'Transform your basement into usable living space', 3),
('Home Additions', 'Expand your home with professional additions', 4),
('Full Home Renovation', 'Complete home transformation projects', 5),
('Painting & Decorating', 'Professional painting and decorating services', 6),
('Flooring', 'Flooring installation and renovation', 7),
('Plastering', 'Professional plastering and wall finishing', 8),
('Roofing', 'Roofing installation, repair, and maintenance', 9),
('General Consultation', 'Initial consultation and project planning', 10),
('Emergency Repairs', 'Urgent repair services', 11)
ON CONFLICT DO NOTHING;

-- Grant permissions (adjust as needed for your database setup)
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO your_app_user;
-- GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO your_app_user;

-- Create views for reporting (optional)
CREATE OR REPLACE VIEW booking_summary AS
SELECT 
  service,
  status,
  COUNT(*) as booking_count,
  DATE_TRUNC('month', created_at) as month
FROM bookings 
GROUP BY service, status, DATE_TRUNC('month', created_at)
ORDER BY month DESC, service;

CREATE OR REPLACE VIEW recent_bookings AS
SELECT 
  id,
  CONCAT(first_name, ' ', last_name) as full_name,
  email,
  phone,
  service,
  preferred_date,
  preferred_time,
  status,
  created_at
FROM bookings 
ORDER BY created_at DESC 
LIMIT 50;

-- Comments for documentation
COMMENT ON TABLE bookings IS 'Stores customer booking requests for consultations and services';
COMMENT ON TABLE contacts IS 'Stores general contact form submissions';
COMMENT ON TABLE services IS 'Manages available services offered by the company';
COMMENT ON TABLE admin_users IS 'Admin users for backend management (future use)';

COMMENT ON COLUMN bookings.status IS 'Booking status: pending, confirmed, completed, cancelled';
COMMENT ON COLUMN bookings.preferred_date IS 'Customer preferred date for consultation';
COMMENT ON COLUMN bookings.preferred_time IS 'Customer preferred time slot';
COMMENT ON COLUMN bookings.project_details IS 'Additional notes and project details from customer';