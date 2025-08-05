import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
export var apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: "https://api.github.com/graphql",
        headers: {
            Authorization: "Bearer ".concat(process.env.GITHUB_TOKEN),
        },
    }),
    cache: new InMemoryCache(),
});
