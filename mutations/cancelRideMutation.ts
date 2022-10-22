import { gql } from "@apollo/client";


export const CANCEL_RIDE_MUTATION = gql`
mutation($id: String!) {
    cancelBookings(id: $id) {
      _id
      cancelled
    }
  }
`