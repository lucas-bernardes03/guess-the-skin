export default class Comparison {
  skinImage: String
  skinName: String

  sameWeapon: boolean
  yearsDiff: number
  sameContainer: boolean
  sameRarity: boolean
  sameModifier: boolean
  skinCollection: boolean

  constructor(skinImage: String,
              skinName: String,
              sameWeapon: boolean,
              yearsDiff: number,
              sameContainer: boolean,
              sameRarity: boolean,
              sameModifier: boolean,
              skinCollection: boolean) {
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
