import { gql } from "@apollo/client";

export const CONFIRM_USER = gql`
    mutation($email: String!, $code: String!){
    confirmUser(email: $email, code: $code)
  }
`;
