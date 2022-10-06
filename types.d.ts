import { ImageSourcePropType } from "react-native";

type Onboarding = {
    id: string;
    description: string;
    image: ImageSourcePropType;
}

interface Theme {
    base: string,
    text: string,
    border: string,
    input_base: string,
    yellow: string,
    fade_text: string,
    map_items: string
    mode: boolean
    fade_yellow: string
    directions: string
    input_focus: string
}

export interface RegisterInput {
    password: string;
  
    firstName: string;
  
    lastName: string;
  
    email: string;
  }

