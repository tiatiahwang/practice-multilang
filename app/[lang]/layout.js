import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { i18n } from '@/i18n.config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className='p-4'>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
