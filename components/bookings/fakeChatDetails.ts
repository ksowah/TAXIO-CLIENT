import { Chat } from "../../types";

export const chatDetails: Chat[] = [
    {
    time: "13:29",
    count: "2",
    message: "I'm on my way",
    newChat: true,
    name: "Kelvin Sowah",
    image: require("../../assets/kevin.jpg"),
  },
  {
    time: "10:48",
    count: "3",
    message: "I just completed it 😅😅",
    newChat: true,
    name: "Albert Flores",
    image: require("../../assets/drivers/driver1.jpg"),
  },
  {
    time: "9:25",
    count: "0",
    message: "omg this is amazing 🔥🔥",
    newChat: false,
    name: "Cornor Rayse",
    image: require("../../assets/drivers/driver2.jpg"),
  },
  {
    time: "yesterday",
    count: "1",
    message: "Wow that was very quick",
    newChat: true,
    name: "Jeff Pim",
    image: require("../../assets/drivers/driver3.jpg"),
  },
  {
    time: "Oct 20, 2022",
    count: "0",
    message: "Just ideas for next time",
    newChat: false,
    name: "Klay Forbs",
    image: require("../../assets/drivers/driver4.jpg"),
  },
  {
    time: "Oct 15, 2022",
    count: "0",
    message: "I'm on the side of the road",
    newChat: false,
    name: "Phil Jackson",
    image: require("../../assets/drivers/driver6.jpg"),
  },
  {
    time: "Sep 26, 2022",
    count: "1",
    message: "Perfect 💯💯",
    newChat: true,
    name: "Kevin Hart",
    image: require("../../assets/drivers/driver7.jpg"),
  },
  {
    time: "Sep 12, 2022",
    count: "0",
    message: "I'll be ther in 5",
    newChat: false,
    name: "Jay Dex",
    image: require("../../assets/drivers/driver8.jpg"),
  },
  {
    time: "Aug 10, 2022",
    count: "0",
    message: "I'm almost here",
    newChat: false,
    name: "Paul George",
    image: require("../../assets/drivers/driver9.jpg"),
  },
  {
    time: "Aug 07, 2022",
    count: "0",
    message: "Where exactly are you at the moment?",
    newChat: false,
    name: "George Hill",
    image: require("../../assets/drivers/driver10.jpg"),
  },
]

export const getRandomChat = () => {
    return chatDetails[Math.floor(Math.random() * chatDetails.length)]
}