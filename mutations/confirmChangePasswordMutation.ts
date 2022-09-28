import { gql } from "@apollo/client";

export const CONFIRM_CHANGE_PASSWORD = gql`
    mutation($email: String!, $code: String!){
    confirmChangePassword(email: $email, code: $code)
  }
`;
