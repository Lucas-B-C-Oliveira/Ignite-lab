import { ApolloClient, InMemoryCache } from "@apollo/client"


export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4of6sta27el01z26iaza0b0/master',
  cache: new InMemoryCache()

})