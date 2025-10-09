'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { useAuth, User } from '@/app/AuthProvider';
import { redirect } from 'next/navigation';
import { getUIErrorFromFirebaseError } from '@/lib/firebase';
import { updateUser } from '@/lib/firebase';

export default function Setting() {
  const { user } = useAuth();

  const [error, setError] = useState<string>('');
  const [success, setSucccess] = useState<string>('');
  const [firstname, setFirstname] = useState<string>(user?.firstname ?? '');
  const [lastname, setLastname] = useState<string>(user?.lastname ?? '');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstname && !lastname) {
      setError('Firstname and lastname are required');
      return;
    }
    // Validation of passed data

    if (!user) return;

    const updatedUser: User = { ...user, firstname, lastname };
    const res = await updateUser(updatedUser);
    console.log('Update user response: ', res);

    setError('');
    setFirstname('');
    setLastname('');
  }

  return (
    <form
      className='max-w-md mx-auto mt-10 flex flex-col gap-6'
      noValidate
      onSubmit={handleSubmit}
    >
      <h1 className='text-center'>Update Settings</h1>
      <div className='flex flex-col gap-4'>
        <Label htmlFor='firstname'>First name</Label>
        <Input
          className='p-2'
          type='text'
          id='firstname'
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-4'>
        <Label htmlFor='lastname'>Last name</Label>
        <Input
          className='p-2'
          name='lastname'
          type='text'
          id='lastname'
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>

      {/* 
      TODO:
      Change password functionality
      Change email functionality
      Delete account functionality
      */}

      {!!error ? (
        <Alert variant='destructive'>
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      ) : (
        <></>
      )}

      <Button type='submit'>Save</Button>
    </form>
  );
}
