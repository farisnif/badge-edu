import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static properties = {
    topic: { type: String },
    inputs: { type: String},
    filteredInputs: { reflect: true, type: Array}
  }

  static styles = css`
  
  `;

  constructor() {
    super();
    this.topic = 'Search Content, Topics, and People';
    this.inputs = "";
    this.filteredInputs = [];
  }

  searchInput(e) {
        console.log(e.target);
        this.inputs = e.target.value;
        this.shadowRoot.querySelector('.input').innerText = this.inputs; //Just so I don't need to open console all the time
        console.log(".search");
        this.searchFilter()
  }


  

   
updated(changedProperties){
  changedProperties.forEach((oldValue, propName)=>{
    if(propName === "inputs"){
      this.dispatchEvent(new CustomEvent('input-changed', {
        composed: true,
        bubbles: true,
        cancelable: false,
        detail:{
          value: this[propName]
        }
      }));
      console.log(`${propName} changed. oldValue: ${oldValue}`);
    }
  });
}
    
  render() {
    return html`
    <div>
      <input type="text" class="search" placeholder="${this.topic}" @input="${this.searchInput}">
    </div>
    <div>
       
    `;
  }
}

customElements.define('search-bar', SearchBar);