import { CaroselContainer } from "./caroselContainer"
import type { GetStaticProps, NextPage } from "next";
import { apolloClient } from "@/graphql/graphqlClient";
import { CONTRIBUTIONS_QUERY } from "@/graphql/graphqlQueries";

//exposed component for download
export default function CaroselComponent (){
  return(
    <div>
      <CaroselContainer/>
    </div>
  )
}