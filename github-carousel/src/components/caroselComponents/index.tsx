import { CarouselContainer } from "./caroselContainer";
import type { GetStaticProps, NextPage } from "next";
import { indexProps } from "./types/types";
import { contributionDay } from "./types/types";
import { GraphQLType } from "graphql";
import { PositionedDay } from "./types/types";

//exposed component for download
const CaroselComponent: React.FC<indexProps> = ({ days, username }) =>{
  return(
    <div>
      <CarouselContainer days={days} username={username}/>
    </div>
  )
}

// pages/index.tsx
export { CaroselComponent as default }
