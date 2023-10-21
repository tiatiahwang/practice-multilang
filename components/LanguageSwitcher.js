'use client';

import { i18n } from '@/i18n.config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const pathName = usePathname();

  const redirectedPathname = (locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul className='flex gap-x-2'>
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathname(locale)}
              className='rounded-md border bg-pink-200 px-3 py-2 border-none'
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LanguageSwitcher;
