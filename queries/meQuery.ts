import { gql } from "@apollo/client";



export const ME_QUERY = gql`
  query getMe {
    me {
      _id
      email
      profileUpdated
    }
  }
`

