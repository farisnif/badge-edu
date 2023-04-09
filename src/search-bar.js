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
    :host {
        display: block;
        padding: 10px;
        background-color: #f1f1f1;
        border-radius: 20px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
      }
      simple-icon {
        display: inline-block;
        --simple-icon-height: 30px;
        --simple-icon-width: 30px;
        margin-right: 10px;
        color: #999;
      }
      input[type="text"] {
        font-size: 16px;
        padding: 10px;
        border: none;
        width: 70%;
        background-color: transparent;
      }
      input[type="text"]::placeholder {
        color: #999;
      }
    `;
  }

  constructor() {
    super();
    this.value = '';
    this.default = 'Search Content, Topics, and People';
  }

  render() {
    return html`
      <simple-icon icon="icons:search"></simple-icon>
      <input type="text" value="${this.value}" @input="${this._handleInput}" placeholder="${this.default}"/>
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