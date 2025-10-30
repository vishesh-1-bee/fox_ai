"use client"
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import React from 'react'

const page = () => {
  const { setTheme } = useTheme()
  return (
    <div>
      <h1 >we are here</h1> 
  
    </div>
  )
}

export default page
