import { gql } from "@apollo/client";

export const RIDE_HISTORY_MUTATION = gql`
mutation($user: String!, $lng: String!, $lat: String!, $description: String!){
  history(user: $user, lng: $lng, lat: $lat, description: $description) {
    _id
    description
    lat
    lng
  }
}
`;
