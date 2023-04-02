import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class BadgeEdu extends LitElement {
  static properties = {
    version: {
      type: String,
      reflect: true
    },
    badgeName: {
      type: String,
      reflect: true
    },
    badgeIcon: {
      type: String,
      reflect: true
    },
    badgeDescription: {
      type: String,
      reflect: true
    },
    link: {
      type: String,
      reflect: true
    },
    creatorName: {
      type: String,
      reflect: true
    },
    badgeCompletionTime: {
      type: String,
      reflect: true
    },
    stepOne: {
      type: String,
      reflect: true
    },
    stepTwo: {
      type: String,
      reflect: true
    },
    hoursCompletionStepOne: {
      type: String,
      reflect: true
    },
    hoursCompletionStepTwo: {
      type: String,
      reflect: true
    },
    hyperLinkText: {
      type: String,
      reflect: true
    }
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
  display: flex;
  align-items: center;
} 

.secondStep{
  font-size: 12px;
  padding: 20px;
  background-color: #dad7d7c9;
  border-top: 1px solid #aeaeae;
  border-bottom: 1px solid #aeaeae;
  display: flex;
  align-items: center;
}

/* this below needs to be made so that it is not hard coded, if it is possible */

.hoursCompletionStepTwo{
  position: aboslute;
  padding-left: 70%;
}
.hoursCompletionStepOne{
  position: aboslute;
  padding-left: 73%;
}



      `;
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

  constructor() {
    super();
    this.version = 'STARTING';
    this.badgeName = 'Amazon Cognito';
    this.badgeIcon = new URL(
      "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg"
    ).href;
    this.badgeDescription = 'Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools';
    this.link = 'https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html';
    this.creatorName = 'Joshua Hantman';
    this.badgeCompletionTime = '4.0 hours';
    this.stepOne = 'Creating your first Lamda Function';
    this.stepTwo = 'Putting in your Hello Lamda Node.js code';
    this.hoursCompletionStepOne = '2.0 hours';
    this.hoursCompletionStepTwo = '2.0 hours';
    this.hyperLinkText = 'Amazon Cognito Info Link';
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
      
              <div class="link"> <a href="link"> ${this.hyperLinkText} </a>
              </div>
              <div class="dottedlines">---------------------------------------------------------</div>
              <div class="creator"> Badge Creator:</div>
              <img class="pfp"
                src="https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png" />
              <div class="creatorName">${this.creatorName}</div>
              <div class="approxTime">Approximate time to complete: ${this.badgeCompletionTime}</div>
              <div class="stepsBadge">Steps to Earn This Badge</div>
              
              <div class="firstStep">
              <simple-icon-lite icon="av:play-circle-filled">
</simple-icon-lite> ${this.stepOne}
<div class="hoursCompletionStepOne">${this.hoursCompletionStepOne}</div>
</div>
              <div class="secondStep">
                <simple-icon-lite icon="av:play-circle-filled">
</simple-icon-lite> ${this.stepTwo}
<div class="hoursCompletionStepTwo">${this.hoursCompletionStepOne}</div>
            </div>
          </div>
      
        </div>
      </div>
      </div>
    `;
  }
}
customElements.define('badge-edu', BadgeEdu);