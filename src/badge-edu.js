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
    },
    pfpImg: {
      type: String,
      reflect: true
    }
  };

  static get styles() {
    return css`
    
    .accordion-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .accord-header {
      position: relative;
      display: flex;
      align-items: center;
      background: var(--badge-edu-wrapper-background-color, #cfe6f4);
      padding-left: var(--badge-edu-header-padding-left, 2px);
      border-radius: var(--badge-edu-wrapper-border-radius, 6px);
      color: var(--badge-edu-header-text-color, black);
      height: var(--badge-edu-header-height, 50px);
      border-left: var(--badge-edu-header-left-border, 15px solid #3e98d3);
      border-right: var(--badge-edu-header-right-border, 1px solid #2077c4ca);
      border-top: var(--badge-edu-header-top-border, 1px solid #2077c4ca);
      cursor: pointer;
    }

    .accord-content {
      transition: var(--badge-edu-open-close-speed, all 0.35s ease-out);
      transform: scaleY(1);
      transform-origin: top;
    }

    .accord-body {
      padding: 22px;
      border-left: var(--badge-edu-padding-left-color, 15px solid #3e98d3);
      color: var(--badge-edu-inside-contents-text-color, #333333);
      font-family: var(--badge-edu-font-style, "effra", sans-serif);
      font-size: var(--badge-edu-inside-contents-font-size, 14px);
      direction: ltr;
      border-bottom: 1px solid #2077c4ca;
      border-right: 1px solid #2077c4ca;
    }

    .accord-item {
      margin: 0 auto;
      padding: 5px;
      width: var(--badge-edu-width-header-and-contents, 95%);
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
      height: var(--badge-edu-badge-header-pic-height, 40px);
      /* float: left; */
      margin-right: 10px;
      padding-left: 10px;
      max-width: var(--badge-edu-badge-header-pic-height, 40px);
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
      transition: var(--badge-edu-speed-dropdown-rotation, transform 0.2s ease-in-out);
    }

    .link{
      margin-top: 20px;
    }

    .dottedlines{
      margin-top: 60px;
    }

    .pfp {
      border-radius: var(--badge-edu-profile-pic-radius, 50%);
      margin: 0 100px;
      max-height: var(--badge-edu-profile-pic-height, 30px);
      max-width: var(--badge-edu-profile-pic-width, 30px);
      margin-top: -25px;
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
      font-size: var(--badge-edu-step-one-font-size, 12px);
      padding: 20px;
      background-color: var(--badge-edu-step-one-background-color, #dad7d7c9);
      border-top: 1px solid #aeaeae;
      border-bottom: var(--badge-edu-step-one-bottom-border-color, 1px solid #aeaeae);
      display: flex;
      align-items: center;
    } 

    .secondStep{
      font-size: var(--badge-edu-step-two-font-size, 12px);
      padding: 20px;
      background-color: var(--badge-edu-step-two-background-color, #dad7d7c9);
      border-top: 1px solid #aeaeae;
      border-bottom: var(--badge-edu-step-two-bottom-border-color, 1px solid #aeaeae);
      display: flex;
      align-items: center;
    }

    /* this below needs to be made so that it is not hard coded, if it is possible */

    .hoursCompletionStepTwo{
      margin-left: var(--badge-edu-step-two-hours-completion-location-from-left, 80%);      
    }
    .hoursCompletionStepOne{
      margin-left: var(--badge-edu-step-one-hours-completion-location-from-left, 80%);
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
    this.pfpImg = 'https://pbs.twimg.com/profile_images/1605284457602338822/xISpy4TU_400x400.jpg';
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
                src="${this.pfpImg}"/>
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