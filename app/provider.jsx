import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Appsidebar } from './_components/Appsidebar'
import Headerr from './_components/Headerr'
const Provider = ({
    children,
    ...props
}) => {
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
