import { getDictionary } from '@/lib/dictionary';

export default async function Home({ params: { lang } }) {
  const { home } = await getDictionary(lang);

  return (
    <div className='pt-10'>
      <h1 className='text-3xl font-medium'>{home.title}</h1>
    </div>
  );
}
