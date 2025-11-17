"use client"
import React, { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Appsidebar } from './_components/Appsidebar'
import Headerr from './_components/Headerr'
import { useUser } from '@clerk/nextjs'
import { doc, getDoc, getDocFromCache, setDoc } from 'firebase/firestore'
import { db } from '@/config/Firebaseconfif'
import {Aicontext} from './context/Aicontext'
import { DefaultModel } from '@/shared/Modeldata'
const Provider = ({
    children,
    ...props
}) => {

    const { user } = useUser()
    //manageing the states using the context
    const [aimodels ,setaimodels]=useState(DefaultModel)

    useEffect(() => {
        if (user && user.primaryEmailAddress?.emailAddress) {
            createnewUser()
        }
    }, [user])
    const createnewUser = async () => {
        //if user exist we will check from the firebase data
        const userRef = doc(db, "users", user?.primaryEmailAddress?.emailAddress);
        const usersanp = await getDoc(userRef)

        if (usersanp.exists()) {
            console.log("user already exists");
            const userprefrencemodel= usersanp.data()
            setaimodels(userprefrencemodel?.selectedModel)
            return;
        } else {
            const userdata = {
                name: user?.fullName,
                createdAt: new Date(),
                remainingMsg: 5, //only for free user
                createds: 1000, //only for the premium consuner
                email: user?.primaryEmailAddress?.emailAddress,
                paln: "free"
            }
            await setDoc(userRef, userdata)
            console.log("new user created");

        }
    }
    return (

        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            {...props}>
            <Aicontext.Provider value={{aimodels ,setaimodels}}>
                <SidebarProvider>
                    <Appsidebar />
                    <div className='w-full hide-scrollbar'><Headerr />
                        {children}</div></SidebarProvider >
            </Aicontext.Provider>
        </NextThemesProvider>


    )
}

export default Provider
