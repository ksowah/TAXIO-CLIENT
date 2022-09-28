import { gql } from "@apollo/client";


export const CHANGE_PASSWORD = gql`
mutation($data: ChangePasswordInputType!){
    changePassword(data: $data) {
      _id
      email
    }
   }
`