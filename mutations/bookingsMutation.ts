import { gql } from "@apollo/client";


export const BOOKINGS_MUTATION = gql`
mutation($data: BookingsInput!){
    bookings(data: $data) {
      date
      _id
    }
   }
`