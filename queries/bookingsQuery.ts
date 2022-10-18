import { gql } from "@apollo/client";

export const BOOKINGS_QUERY = gql`
query($user: String!){
    getBookings(user: $user){
        date
        destination
        distance
        origin
        price
        time
      }
  }
`

