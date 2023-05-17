import { getMockPets } from './models/mocks.pets';
import { Pet } from './pet';
import { Component } from './components';

export class PetsList extends Component {
  pets: Pet[];
  constructor(public selector: string) {
    super(selector);
    this.pets = getMockPets();
    this.render();
  }

  render() {
    super.cleanHtml(this.selector);
    this.template = this.createTemplate();
    const element = super.render();
    document
      .querySelectorAll('.button')
      .forEach((item) =>
        item.addEventListener('click', this.handleDelete.bind(this))
      );
    return element;
  }

  createTemplate() {
    const list = this.pets
      .map(
        (item) => `<span>ID: ${item.id}</span>
            <span>Nombre:: ${item.name}</span>
            <span>Raza: ${item.breed}</span>
            <span>Dueño: ${item.owner}</span>`
      )
      .join('');
  }
}
