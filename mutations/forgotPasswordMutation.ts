import { gql } from "@apollo/client";

export const FORGOT_PASSWORD = gql`
mutation($email: String!){
    forgotPassword(email: $email)
  }
`;
