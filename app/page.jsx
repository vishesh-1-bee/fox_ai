"use client"
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import React from 'react'

const page = () => {
  const { setTheme } = useTheme()
  return (
    <div>
      <h1 >we are here</h1> 
      <h1 >we are here</h1> 
      <h1 >we are here</h1> 
    
     <Button onClick={()=>setTheme('light')}  >Light Mode</Button>
     <Button onClick={()=>setTheme('dark')} >Dark Mode</Button>
    </div>
  )
}

export default page
