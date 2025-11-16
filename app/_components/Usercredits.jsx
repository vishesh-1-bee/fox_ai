import { Progress } from "@/components/ui/progress"
import React from 'react'

const Usercredits = () => {
  return (
    <div className='p-3 border mb-4 rounded-2xl'>
      <h2 className="text-lg font-semibold">Free paln</h2>
      <p className="text-xs text-gray-400 mb-3">0/3 message used</p>
      <Progress value={20} />
    </div>
  )
}

export default Usercredits
