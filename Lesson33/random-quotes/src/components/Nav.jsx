import Link from 'next/link';


export const Navbar = () => {
  return (

    <nav className='flex gap-4'>
      <Link href='/'>Home</Link>
      <Link href='/admin/'>Admin</Link>
    </nav>
  );
};
