import { Image, StyleSheet, Dimensions, Text, View } from "react-native"
import { Onboarding } from "../types"
import tw from "twrnc"
import Button from "./Button"

interface Props {
    item: Onboarding
}

const { width } = Dimensions.get("window")

const Slide = ({item}: Props) => {
  return (
        // create Slide component
        <View style={[styles.container, {width}]}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
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
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 35,
    },
})
