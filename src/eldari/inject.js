const { world, refPackageId } = require("@tabletop-playground/api");

const nsidToTemplateId = {
  "sheet.faction:homebrew.eldari/eldari": "E9E1AA664053681C9ADB6FA3A8A24F85",
  "token.command:homebrew.eldari/eldari": "9F0612D446D0E45C63F3719F59645FF4",
  "token.control:homebrew.eldari/eldari": "D6A0AA054FE27E90AFEDBFB21DF7F3AD",
  "tile.system:homebrew.eldari/201": "AE0CE7F941F9C1D13A663995A857D171",
  "card.leader:homebrew.eldari/0": "7FF57E8A46A47153CF5870A8CBBDA9B6",
  "card.planet:homebrew.eldari/0": "7B6DE9DB4029677BA43AAFBFCC26AA07",
  "card.promissory:homebrew.eldari/0": "F3A0E08D4563ED20C15242B198704062",
  "card.technology:homebrew.eldari/0": "BC8A541E40E12DB72792F6B0E08BBF61",

}

const localeStrings = {
  "faction.abbr.eldari": "Eldari",
  "faction.full.eldari": "The Eldari Ancients",
  "planet.yenaza": "Yenaza",
  "technology.name.atrophy_synthesis": "Atrophy Synthesis",
  "technology.name.retribution_drive": "Retribution Drive",
  "unit.flagship.the_ancients_wisdom": "The Ancient's Wisdom",
  "unit.mech.xyloid_walker": "Xyloid Walker",
};

const factions = [
  {
    faction: "eldari",
    abilities: [
      "fleet_resurection",
      "deteriorating_archive",
      "lazax_eldari_accords",
    ],
    commodities: 2,
    home: 201,
    icon: "eldari/eldari-faction-icon.png",
    leaders: {
      agents: ["brivom"],
      commanders: ["umberem"],
      heroes: ["star_death"],
    },
    packageId: refPackageId,
    promissoryNotes: ["gift_of_insight"],
    source: "homebrew.eldari",
    startingTech: [
      "ai_development_algorithm",
      "infantry_2",
      "destroyer_2",
      "carrier_2",
      "space_dock_2",
      "fighter_2",
      "pds_2",
      "cruiser_2",
      "dreadnought_2",
      "war_sun",
    ],
    startingUnits: {
      flagship: 1,
      mech: 4,
      space_dock: 1,
    },
    techs: ["atrophy_synthesis", "retribution_drive"],
    units: ["the_ancients_wisdom"],
  },
];

const systems = [
  {
    tile: 201,
    source: "homebrew.eldari",
    home: true,
    packageId: refPackageId,
    img: "eldari/eldari-home-system-tile.jpg",
    planets: [{ localeName: "planet.yenaza", resources: 2, influence: 2 }],
  },
];

const technologies = [
  {
    localeName: "technology.name.atrophy_synthesis",
    cardNsid:
      "card.technology.green.eldari:homebrew.eldari/atrophy_synthesis",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.eldari",
    faction: "eldari",
  },
  {
    localeName: "technology.name.retribution_drive",
    cardNsid:
      "card.technology.red.eldari:homebrew.eldari/retribution_drive",
    type: "Red",
    requirements: { Red: 3 },
    source: "homebrew.eldari",
    faction: "eldari",
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.the_ancients_wisdom",
    move: 1,
    capacity: 4,
    bombardment: { dice: 2, hit: 7 }
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.xyloid_walker",
    triggerNsid:
      "card.leader.mech.eldari/homebrew.eldari/xyloid_walker",
  },
];

const unitModifiers = [];

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});

console.log("loaded eldari");
