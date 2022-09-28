import { gql } from "@apollo/client";


export const REGISTER = gql`
mutation ($data: RegisterInput!){
  register(data: $data)
}
`