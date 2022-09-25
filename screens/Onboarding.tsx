import { SafeAreaView, FlatList, Text, View, Dimensions } from "react-native";
import { useState, useRef } from "react";
import tw from "twrnc";
import Button from "../components/Button";
import Slide from "../components/Slide";

const { height, width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    description: "We provide professional taxi services for you",
    image: require("../assets/car.png"),
  },
  {
    id: "2",
    description: "Your satisfaction is our number one priority",
    image: require("../assets/person1.png"),
  },
  {
    id: "3",
    description: "Let's make your day great with Taxio right now!",
    image: require("../assets/person2.png"),
  },
];


const Onboarding = ({ navigation }: any) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const ref: any = useRef(null);



    const Footer = () => {
        const moveToNextSlide = () => {
           const nextSlide = currentSlide + 1;

           if(nextSlide !== slides.length){
               const offset = nextSlide * width;
               ref?.current.scrollToOffset({ offset, animated: true });
                setCurrentSlide(nextSlide);
           }

        }

        const getStarted = () => {
            navigation.replace('Login');
        }

      return (
        <View
          style={{
            height: height * 0.25,
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          {/* create slide indicator */}
          <View style={tw`flex-row justify-center mt-[20px]`}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  tw`h-[2.5px] w-[10px] bg-gray-500 mx-[3px] rounded-[2px]
                     `,
                  currentSlide == index && tw`bg-white w-[25px] `,
                ]}
              />
            ))}
          </View>
          <Button style="mt-16" onPress={currentSlide === slides.length - 1 ? getStarted : moveToNextSlide} title={currentSlide === slides.length - 1 ? "Get Started" : "Next"} />
        </View>
      );
    };


    const updateCurrentSlide = (e: { nativeEvent: { contentOffset: { x: any; }; }; }) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const slideIndex = Math.round(contentOffsetX / width);
        setCurrentSlide(slideIndex);
    }




  return (
    <SafeAreaView style={tw`flex-1 bg-[#181A20]`}>
      {/* flatlist to display Slide componet  */}
      <FlatList
      ref={ref}
      onMomentumScrollEnd={updateCurrentSlide}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Slide item={item} />}
        horizontal
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        
        pagingEnabled
      />

      <Footer />
    </SafeAreaView>
  );
};

export default Onboarding;
