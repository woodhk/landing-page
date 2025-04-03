"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "../../../../../../components/shared/shad-button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../../../../components/shared/tabs"
import phases from "../data/phases"

export default function Phases() {
  const [activePhase, setActivePhase] = useState("phase-1")

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6">Step by Step Guidance</h2>
        <p className="text-lg max-w-4xl mx-auto">
          Each role-play is structured into five phases, gradually reducing support at each stage, until staff
          are role-playing full conversations independently, as they would in real workplace situations.
        </p>
      </div>

      <Tabs 
        defaultValue="phase-1" 
        className="w-full"
        onValueChange={(value: string) => setActivePhase(value)}
      >
        <TabsList className="grid grid-cols-5 w-full max-w-4xl mx-auto">
          {phases.map((phase) => (
            <TabsTrigger key={phase.id} value={phase.id}>
              {phase.pill}
            </TabsTrigger>
          ))}
        </TabsList>

        {phases.map((phase) => (
          <TabsContent key={phase.id} value={phase.id} className="mt-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="inline-block bg-blue-50 text-blue-600 rounded-full px-4 py-1 text-sm font-medium">
                    {phase.pill}
                  </div>
                  <h3 className="text-4xl font-bold">{phase.title}</h3>
                  <p className="text-lg">{phase.description}</p>
                  
                  <div className="mt-8 bg-blue-50/50 rounded-lg p-8 border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                      <h4 className="font-medium text-blue-600 bg-blue-50 px-4 py-1 rounded-full text-sm uppercase tracking-wide">{phase.analogyTitle}</h4>
                      <div className="h-[1px] flex-1 bg-blue-200"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{phase.analogy}</p>
                  </div>

                  {phase.hasButton && (
                    <Button className="mt-4">{phase.buttonText}</Button>
                  )}
                </div>
                
                <div className="relative h-120 bg-gray-100 rounded-lg overflow-hidden">
                  <Image 
                    src={phase.imagePath}
                    alt={`Illustration for ${phase.title}`}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Small image overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/4 shadow-lg rounded-lg overflow-hidden border-4 border-white">
                    <Image 
                      src={phase.smallImagePath}
                      alt={`App screenshot for ${phase.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
