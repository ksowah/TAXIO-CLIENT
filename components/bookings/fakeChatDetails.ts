import { Chat } from "../../types";

export const chatDetails: Chat[] = [
    {
    newChat: true,
    name: "Kelvin Sowah",
    image: require("../../assets/kevin.jpg"),
  },
  {
    newChat: true,
    name: "Albert Flores",
    image: require("../../assets/drivers/driver1.jpg"),
  },
  {
    newChat: false,
    name: "Cornor Rayse",
    image: require("../../assets/drivers/driver2.jpg"),
  },
  {
    newChat: true,
    name: "Jeff Pim",
    image: require("../../assets/drivers/driver3.jpg"),
  },
  {
    newChat: false,
    name: "Klay Forbs",
    image: require("../../assets/drivers/driver4.jpg"),
  },
  {
    newChat: false,
    name: "Phil Jackson",
    image: require("../../assets/drivers/driver6.jpg"),
  },
  {
    newChat: true,
    name: "Kevin Hart",
    image: require("../../assets/drivers/driver7.jpg"),
  },
  {
    newChat: false,
    name: "Jay Dex",
    image: require("../../assets/drivers/driver8.jpg"),
  },
  {
    newChat: false,
    name: "Paul George",
    image: require("../../assets/drivers/driver9.jpg"),
  },
  {
    newChat: false,
    name: "George Hill",
    image: require("../../assets/drivers/driver10.jpg"),
  },
]

export const getRandomChat = () => {
    return chatDetails[Math.floor(Math.random() * chatDetails.length)]
}