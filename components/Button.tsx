import { TouchableOpacity, Text } from "react-native"
import tw from "twrnc"

interface Props {
    title: string
    onPress?: () => void
    style?: any 
    text?: any
    loading?: boolean
}

const Button = ({title, onPress, style, text, loading}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={.5} style={tw`w-[90%] bg-[#FEBB1B] items-center justify-center shadow-[#FEBB1B] shadow-2xl rounded-3xl mx-6 h-[3.1rem] ${style}`}>
       <Text style={tw`text-lg ${text} font-bold text-center`}>
          {loading ? "Loading..." : title}
       </Text>
    </TouchableOpacity>
  )
}

export default Button