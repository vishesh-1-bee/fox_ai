"use client";
import Aimodellist from '@/shared/Aimodellist';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from '@/components/ui/switch';
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';
import { Lock } from 'lucide-react';
import { Aicontext } from '../context/Aicontext';
import { useUser } from '@clerk/nextjs';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/config/Firebaseconfif';


const AiModels = () => {
  const { user } = useUser()
  const [aimodel, setaimodel] = useState(Aimodellist);
  const { aimodels, setaimodels } = useContext(Aicontext)

  const ontoggle = (model, value) => {
    setaimodel(prev =>
      prev.map(m =>
        m.model === model ? { ...m, enable: value } : m
      )
    );
  };

  //function for the chaning the selected ai model
  const onSelectValue = async (parentModel, value) => {
    setaimodels(prev => ({
      ...prev,
      [parentModel]: {
        modelId: value
      }
    }))
    const docRef = doc(db, "users", user?.primaryEmailAddress?.emailAddress);
    await updateDoc(docRef, {
      selectedModel: aimodels
    })
  }
  //storing it in the firebase database

  return (
    <div className="flex flex-col  lg:flex-row gap-4 overflow-x-auto hide-scrollbar p-4">
      {aimodel.map((item, index) => (
        <div
          key={index}
          className="p-4 max-sm:w-full  rounded-xl border border-gray-200 dark:border-gray-700 w-96  shrink-0 transition-all duration-300 bg-white dark:bg-gray-900 dark:text-white shadow-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src={item.icon} alt={item.model} width={24} height={24} />
              <h3 className="font-medium">{item.model}</h3>
            </div>

            <div className="flex items-center gap-2">
              {item.enable && (
                <Select defaultValue={aimodels[item.model].modelId} onValueChange={(value) => onSelectValue(item.model, value)}
                disabled={item.premium}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder={aimodels[item.model].modelId} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Free</SelectLabel>
                      {item.submodel.map((models, i) => models.premium == false && (
                        <SelectItem key={i} value={models.id}>
                          {models.name}
                        </SelectItem>
                      ))}</SelectGroup>


                    <SelectGroup className='pt-3'>
                      <SelectLabel className='text-sm text-gray-400'>Premiun</SelectLabel>
                      {item.submodel.map((models, i) => models.premium == true && (
                        <SelectItem key={i} value={models.name} disabled={models.premium}>
                          {models.name} {models.premium && <Lock className='h-1 w-1' />}
                        </SelectItem>
                      ))}</SelectGroup>
                  </SelectContent>
                </Select>
              )}
              <Switch
                checked={item.enable}
                onCheckedChange={(value) => ontoggle(item.model, value)}
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-300 overflow-hidden ${item.enable ? "max-h-[470px] opacity-100 " : "max-h-0 opacity-0"
              }`}
          >
            {item.premium && item.enable ? (
              <div className='border-t pt-3 flex justify-center items-center'>Upgrad to unlock</div>
            )
              : (<div className="overflow-y-auto h-[470px] hide-scrollbar border-t border-gray-200 dark:border-gray-700 pt-3">
                {Array.from({ length: 25 }).map((_, i) => (
                  <h1 key={i}>hellow</h1>
                ))}
              </div>)}

          </div>
        </div>
      ))}
    </div>
  );
};

export default AiModels;
