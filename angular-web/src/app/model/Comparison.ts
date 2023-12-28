export default class Comparison {
  skinImage: String
  skinName: String

  sameWeapon: {
    "equals": boolean,
    "value": string
  }
  yearsDiff: {
    "equals": number,
    "value": number
  }
  sameContainer: {
    "equals": boolean,
    "value": string
  }
  sameRarity: {
    "equals": boolean,
    "value": string
  }
  sameModifier: {
    "equals": boolean,
    "value": string
  }
  skinCollection: {
    "equals": boolean,
    "value": boolean
  }

  constructor(skinImage: String,
              skinName: String,
              sameWeapon: {
                "equals": boolean,
                "value": string
              },
              yearsDiff: {
                "equals": number,
                "value": number
              },
              sameContainer: {
                "equals": boolean,
                "value": string
              },
              sameRarity: {
                "equals": boolean,
                "value": string
              },
              sameModifier: {
                "equals": boolean,
                "value": string
              },
              skinCollection: {
                "equals": boolean,
                "value": boolean
              }) {
    this.skinImage = skinImage
    this.skinName = skinName
    this.sameWeapon = sameWeapon
    this.yearsDiff = yearsDiff
    this.sameContainer = sameContainer
    this.sameRarity = sameRarity
    this.sameModifier = sameModifier
    this.skinCollection = skinCollection
  }
}
