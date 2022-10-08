import { Point } from "react-native-google-places-autocomplete"
import { atom } from "recoil"


interface Origin {
    location: Point | undefined;
    description: string;
}

export const originAtom = atom<Origin | null>({
    key: "originAtom",
    default: null,
})

export const destinationAtom = atom({
    key: "destinationAtom",
    default: null,
})

export const travelTimeInfo = atom({
    key: "travelTimeInfo",
    default: null,
})

export const addressAtom = atom({
    key: "addressAtom",
    default: null,
})


