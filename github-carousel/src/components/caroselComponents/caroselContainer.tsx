import { CaroselContainerProps, contributionDay } from "./types/types"
import React, { useState } from "react";
import GithubSquare from "./githubSquare";
import { PositionedDay } from "./types/types";

export const CaroselContainer : React.FC<CaroselContainerProps> = ({days, username}) =>{

    const [hovered, setHovered] = useState<PositionedDay | null>(null);

    const isNeighbor = (d: PositionedDay) => {
        if (!hovered) return false;
        return (
            Math.abs(d.weekIdx - hovered.weekIdx) <= 1 &&
            Math.abs(d.dayIdx  - hovered.dayIdx ) <= 1
        );
    };

    return(
        <div className=" flex flex-col items-center justify-center">
            {
                days.map((singleDay : PositionedDay) => (
                    <GithubSquare isHovered={hovered?.date === singleDay.date} isNeighbor={isNeighbor(singleDay)} color={singleDay.color} date={singleDay.date} contributionCount={singleDay.contributionCount} action={()=>setHovered(singleDay)}/>
                ))
            }
        </div>
    )
}