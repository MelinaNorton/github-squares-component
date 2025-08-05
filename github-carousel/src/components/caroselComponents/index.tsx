import { CaroselContainer } from "./caroselContainer"
import type { GetStaticProps, NextPage } from "next";
import { apolloClient } from "@/graphql/graphqlClient";
import { CONTRIBUTIONS_QUERY } from "@/graphql/graphqlQueries";
import { indexProps } from "./types/types";
import { contributionDay } from "./types/types";
import { GraphQLType } from "graphql";
import { PositionedDay } from "./types/types";

export async function fetchContributions(
  username: string
): Promise<PositionedDay[]> {
  const { data } = await apolloClient.query<{
    user: {
      contributionsCollection: {
        contributionCalendar: {
          weeks: Array<{ contributionDays: contributionDay[] }>;
        };
      };
    };
  }>({
    query: CONTRIBUTIONS_QUERY,
    variables: { login: username },
  });

  return data.user.contributionsCollection.contributionCalendar.weeks
    .flatMap((week, weekIdx) =>
      week.contributionDays.map((day, dayIdx) => ({
        ...day,
        weekIdx,
        dayIdx,
      }))
    );
}

export const getStaticProps: GetStaticProps<indexProps> = async () => {
  const days = await fetchContributions("yourGithubUsername");
  const username = "yourGithubUsername"  
  return {
    props: { days, username },
    revalidate: 3600,
  };
};

//exposed component for download
export const CaroselComponent: React.FC<indexProps> = ({ days, username }) =>{
  return(
    <div>
      <CaroselContainer days={days} username={username}/>
    </div>
  )
}