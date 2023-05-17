import { Component } from './components';

export class Header extends Component {
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header>
<h1>MY PETS :)
</h1>
</header>`;
  }
}
