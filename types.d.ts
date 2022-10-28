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
    base_light_shade: string
}

interface Bookings {
    date: any,
    destination: string,
    distance: string,
    origin: string,
    price: string,
    time: string,
    cancelled: boolean,
}

interface Driver {
    name: string,
    car: string,
    plate: string,
    image: ImageSourcePropType
}

interface Chat {
    newChat: boolean,
    name: string,
    image: ImageSourcePropType
    message: string
    count: string
}

export interface RegisterInput {
    password: string;
  
    firstName: string;
  
    lastName: string;
  
    email: string;
  }

