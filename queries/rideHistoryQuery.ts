import { gql } from "@apollo/client";

export const RIDE_HISTORY_QUERY = gql`
query($user: String!){
    getRideHistory(user: $user) {
      _id
      description
      lat
      lng
    }
  }
`

