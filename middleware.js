import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from './i18n.config';

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach(
    (value, key) => (negotiatorHeaders[key] = value),
  );

  const locales = i18n.locales;
  const languages = new Negotiator({
    headers: negotiatorHeaders,
  })
    .languages()
    .reverse();

  const locale = match(
    languages,
    locales,
    i18n.defaultLocale,
  );

  return locale;
}

export function middleware(request) {
  // check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}`) &&
      pathname !== `/${locale}`,
  );

  // redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    console.log('middleLocale', locale);
    return NextResponse.redirect(
      new URL(
        `/${locale}${
          pathname.startsWith('/') ? '' : '/'
        }${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
