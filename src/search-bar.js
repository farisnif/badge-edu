import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class SearchBar extends LitElement {
  static get properties() {
    return {
      value: { type: String },
    }
  }

  static get styles() {
    return css`
    
    `;
  }

  constructor() {
    super();
    this.value = '';
  }

  render() {
    return html`
      <simple-icon icon="icons:search"></simple-icon>
      <input type="text" value="${this.value}" @input="${this._handleInput}" />
    `;
  }
  _handleInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('value-changed', {
      detail: {
        value: this.value,
      }
    }));
  }
}

customElements.define('search-bar', SearchBar);