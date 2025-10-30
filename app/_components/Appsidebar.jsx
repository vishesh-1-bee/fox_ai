"use client"
import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Appsidebar() {
    const { theme, setTheme } = useTheme()
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
                    <Button size='large' className="w-full py-2 ">
                        <h5 className="text-sm font-semibold">+New Chat</h5>
                    </Button>
                </div>
            </SidebarHeader >
            <SidebarContent>
                <SidebarGroup >
                    <div className="mt-8">
                        <h1 className="text-lg font-bold">Chat</h1>
                        <p className="text-sm font-extralight mt-2 text-slate-500">Sign in to start chating with multiple AI model</p>
                    </div>
                </SidebarGroup >
            </SidebarContent>
            <SidebarFooter >
                <div className="p-3 mb-6">
                    <Button className='w-full py-2' size="large">SignIn/SignUp</Button>
                    
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}