//game logic, return image path and restaurant name that corresponds to the image

import df from './data.json' 

const restaurantNames = [
    "Blondies",
    "Dumping Kitchen",
    "D'Yar",
    "IB's",
    "Kimchi Garden",
    "Koja Kitchen",
    "Murraci",
    "Poke Parlor",
    "Super Duper",
    "T-Toust"
  ];

  //Is the path correct?
const imagePaths = [

    "../public/img/blondies_food.PNG",
    "../public/img/dumpling_food.PNG",
    "../public/img/dyar_food.PNG",
    "../public/img/ibs_food.PNG",
    "../public/img/kimchigarden_food.PNG",
    "../public/img/koja_food.PNG",
    "../public/img/murraci_food.PNG",
    "../public/img/pokeparlor_food.PNG",
    "../public/img/superduper_food.PNG",
    "../public/img/ttoust_food.PNG"
  ];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function chooseRest(){
    const imageRestaurantMapping = {};
    for (let i = 0; i < imagePaths.length; i++) {
        imageRestaurantMapping[imagePaths[i]] = restaurantNames[i];
    }
    const randomNumber = getRandomInt(0, 9);
    console.log(df[randomNumber])
    return df[randomNumber]
  }

    function updateImage() {
        const restaurant =  chooseRest();
        localStorage.setItem("restaurant-card", restaurant);
        return restaurant
      }
  
      function displayStoredImage() {
        const storedObj = localStorage.getItem("retaurant-card");
        if (storedObj) {
          const restaurant = JSON.parse(storedObj);
          const rest = document.getElementById("restaurant-card");
        }
      }
      export { updateImage, displayStoredImage };
