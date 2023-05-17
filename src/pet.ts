export type PetInfo = {
  id: string;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner: string;
};

export class Pet implements PetInfo {
  static generateId() {
    return Math.trunc(Math.random() * 10_000).toString();
  }

  id: string;
  breed: string;
  isAdopted: boolean;
  constructor(public name: string, breed: string, public owner: string) {
    this.id = Pet.generateId();
    this.name = name;
    this.breed = breed;
    this.isAdopted = false;
    this.owner = owner;
  }
}
