"use client"
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { SignInButton, useUser , useClerk, UserButton } from '@clerk/nextjs'
import { User } from 'lucide-react'
import React from 'react'

const Headerr = () => {
  const { user } = useUser()
  const { openSignIn } = useClerk()
  return (

    <div className='p-3 w-full shadow flex justify-between'>
      <SidebarTrigger />
      {user ? <UserButton /> :
        <SignInButton>
          <Button>Sign In</Button></SignInButton>
      }

    </div>
  )
}

export default Headerr
