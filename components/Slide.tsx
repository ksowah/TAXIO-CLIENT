import { Image, StyleSheet, Dimensions, Text, View } from "react-native"
import { Onboarding, Theme } from "../types"
import tw from "twrnc"
import Button from "./Button"
import themeContext from "./config/themeContext"
import { useContext } from "react"

interface Props {
    item: Onboarding
}

const { width } = Dimensions.get("window")

const Slide = ({item}: Props) => {

    const theme: Theme = useContext(themeContext)

  return (
        // create Slide component
        <View style={[styles.container, {width}]}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.description, tw`text-[${theme.text}]`]}>{item.description}</Text>
        </View>
  )
}

export default Slide

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width,
        height: "60%",
        resizeMode: 'contain',
    },
    description: {
        fontSize: 30,
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 35,
    },
})
