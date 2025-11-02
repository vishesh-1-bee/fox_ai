"use client"
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import React from 'react'
import Chatbox from './_components/Chatbox'

const page = () => {
  const { setTheme } = useTheme()
  return (
    <div className=''>
<Chatbox/>
    </div>
  )
}

export default page
