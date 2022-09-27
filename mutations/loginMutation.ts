import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation($password: String!, $email: String!){
  login(password: $password, email: $email) {
    success
    token
    user {
      _id
      email
    }
  }
}
`;
