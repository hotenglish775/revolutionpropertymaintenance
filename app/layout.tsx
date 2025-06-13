import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Revolution Property Maintenance - Professional Property Services in South Wales',
  description: 'Transform your property with Revolution Property Maintenance. Expert kitchen remodeling, bathroom renovations, basement finishing, and home additions across Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, and Neath. Free quotes available.',
  keywords: 'property maintenance, home renovation, kitchen remodeling, bathroom renovation, basement finishing, home additions, property improvement, Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, Neath, South Wales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}