import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });
};

// Validation function
const validateBookingData = (data: any) => {
  const errors: string[] = [];

  if (!data.fullName?.trim()) errors.push('Full name is required');
  if (!data.email?.trim()) errors.push('Email is required');
  if (!data.phone?.trim()) errors.push('Phone number is required');
  if (!data.serviceType?.trim()) errors.push('Service type is required');
  if (!data.preferredDate?.trim()) errors.push('Preferred date is required');

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailRegex.test(data.email)) {
    errors.push('Invalid email format');
  }

  // Phone validation
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (data.phone && !phoneRegex.test(data.phone)) {
    errors.push('Invalid phone number format');
  }

  // Date validation
  if (data.preferredDate) {
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.push('Preferred date must be in the future');
    }
  }

  // Honeypot check
  if (data.honeypot) {
    errors.push('Spam detected');
  }

  return errors;
};

// Sanitize input data
const sanitizeData = (data: any) => {
  return {
    fullName: data.fullName?.trim() || '',
    email: data.email?.trim().toLowerCase() || '',
    phone: data.phone?.trim() || '',
    serviceType: data.serviceType?.trim() || '',
    preferredDate: data.preferredDate?.trim() || '',
    preferredTime: data.preferredTime?.trim() || '',
    additionalNotes: data.additionalNotes?.trim() || '',
  };
};

// Send confirmation email to user
const sendUserConfirmation = async (transporter: any, bookingData: any) => {
  const userEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Booking Confirmation - Revolution Property Maintenance</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1d4ed8; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .booking-details { background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        .button { display: inline-block; background-color: #f97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Booking Confirmation</h1>
          <p>Revolution Property Maintenance</p>
        </div>
        <div class="content">
          <h2>Thank you for your booking request!</h2>
          <p>Dear ${bookingData.fullName},</p>
          <p>We have received your consultation request and will contact you within 24 hours to confirm your appointment details.</p>
          
          <div class="booking-details">
            <h3>Booking Details:</h3>
            <p><strong>Service:</strong> ${bookingData.serviceType}</p>
            <p><strong>Preferred Date:</strong> ${new Date(bookingData.preferredDate).toLocaleDateString('en-GB')}</p>
            ${bookingData.preferredTime ? `<p><strong>Preferred Time:</strong> ${bookingData.preferredTime}</p>` : ''}
            <p><strong>Phone:</strong> ${bookingData.phone}</p>
            ${bookingData.additionalNotes ? `<p><strong>Additional Notes:</strong> ${bookingData.additionalNotes}</p>` : ''}
          </div>
          
          <p>Our team will review your request and contact you to:</p>
          <ul>
            <li>Confirm your appointment date and time</li>
            <li>Discuss your project requirements in detail</li>
            <li>Answer any questions you may have</li>
            <li>Provide initial guidance and recommendations</li>
          </ul>
          
          <p>If you need to make any changes or have urgent questions, please contact us:</p>
          <p><strong>Phone:</strong> 01554 123456<br>
          <strong>Email:</strong> info@revolutionpropertymaintenance.co.uk</p>
        </div>
        <div class="footer">
          <p>Revolution Property Maintenance<br>
          ERW Road, Llanelli SA15 2TE, South Wales<br>
          Serving Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, Neath & surrounding areas</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"Revolution Property Maintenance" <${process.env.SMTP_FROM_EMAIL}>`,
    to: bookingData.email,
    subject: 'Booking Confirmation - Revolution Property Maintenance',
    html: userEmailHtml,
  });
};

// Send notification email to admin
const sendAdminNotification = async (transporter: any, bookingData: any) => {
  const adminEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Booking Received</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .booking-details { background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .urgent { background-color: #fef2f2; border-left: 4px solid #dc2626; padding: 10px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔔 New Booking Received</h1>
          <p>Revolution Property Maintenance</p>
        </div>
        <div class="content">
          <div class="urgent">
            <strong>⚠️ Action Required:</strong> New consultation booking requires confirmation within 24 hours.
          </div>
          
          <div class="booking-details">
            <h3>Customer Information:</h3>
            <p><strong>Name:</strong> ${bookingData.fullName}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>Phone:</strong> ${bookingData.phone}</p>
            
            <h3>Service Details:</h3>
            <p><strong>Service Type:</strong> ${bookingData.serviceType}</p>
            <p><strong>Preferred Date:</strong> ${new Date(bookingData.preferredDate).toLocaleDateString('en-GB')}</p>
            ${bookingData.preferredTime ? `<p><strong>Preferred Time:</strong> ${bookingData.preferredTime}</p>` : '<p><strong>Preferred Time:</strong> Not specified</p>'}
            
            ${bookingData.additionalNotes ? `
            <h3>Additional Notes:</h3>
            <p>${bookingData.additionalNotes}</p>
            ` : ''}
            
            <h3>Booking Details:</h3>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-GB')}</p>
          </div>
          
          <h3>Next Steps:</h3>
          <ol>
            <li>Contact the customer within 24 hours</li>
            <li>Confirm appointment date and time</li>
            <li>Discuss project requirements</li>
            <li>Schedule site visit if needed</li>
          </ol>
        </div>
      </div>
    </html>
  `;

  await transporter.sendMail({
    from: `"Revolution Property Maintenance Bookings" <${process.env.SMTP_FROM_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `🔔 New Booking: ${bookingData.serviceType} - ${bookingData.fullName}`,
    html: adminEmailHtml,
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input data
    const validationErrors = validateBookingData(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }

    // Sanitize data
    const sanitizedData = sanitizeData(body);

    // Store in database
    const { data: booking, error: dbError } = await supabase
      .from('bookings')
      .insert([{
        first_name: sanitizedData.fullName.split(' ')[0],
        last_name: sanitizedData.fullName.split(' ').slice(1).join(' ') || '',
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        service: sanitizedData.serviceType,
        preferred_date: sanitizedData.preferredDate,
        preferred_time: sanitizedData.preferredTime,
        project_details: sanitizedData.additionalNotes,
        status: 'pending'
      }])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save booking to database' },
        { status: 500 }
      );
    }

    // Send emails if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USERNAME) {
      try {
        const transporter = createTransporter();

        // Send confirmation email to user
        await sendUserConfirmation(transporter, sanitizedData);

        // Send notification email to admin
        if (process.env.ADMIN_EMAIL) {
          await sendAdminNotification(transporter, sanitizedData);
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't fail the request if email fails, but log it
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Booking submitted successfully',
      bookingId: booking.id
    });

  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}