// this file is for revision - personal

class Studio {
  constructor(name, startYear, members, founder, coFounder) {
    this.name = name;
    this.startYear = startYear;
    this.members = members;
    this.founder = founder;
    this.coFounder = coFounder;
  }

  summary() {
    console.log(
      `${this.name} is started in year ${this.startYear} by ${this.founder} and Co-Founded by ${this.coFounder} with ${this.members} members`
    );
  }
}

// Created  Subclasses and provided it properties of parent class using extends

class BlackSpotStudio extends Studio {}
class VersatileEntertainment extends Studio {}
class Kalamanthan extends Studio {
  constructor(name, startYear, members, founder, coFounder, citylocation) {
    super(name, startYear, members, founder, coFounder);
    this.citylocation = citylocation;
  }

  summary() {
    console.log(
      `${this.name} is started in year ${this.startYear} by ${this.founder} and Co-Founded by ${this.coFounder} with ${this.members} members and is located in ${this.citylocation}`
    );
  }
}

const blackspot = new BlackSpotStudio(
  "Balck-Spot-Studios",
  2019,
  2,
  "Mayank Visariya",
  "Dhara Visariya"
);

console.log(blackspot);

const versatile = new VersatileEntertainment(
  "Versatile Entertainment",
  2018,
  2,
  "Ajinkya",
  "Shubham"
);

console.log(versatile);
versatile.summary();

const kalamanathan = new Kalamanthan(
  "Kalamanthan",
  2015,
  10,
  "Vijay Patil",
  "Harshad Randive",
  "Thane"
);
console.log(kalamanathan);
kalamanathan.summary();

// ---------------------------------------------------
const Studio1 = new Studio(
  "Svadhyay Productions",
  2025,
  10,
  "Shubham",
  "Raviraj"
);
const Studio2 = new Studio(
  "Astitva Productions",
  2021,
  6,
  "Shubham Patil",
  "Shubham Mali"
);

// console.log(Studio1);
// console.log(Studio1.name);
// console.log(Studio1.founder);
// Studio1.summary();
// console.log(Studio.prototype);

// console.log(Studio2);
// Studio2.summary();
