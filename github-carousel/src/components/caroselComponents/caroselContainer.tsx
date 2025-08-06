// CarouselContainer.tsx
'use client'
import React from "react"
import { CaroselContainerProps } from "./types/types"
import GithubSquare from "./githubSquare"

export const CarouselContainer: React.FC<CaroselContainerProps> = ({ days }) => {
  return (
    <div className="overflow-hidden w-full h-40 opacity-40">
      <div tabIndex={0} className="inline-flex animate-marquee space-x-1 h-full">
        <div className="grid grid-rows-3 sm:grid-rows-5 md:grid-rows-7 grid-flow-col gap-1">
          {days.map(day => (
            <GithubSquare key={day.date} {...day} />
          ))}
        </div>
        <div aria-hidden className="grid grid-rows-3 sm:grid-rows-5 md:grid-rows-7 grid-flow-col gap-1">
          {days.map(day => (
            <GithubSquare key={day.date + "-dup"} {...day} />
          ))}
        </div>
      </div>
    </div>
  )
}
