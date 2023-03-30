import {LitElement, html, css} from 'lit';

export class BadgeEdu extends LitElement {
  static properties = {
    version: {},
  };

  static get styles() {
    return css`
          /* * {
      padding: 2px;
      margin: 0 auto;
      box-sizing: border-box;
      border-radius: 4px;
    } */
    .accordion-container {
      display: flex;
      justify-content: flex-end;
    }

    .accord-header {
      position: relative;
      display: flex;
      align-items: center;
      background: #cfe6f4;
      padding-left: 2px;
      border-radius: 6px;
      color: black;
      height: 50px;
      border-left: 15px solid #3e98d3;
      border-right: 1px solid #2077c4ca;
      border-top: 1px solid #2077c4ca;
      cursor: pointer;
    }

    .accord-content {
      /* height: 120px; */
      /* overflow: hidden; */
      transition: all 0.20s ease-out;
      transform: scaleY(1);
      transform-origin: top;
    }

    .accord-body {
      padding: 22px;
      border-left: 15px solid #3e98d3;
      border-radius: 6px;
      color: #333333;
      font-family: "effra", sans-serif;
      font-size: 14px;
      direction: ltr;
      border-bottom: 1px solid #2077c4ca;
      border-right: 1px solid #2077c4ca;
    }

    .accord-item {
      margin: 0 auto;
      padding: 5px;
      width: 95%;
    }

    .accord-item:last-of-type {
      border: none;
    }

    .collapse {
      height: 0px;
      transform: scaleY(0);
    }

    .image {
      height: 40px;
      /* float: left; */
      margin-right: 10px;
      padding-left: 10px;
    }
    
    .accord-title {
      /* float: left; */
      display: inline-block;
      border-radius: 6px;
    }
    .dropDown {
      position: absolute;
      height: 20px;
      margin-right: 10px;
      padding-left: 100px;
      right: 5px;
    }

    .rotate {
      transform: scaleY(-1);
      transition: transform 0.2s ease-in-out;
    }

    .badgeCountHeader{
       font-size: 20px;
    }

    .link{
      margin-top: 20px;
    }
      `;
  }

  constructor() {
    super();
    this.version = 'STARTING';
    this.badgeName = 'Amazon Cognito';
    this.badgeIcon = new URL(
      "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg"
    ).href;
    this.badgeDescription = 'Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools';
  }

  firstUpdated() {
    const accordHeaders = this.shadowRoot.querySelectorAll(".accord-header");
    accordHeaders.forEach((ach) => {
      ach.addEventListener("click", () => {
        const currentContentEle = ach.nextElementSibling;
        const isCollapsed = currentContentEle.classList.contains("collapse");
  
        accordHeaders.forEach((header) => {
          header.querySelector('.dropDown').classList.remove('rotate');
          header.nextElementSibling.classList.add('collapse');
        });
  
        if (isCollapsed) {
          currentContentEle.classList.remove("collapse");
          ach.querySelector('.dropDown').classList.add('rotate');
        }
      }, false);
    });
  }
  
  

  render() {
    return html`
          <div class="accordion-container">
      <div class="accord-item">
        <div class="accord-header">
          <img class="image" src = "${this.badgeIcon}"/>
          <div class="accord-title">${this.badgeName}</div>
          <img class="dropDown" src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVR4nO3UQQqAIBBA0b8bvVci6Qm6/0WCmCBchOXoaj4IIujDhYLned7iArABWedLEmAHDh0ViLPRABQFSzMPK25aFWrX4gr0bhouL+g0XDpQc1w+oGa4/ECHcRlAh/Bs9Dafbz73bEiGX2HQs5LBWZ7neVydFqwUt0OcXE8AAAAASUVORK5CYII="/>
        </div>
        <div class="accord-content collapse">
          <div class="accord-body">${this.badgeDescription}
          
          <div class="link"> <a href="link"> https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html </a> </div>
          <div class="link"> <a href="link"> https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html </a> </div>
        </div>
          
        </div>
      </div>
  </div>
    `;
  }
}
customElements.define('badge-edu', BadgeEdu);