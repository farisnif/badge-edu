import { LitElement, html, css } from 'lit';

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
      align-items: center;
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
      /* border-radius: 6px; */
      /* border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px; */
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
      /* border-radius: 6px; */
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
      /* border-radius: 6px; */
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
    .dottedlines{
      margin-top: 60px;

    }
    .pfp {
  border-radius: 50%;
  margin: 0 100px;
  margin-top: -25px
}

.creator {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.creatorName {
  margin-left: 142px;
  margin-top: -32px;
}

.approxTime{
  margin-top: 17px;
}
.stepsBadge{
  font-size: 24px;
  margin-top: 28px;
  color: #626161;
}

.firstStep{
  margin-top: 8px;
  font-size: 12px;
  padding: 20px;
  background-color: #dad7d7c9;
  border-top: 1px solid #aeaeae;
  border-bottom: 1px solid #aeaeae;
} 

.secondStep{
  font-size: 12px;
  padding: 20px;
  background-color: #dad7d7c9;
  border-top: 1px solid #aeaeae;
  border-bottom: 1px solid #aeaeae;
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
    const ach = this.shadowRoot.querySelector(".accord-header");
    ach.addEventListener("click", () => {
      const accordianContent = ach.nextElementSibling;
      const accorianImg = ach.querySelector('.dropDown');

      accordianContent.classList.toggle("collapse");
      accorianImg.classList.toggle('rotate');

      if (accordianContent.classList.contains('collapse')) {
        ach.style.borderRadius = "6px";
      }
      else {
        ach.style.borderRadius = "6px 6px 0px 0px";
        accordianContent.querySelector('.accord-body').style.borderRadius = "0px 0px 6px 6px";
      }

    }, false);
  }



  render() {
    return html`
      <div class="accordion-container">
        <div class="accord-item">
          <div class="accord-header">
            <img class="image" src="${this.badgeIcon}" />
            <div class="accord-title">${this.badgeName}</div>
            <img class="dropDown"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVR4nO3UQQqAIBBA0b8bvVci6Qm6/0WCmCBchOXoaj4IIujDhYLned7iArABWedLEmAHDh0ViLPRABQFSzMPK25aFWrX4gr0bhouL+g0XDpQc1w+oGa4/ECHcRlAh/Bs9Dafbz73bEiGX2HQs5LBWZ7neVydFqwUt0OcXE8AAAAASUVORK5CYII=" />
          </div>
          <div class="accord-content collapse">
            <div class="accord-body">${this.badgeDescription}
      
              <div class="link"> <a href="link"> https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html </a>
              </div>
              <div class="dottedlines">---------------------------------------------------------</div>
              <div class="creator"> Badge Creator:</div>
              <img class="pfp"
                src="https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png" />
              <div class="creatorName"> Joshua Hantman</div>
              <div class="approxTime"> Approximate time to complete: 4.0 hours</div>
              <div class="stepsBadge"> Steps to Earn This Badge</div>
      
              <div class="firstStep">Creating your first Lamda Function</div>
              <div class="secondStep">Putting in your Hello Lamda Node.js code</div>
      
      
      
      
            </div>
          </div>
      
        </div>
      </div>
      </div>
    `;
  }
}
customElements.define('badge-edu', BadgeEdu);