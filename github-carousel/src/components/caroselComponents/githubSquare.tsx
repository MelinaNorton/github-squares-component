import { GithubSquareType } from "./types/types";
import { useState } from "react";

const NO_ACTIVITY_COLOR = "#ebedf0";

// GithubSquare.tsx
export default function GithubSquare({
  color,
  date,
  contributionCount
}: GithubSquareType) {
    const [isHovered, setHovered]= useState(false)
     const isEmpty = color.toLowerCase() === NO_ACTIVITY_COLOR;
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
        <div style={{ backgroundColor: color }} className={`hover:scale-130 transform transition-transform duration-50 rounded-xs h-4 w-4 hover:cursor-pointer ${isEmpty ? "opacity-20" : "opacity-100"}`}>
        </div>
        {isHovered && contributionCount!=0 ? 
            <div className="z-10 absolute top-5 left-3 flex flex-col items-center justify-center p-1 bg-gray-600/30 h-4 w-6">
                <p className="text-white font-bold">{contributionCount}</p> 
            </div>
        : 
            <p></p>}
    </div>
  );
}
