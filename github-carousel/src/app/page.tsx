import Image from "next/image";
import type { GetStaticProps } from "next";
import type { PositionedDay } from "@/components/caroselComponents/types/types";
import CaroselComponent from "@/components/caroselComponents"
import { apolloClient } from "@/graphql/graphqlClient";
import { contributionDay } from "@/components/caroselComponents/types/types";
import { CONTRIBUTIONS_QUERY } from "@/graphql/graphqlQueries";
import { indexProps } from "@/components/caroselComponents/types/types";
import { CaroselContainer } from "@/components/caroselComponents/caroselContainer";

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


export const revalidate = 3600;

export default async function CarouselPage() {
  const username = process.env.GITHUB_USERNAME!;
  const days = await fetchContributions(username);

  return <CaroselContainer days={days} username={username} />;
}

