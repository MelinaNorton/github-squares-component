import { Dispatch } from "react";
import { SetStateAction } from "react";

export interface contributionDay {
    date: string;
    color: string;
    contributionCount: number;
}

export type CaroselContainerProps = {
    days : PositionedDay[],
    username : string
}

export interface indexProps {
    username : string,
    days : PositionedDay[]
}

export type graphqlFetchType = {
    days : PositionedDay
}

export type GithubSquareType = {
    date: string;
    color: string;
    contributionCount: number;
}

export interface PositionedDay extends contributionDay {
  weekIdx: number;
  dayIdx: number;
}