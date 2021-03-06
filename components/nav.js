import Link from 'next/link';

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function Nav() {
  return (
    <nav>
      <ul className='flex items-center justify-between p-8'>
        <li>
          <Link href='/'>
            <a className='no-underline text-gray-900 dark:text-green-200'>
              Home
            </a>
          </Link>
        </li>
        <ul className='flex items-center justify-between space-x-4'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className='no-underline nav-btn'>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
