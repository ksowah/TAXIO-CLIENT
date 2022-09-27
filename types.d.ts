import { ImageSourcePropType } from "react-native";

type Onboarding = {
    id: string;
    description: string;
    image: ImageSourcePropType;
}

export interface RegisterInput {
    password: string;
  
    firstName: string;
  
    lastName: string;
  
    email: string;
  }

