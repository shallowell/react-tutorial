import "bulma/css/bulma.css";

import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql} from "@apollo/client"
import App from "./App";

const client = new ApolloClient({
    url: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new InMemoryCache()
})


render(<App />, document.querySelector("#content"))