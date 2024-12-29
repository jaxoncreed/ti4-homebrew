const { world, refPackageId } = require("@tabletop-playground/api");

const nsidToTemplateId = {
  "sheet.faction:homebrew.stratlian-club/stratlian-club": "429F8D1642D1E4F5E13BA9BD2513C99E",
  "token.command:homebrew.stratlian-club/stratlian-club": "1575F8B04C8C1AF2D1986AACF6D57A58",
  "token.control:homebrew.stratlian-club/stratlian-club": "41291D9B4A0E35A1D6058B9C2AA642FE",
  "tile.system:homebrew.stratlian-club/200": "D0AD781C44D9DCDAF78D0E90AA0003D4",
  "card.leader:homebrew.stratlian-club/0": "9414996145CC4DC5E3153195C8B751B2",
  "card.planet:homebrew.stratlian-club/0": "79984FC3461A7694DCDE54B088137057",
  "card.promissory:homebrew.stratlian-club/0": "046AEF084560279E5859E3A65EAAC4D7",
  "card.technology:homebrew.stratlian-club/0": "0785190B4A1411C8CB16A89ED7BA574C"
}

const localeStrings = {
  "faction.abbr.stratlian-club": "Stratlian",
  "faction.full.stratlian-club": "The Stratlian Club",
  "planet.mathoms_retreat": "Mathom's Retreat",
  "technology.name.art_scouts": "Art Scouts",
  "technology.name.embezzlement": "Embezzlement",
  "unit.flagship.the_starliner": "The Starliner",
  "unit.mech.safari_master_deluxe": "Safari Master Deluxe",
};

const factions = [
  {
    faction: "stratlian-club",
    abilities: [
      "corporate_connections",
      "networking_luncheon"
    ],
    commodities: 2,
    home: 200,
    icon: "stratlian-club/sc-faction-icon.png",
    leaders: {
      agents: ["mr_smarm"],
      commanders: ["xxonac_qadog"],
      heroes: ["yela"],
    },
    packageId: refPackageId,
    promissoryNotes: ["hired_help"],
    source: "homebrew.stratlian-club",
    startingTech: ["psychoarchaeology"],
    startingUnits: {
      carrier: 1,
      cruiser: 1,
      destroyer: 1,
      fighter: 1,
      mech: 1,
      infantry: 1,
      space_dock: 1,
      pds: 1
    },
    techs: ["art_scouts", "embezzlement"],
    units: ["the_starliner", "safari_master_deluxe"],
    unpackExtra: [
      {
        tokenNsid: "token:homebrew.stratlian-club/stratlian-club",
      },
    ],
  },
];

const systems = [
  {
    tile: 200,
    source: "homebrew.stratlian-club",
    home: true,
    packageId: refPackageId,
    img: "stratlian-club/sc-home-system-tile.jpg",
    planets: [{ localeName: "planet.mathoms_retreat", resources: 0, influence: 6 }],
  },
];

const technologies = [
  {
    localeName: "technology.name.art_scouts",
    cardNsid:
      "card.technology.yellow.stratlian-club:homebrew.stratlian-club/art_scouts",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "homebrew.stratlian-club",
    faction: "stratlian-club",
  },
  {
    localeName: "technology.name.embezzlement",
    cardNsid:
      "card.technology.green.stratlian-club:homebrew.stratlian-club/embezzlement",
    type: "Green",
    requirements: { Green: 3 },
    source: "homebrew.stratlian-club",
    faction: "stratlian-club",
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.the_starliner",
    move: 1,
    capacity: 4,
    spaceCombat: { dice: 2, hit: 7 }
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.safari_master_deluxe",
    triggerNsid:
      "card.leader.mech.stratlian-club/homebrew.stratlian-club/safari_master_deluxe",
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

console.log("loaded stratlian-club");
