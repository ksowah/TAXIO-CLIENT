import { gql } from "@apollo/client";


export const UPDATE_PROFILE = gql`
mutation($data: ProfileInput!){
    profile(data: $data) {
      profileUpdated
    }
  }
`