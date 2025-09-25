'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { useAuth } from '@/app/AuthProvider';
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';
import { getUIErrorFromFirebaseError } from '@/lib/firebase';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { user, register, error: firebaseError } = useAuth();

  useEffect(() => {
    if (user?.email) {
      redirect('/');
    }
  }, [user]);


  useEffect(() => {
    if (!!firebaseError) {
      console.log(firebaseError);
      const uiError = getUIErrorFromFirebaseError(firebaseError.code);
      
      setError(uiError);
    }
  }, [firebaseError]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email && !password) {
      setError('Please fill in email and password fields');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    setError('');
    register(email, password);

    setEmail('');
    setPassword('');
  }

  return (
    <form
      className='max-w-md mx-auto mt-10 flex flex-col gap-6'
      noValidate
      onSubmit={handleSubmit}
    >
      <h1 className='text-center'>Sign up</h1>
      <div className='flex flex-col gap-4'>
        <Label htmlFor='email'>Email</Label>
        {/* Controlled input - use value and onChange */}
        <Input
          className='p-2'
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Uncontrolled input - use defaultValue
        <Input className='p-2' type='email' name='email' id='email' defaultValue={'ann@gmail.com'} /> */}
      </div>

      <div className='flex flex-col gap-4'>
        <Label htmlFor='password'>Password</Label>
        <Input
          className='p-2'
          name='password'
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {!!error ? (
        <Alert variant='destructive'>
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      ) : (
        <></>
      )}

      <Button type='submit'>Submit</Button>
    </form>
  );
}
