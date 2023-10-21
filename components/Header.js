import { getDictionary } from '@/lib/dictionary';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

const Header = async ({ lang }) => {
  const { header } = await getDictionary(lang);

  return (
    <header className='flex items-center justify-between w-full'>
      <LanguageSwitcher />
      <nav>
        <ul className='flex space-x-3'>
          <li>{header.login}</li>
          <li>{header.join}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
