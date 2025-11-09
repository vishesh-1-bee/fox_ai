"use client"
import { Button } from '@/components/ui/button'
import { Mic, Paperclip, Send } from 'lucide-react'
import React from 'react'
import AiModels from './AiModels'

const Chatbox = () => {
    return (
        <div className='relative min-h-screen '>
            {/* box for the ai data */}
            <div className='w-full'>
                <AiModels />
            </div>

            {/* box for the prompt box*/}
            <div className='fixed bottom-0 flex left-0 justify-center w-full px-4 pb-7 mt-4 '>
                <div className='w-full border rounded-2xl shadow-2xl max-w-2xl bg-slate-100 '>
                    <input type='textbox' placeholder='Ask me anything .....' className='dark:text-black mt-1 border-0 pl-2 outline-none' />
                    <div className='flex justify-between items-center'>
                        <div className='mt-3'>
                            <Button className={""} variant={'ghost'} size={'icon'}><Paperclip className='h-5 w-5' /></Button>
                        </div>
                        <div className="flex p-2 gap-4">
                            <Button variant={'ghost'} size={'icon'}><Mic /></Button>
                            <Button size={'icon'} className={'bg-blue-600'}><Send /></Button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Chatbox
