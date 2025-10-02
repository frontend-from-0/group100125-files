'use client';

import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from './ui/navigation-menu';
import { useAuth } from '@/app/AuthProvider';


export const Navbar = () => {
  const {user, logout} = useAuth();
  return (
    <NavigationMenu className='bg-gray-200 dark:bg-gray-900'>
      <NavigationMenuList className={'flex gap-4 justify-end w-screen px-16 py-4'}>
        <NavigationMenuItem >
          <NavigationMenuLink asChild>
            <Link href='/'>Home</Link>
          </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href='/admin/'>Admin</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {user ? (
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <button onClick={logout}>Logout</button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href='/user/login'>Login</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        )}

        <ModeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
