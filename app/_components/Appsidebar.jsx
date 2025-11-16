"use client"
import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { SignInButton, useClerk, UserButton, useUser } from "@clerk/nextjs"
import { Bolt, LogOut, Moon, Sun, User2, Zap } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Usercredits from "./Usercredits"

export function Appsidebar() {
    const { theme, setTheme } = useTheme()
    const { user } = useUser()
    const { openUserProfile, signOut } = useClerk()
    return (
        <Sidebar>
            <SidebarHeader >
                {/* it is the top part */}
                <div className="flex justify-between p-3">
                    <div className="flex space-x-2  items-center">
                        <Image src='/logo.svg' alt="logo" height={60} width={60}
                            className="w-[30px] h-[30px]"></Image>
                        <h1 className="text-xl font-semibold">Fussion Ai</h1>
                    </div>
                    <div className="">
                        {theme == 'light' ? <Button variant={'ghost'}
                            onClick={() => setTheme('dark')}><Sun /></Button>
                            : <Button variant={'ghost'}
                                onClick={() => setTheme('light')}><Moon /></Button>}
                    </div>
                </div>
                <div className="p-3 ">
                    {user ? <Button size='large' className="w-full py-2 ">
                        <h5 className="text-sm font-semibold">+New Chat</h5>
                    </Button>
                        :
                        <div size='large' className="w-full py-2 ">
                            <SignInButton mode="modal"></SignInButton>
                        </div>

                    }

                </div>
            </SidebarHeader >
            <SidebarContent>
                <SidebarGroup >
                    <div className="mt-8">
                        <h1 className="text-lg font-bold">Chat</h1>
                        {user ? "" :
                            <p className="text-sm font-extralight mt-2 text-slate-500">Sign in to start chating with multiple AI model</p>
                        }

                    </div>
                </SidebarGroup >
            </SidebarContent>
            <SidebarFooter >

                <div className="p-3 mb-6">
                    {!user ? <SignInButton mode="modal">
                        <Button className='w-full py-2' size="large">SignIn/SignUp</Button></SignInButton> :

                        <div >
                            <Usercredits />
                            <Button className={'w-full mb-3'}><Zap /> Upgrad Plan</Button>
                            <div onClick={openUserProfile} className=" transition-all duration-300 flex gap-4 items-center">
                                <img src={user.imageUrl} alt="" className="w-7 rounded-full" />
                                <h2 className="cursor-pointer">{user.fullName}</h2>
                                <LogOut onClick={signOut} className="w-4 cursor-pointer" />
                            </div>

                        </div>
                    }

                </div>

            </SidebarFooter>
        </Sidebar>
    )
}