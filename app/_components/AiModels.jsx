"use client";
import Aimodellist from '@/shared/Aimodellist';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from '@/components/ui/switch';

const AiModels = () => {
  const [aimodel, setaimodel] = useState(Aimodellist);

  const ontoggle = (model, value) => {
    setaimodel(prev =>
      prev.map(m =>
        m.model === model ? { ...m, enable: value } : m
      )
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 overflow-x-auto hide-scrollbar p-4">
      {aimodel.map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 w-96 shrink-0 transition-all duration-300 bg-white dark:bg-gray-900 dark:text-white shadow-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src={item.icon} alt={item.model} width={24} height={24} />
              <h3 className="font-medium">{item.model}</h3>
            </div>

            <div className="flex items-center gap-2">
              {item.enable && (
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder={item.submodel[0].name} />
                  </SelectTrigger>
                  <SelectContent>
                    {item.submodel.map((models, i) => (
                      <SelectItem key={i} value={models.name}>
                        {models.name}
                      </SelectItem>
                    ))}
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
            className={`transition-all duration-300 overflow-hidden ${
              item.enable ? "max-h-[470px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="overflow-y-auto h-[470px] hide-scrollbar border-t border-gray-200 dark:border-gray-700 pt-3">
              {Array.from({ length: 25 }).map((_, i) => (
                <h1 key={i}>hellow</h1>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AiModels;
