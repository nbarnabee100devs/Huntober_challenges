const target =
  "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood";

const testSuite = {
  splitString: function (str) {
    this.result = str.split(",");
    return this;
  },
  trimTest: function () {
    this.result = this.result.filter((pun) => pun.trim() === pun);
    return this;
  },
  dogFilter: function () {
    this.result = this.result.filter(
      (pun) => pun.match(/dog|bone|bark/gi) == null
    );
    return this;
  },
  lengthTest: function () {
    this.result = this.result.filter((pun) => pun.length % 5);
    return this;
  },
  charCodeSum: function () {
    this.result = this.result.filter(
      (pun) => (pun.charCodeAt(0) + pun.charCodeAt(pun.length - 1)) % 2
    );
    return this;
  },
  centerCharFilter: function () {
    this.result = this.result.filter(
      (pun) => pun.charAt(Math.ceil(pun.length / 2)) != "e"
    );
    return this;
  },
  lowerEvenCheck: function () {
    this.result = this.result.filter(
      (pun) => !(pun.match(/[a-z]/g).length % 2)
    );
    return this;
  },
  twoCapitals: function () {
    this.result = this.result.filter(
      (pun) => pun.match(/[A-Z]/g) && pun.match(/[A-Z]/g).length >= 2
    );
    return this;
  },
  noBigS: function () {
    this.result = this.result.filter((pun) => pun.indexOf("S") === -1);
    return this;
  },
};

const result = testSuite
  .splitString(target)
  .trimTest()
  .dogFilter()
  .lengthTest()
  .charCodeSum()
  .centerCharFilter()
  .lowerEvenCheck()
  .twoCapitals()
  .noBigS().result;

console.log(result, result.length);

/*
function splitString(str) {
  return str.split(",");
}

function trimTest(arr) {
  return arr.filter((pun) => pun.trim() === pun);
}

function naughtyWordFilter(arr) {
  return arr.filter((pun) => pun.match(/dog|bone|bark/gi) == null);
}

function lengthMultipleTest(arr) {
  return arr.filter((pun) => pun.length % 5);
}

function charCodeSumFilter(arr) {
  return arr.filter(
    (pun) => (pun.charCodeAt(0) + pun.charCodeAt(pun.length - 1)) % 2
  );
}

function centerCharFilter(arr) {
  return arr.filter((pun) => pun.charAt(Math.ceil(pun.length / 2)) != "e");
}

function lowerEven(arr) {
  return arr.filter((pun) => !(pun.match(/[a-z]/g).length % 2));
}

function twoCapitals(arr) {
  return arr.filter(
    (pun) => pun.match(/[A-Z]/g) && pun.match(/[A-Z]/g).length >= 2
  );
}

function noBigS(arr) {
  return arr.filter((pun) => pun.indexOf("S") === -1);
}
*/
