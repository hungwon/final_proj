//game logic, return image path and restaurant name that corresponds to the image

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

  function chooseImage(){
    const imageRestaurantMapping = {};
    for (let i = 0; i < imagePaths.length; i++) {
        imageRestaurantMapping[imagePaths[i]] = restaurantNames[i];
    }

    const randomNumber = getRandomInt(0, 9);
    const randomImagePath = imagePaths[randomNumber]; 
    const corName  = imageRestaurantMapping[randomImagePath];

    //textbox
    return { restaurantName: corName, imagePath: randomImagePath };
  }

