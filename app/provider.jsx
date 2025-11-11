import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Appsidebar } from './_components/Appsidebar'
import Headerr from './_components/Headerr'
import { useUser } from '@clerk/nextjs'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/config/Firebaseconfif'
const Provider = ({
    children,
    ...props
}) => {

    const {user}= useUser()
    const createnewUser = async()=>{
        //if user exist we will check from the firebase data
        const userRef =doc(db, "users", user?.primaryEmailAddress?.emailAddress);
        const dockSnap = await getDoc
    }
    return (

        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            {...props}>
            <SidebarProvider>
                <Appsidebar/>       
                <div className='w-full hide-scrollbar'><Headerr/>
                {children}</div></SidebarProvider >
        </NextThemesProvider>


    )
}

export default Provider
