import {v4 as uuid} from "uuid"

const items = [
  { },
  {
    list: [
      { name: "bangle", image: "https://i.imgur.com/VDIfSrL.png", price: 50, id: uuid() },
      { name: "bracelet", image: "https://i.imgur.com/RYYzzj5.png", price: 89, id: uuid() },
      { name: "cap", image: "https://i.imgur.com/ngiAkd6.png", price: 100, id: uuid() },
      { name: "contactlense", image: "https://i.imgur.com/MWLAiL1.png", price: 500, id: uuid() },
      { name: "eyeglasses", image: "https://i.imgur.com/yG6HzC6.png", price: 299, id: uuid() },
      { name: "earring", image: "https://i.imgur.com/GtF2ELl.png", price: 349, id: uuid() },
      { name: "headband", image: "https://i.imgur.com/efvTEY5.png", price: 150, id: uuid() },
      { name: "necklace", image: "https://i.imgur.com/nBUemXI.png", price: 2000, id: uuid() },
      { name: "ring", image: "https://i.imgur.com/q7dnkVl.png", price: 5000, id: uuid() },
      { name: "sunglass", image: "https://i.imgur.com/36oXbfe.png", price: 500, id: uuid() },
      { name: "watch", image: "https://i.imgur.com/dYr2VfS.png", price: 1200, id: uuid() },
    ],
  },
  {
    list: [
      { name: "air conditioner", image: "https://i.imgur.com/8e94Ruv.png", price: 20000, id: uuid() },
      { name: "coffee machine", image: "https://i.imgur.com/LV1m3vY.png", price: 5000, id: uuid() },
      { name: "dryer", image: "https://i.imgur.com/ivd1QaP.png", price: 1000, id: uuid() },
      { name: "humidifier", image: "https://i.imgur.com/MWLAiL1.png", price: 23499, id: uuid() },
      { name: "microwave", image: "https://i.imgur.com/hVSi2Bb.png", price: 7699, id: uuid() },
      { name: "mop", image: "https://i.imgur.com/ICEq6RY.png", price: 599, id: uuid() },
      { name: "refrigerator", image: "https://i.imgur.com/IgsBPPx.png", price: 16800, id: uuid() },
      { name: "soundbar", image: "https://i.imgur.com/bV0jw0R.png", price: 2499, id: uuid() },
      { name: "speaker", image: "https://i.imgur.com/WPCkqOK.png", price: 1499, id: uuid() },
      { name: "standfan", image: "https://i.imgur.com/fc9GAzl.png", price: 2399, id: uuid() },
      { name: "stove", image: "https://i.imgur.com/NSCiajk.png", price: 3999, id: uuid() },
      { name: "television", image: "https://i.imgur.com/unmqLIG.png", price: 12499, id: uuid() },
      { name: "toaster", image: "https://i.imgur.com/h7RHNaH.png", price: 2199, id: uuid() },
      { name: "vacuum cleaner", image: "https://i.imgur.com/NZnzesD.png", price: 5699, id: uuid() },
      { name: "wall fan ", image: "https://i.imgur.com/kbTbR1C.png", price: 2699, id: uuid() },
      { name: "washing machine", image: "https://i.imgur.com/YKiAyEF.png", price: 22699, id: uuid() },
    ],
  },
  {
    list: [
      { name: "Antifereze", image: "https://i.imgur.com/zgLuC01.png",price: 450 , id:uuid()},
      { name: "Brake fluid", image: "https://i.imgur.com/cDSniTF.png",price:250  , id:uuid()},
      { name: "Engine oil", image: "https://i.imgur.com/CiqK5Rg.png",price:249  , id:uuid()},
      { name: "Grease", image: "https://i.imgur.com/9CfB2uo.png",price: 100 , id:uuid()},
      { name: "Helmet", image: "https://i.imgur.com/3Uwjq7u.png",price:999  , id:uuid()},
      {
        name: "Power steering fluid",
        image: "https://i.imgur.com/jukk1iH.png",price:599,
       id:uuid()},
      { name: "Sealer", image: "https://i.imgur.com/6gOjOpR.png",price:399  , id:uuid()},
      { name: "Transmission fluid", image: "https://i.imgur.com/skgM3Vp.png",price: 499 , id:uuid()},
    ],
 },
  {
    list: [
      { name: "Action camera", image: "https://i.imgur.com/Tni1rBZ.png",price:5999  , id:uuid()},
      { name: "Basic phone", image: "https://i.imgur.com/xUS169o.png",price:799  , id:uuid()},
      { name: "Bluetooth speaker", image: "https://i.imgur.com/ZpTIqn0.png",price:1299  , id:uuid()},
      { name: "Computer table", image: "https://i.imgur.com/1lOl6o7.png",price: 3999 , id:uuid()},
      { name: "Desktop", image: "https://i.imgur.com/g4HxW1v.png",price:6999  , id:uuid()},
      { name: "drone", image: "https://i.imgur.com/sjqRpjA.png",price:23999  , id:uuid()},
      { name: "earphone", image: "https://i.imgur.com/FeuMhxG.png",price:399  , id:uuid()},
      { name: "Gameboy", image: "https://i.imgur.com/kehUy3u.png",price:749  , id:uuid()},
      { name: "Gaming console", image: "https://i.imgur.com/rNZ36Bs.png",price: 849 , id:uuid()},
      { name: "Headset", image: "https://i.imgur.com/4DsieNL.png",price:999  , id:uuid()},
      { name: "Laptop", image: "https://i.imgur.com/ENfiqLT.png",price:50999  , id:uuid()},
      { name: "Mobile", image: "https://i.imgur.com/aq26mpK.png",price:9999  , id:uuid()},
      { name: "Nintendoswitch", image: "https://i.imgur.com/ecchXoB.png",price:1399  , id:uuid()},
      { name: "Phone charger", image: "https://i.imgur.com/nUalUF6.png",price:350  , id:uuid()},
      { name: "Powerbank", image: "https://i.imgur.com/iWJqf8b.png",price: 599 , id:uuid()},
      { name: "Security camera", image: "https://i.imgur.com/eOVKke4.png",price:2699  , id:uuid()},
      { name: "Smartwatch", image: "https://i.imgur.com/gLyApVP.png",price:3999  , id:uuid()},
    ],
  },
];

export default items;
