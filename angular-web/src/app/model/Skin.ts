export default class Skin {
  name: string
  weapon: string
  yearOfRelease: number
  container: string
  rarity: string
  modifier: string
  image: string

  constructor(image : string, weapon : string, name : string, yearOfRelease: number, container:string, rarity:string, modifier:string) {
    this.name = name
    this.weapon = weapon
    this.yearOfRelease = yearOfRelease
    this.container = container
    this.rarity = rarity
    this.modifier = modifier
    this.image = image
  }


}
