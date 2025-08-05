import { GithubSquareType } from "./types/types";

export default function GithubSquare(props:GithubSquareType){
    return(
        <div style={{backgroundColor : props.color}} className={`${props.isHovered? `scale-103` : ``} ${props.isNeighbor? `scale-101` : ``} h-4 w-4 md:h-2 md:w-2 rounded-xl transition-transform`} onMouseEnter={()=>props.action}>
            {props.isHovered ? <p className="absolute text-white font-light">{props.contributionCount}</p> : <p></p>}
        </div>
    )
}