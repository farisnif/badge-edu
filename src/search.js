import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static properties = {
    topic: { type: String },
    inputs: { type: String },
    filteredInputs: { reflect: true, type: Array }
  }

  static styles = css`
  
  `;

  constructor() {
    super();
    this.topic = 'Search Content, Topics, and People';
    this.inputs = "";
    this.filteredInputs = [];
    this.searchPlaceHolder = "Search Content, Topics, and People";
  }

  searchInput(e) {
    console.log(e.target);
    this.inputs = e.target.value;
    this.shadowRoot.querySelector('.input').innerText = this.inputs; //Just so I don't need to open console all the time
    console.log(".search");
    this.searchFilter()
  }





  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "inputs") {
        this.dispatchEvent(new CustomEvent('input-changed', {
          composed: true,
          bubbles: true,
          cancelable: false,
          detail: {
            value: this[propName]
          }
        }));
        console.log(`${propName} changed. oldValue: ${oldValue}`);
      }
    });
  }

  render() {
    return html`
    <div class="pageTitle">${this.pageTitle}</div>
      <div class="welcomeStage">${this.welcomeText}
      <form style="display: flex; justify-content: center; margin-top: 20px;">
        <input type="text" placeholder=${this.searchPlaceHolder} id="search-input" style="padding: 10px; width: 90%; border-radius: 4px; border: none; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
        <button id="submit-button" type="submit" style="padding: 10px 20px; margin-left: 10px; background-color: #007bff; color: #fff; border-radius: 4px; border: none; cursor: pointer;">Search</button>
  </form>
    </div>
    
       
    `;
  }
}

customElements.define('search-bar', SearchBar);