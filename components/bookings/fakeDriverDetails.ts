const driverDetails = [
    {
    name: "Kelvin Sowah",
    car: "Honda Mobillo",
    plate: "HDG 6374 SY",
    image: require("../../assets/kevin.jpg"),
  },
  {
    name: "Albert Flores",
    car: "Toyota Alfard",
    plate: "APB 5267 QR",
    image: require("../../assets/drivers/driver1.jpg"),
  },
  {
    name: "Cornor Rayse",
    car: "Rolls Royce",
    plate: "PHD 3255 AY",
    image: require("../../assets/drivers/driver2.jpg"),
  },
  {
    name: "Jeff Pim",
    car: "Kia Piccanto",
    plate: "GRE 5849 FH",
    image: require("../../assets/drivers/driver3.jpg"),
  },
  {
    name: "Klay Forbs",
    car: "Toyota Yaris",
    plate: "HFG 6438 DB",
    image: require("../../assets/drivers/driver4.jpg"),
  },
  {
    name: "Phil Jackson",
    car: "Toyota Camry",
    plate: "TER 2294 DE",
    image: require("../../assets/drivers/driver6.jpg"),
  },
  {
    name: "Kevin Hart",
    car: "Honda Civic",
    plate: "CBE 9663 AR",
    image: require("../../assets/drivers/driver7.jpg"),
  },
  {
    name: "Jay Dex",
    car: "Honda Accord",
    plate: "SAB 2947 BD",
    image: require("../../assets/drivers/driver8.jpg"),
  },
  {
    name: "Paul George",
    car: "Toyota Corolla",
    plate: "EDD 2947 BD",
    image: require("../../assets/drivers/driver9.jpg"),
  },
  {
    name: "George Hill",
    car: "Lamborghini", 
    plate: "WED 2846 TT",
    image: require("../../assets/drivers/driver10.jpg"),
  },
]

export const getRandomDriver = () => {
    return driverDetails[Math.floor(Math.random() * driverDetails.length)]
}