import { gql } from "@apollo/client";

export const CONTRIBUTIONS_QUERY = gql`
  query Contributions($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              color
              contributionCount
            }
          }
        }
      }
    }
  }
`;