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

    .accord-header {
      display: flex;
      align-items: center;
      background: #a5cdf0;
      padding-left: 2px;
      border-radius: 6px;
      color: black;
      height: 60px;
      border-left: 10px solid blue;

      cursor: pointer;

    }
    .accord-content {
      /* height: 120px; */
      /* overflow: hidden; */
      transition: all 0.35s ease-out;
      transform: scaleY(1);
      transform-origin: top;
    }
    .accord-body {
      padding: 3rem 1.25rem;

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
      `;
  }

  constructor() {
    super();
    this.version = 'STARTING';
  }

  firstUpdated() {
    const accrodHeaders = this.shadowRoot.querySelectorAll(".accord-header");
    accrodHeaders.forEach((ach) => {
      ach.addEventListener("click", toggelItem, false);
    });

    function toggelItem() {
      const currentContentEle = this.nextElementSibling;

      const isCollapsed = currentContentEle.classList.contains("collapse");

      accrodHeaders.forEach((ach) => {
        const contentEle = ach.nextElementSibling;
        if (!contentEle.classList.contains("collapse")) {
          contentEle.classList.add("collapse");
        }
      });

      if (isCollapsed) {
        currentContentEle.classList.remove("collapse");
      }
    }
  }

  render() {
    return html`
      <div class="accord-item">
        <div class="accord-header">
          <img class="image" src = "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg"/>
          
          <div class="accord-title">Amazon Cognito</div>
        </div>
        <div class="accord-content collapse">
          <div class="accord-body">
          Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools
          </div>
        </div>
      </div>
        <!-- <div class="accord-content collapse">
          <div class="accord-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            dolor neque! Accusamus mollitia, cumque harum iste nesciunt unde
            natus incidunt eius non explicabo sed vel voluptas facilis ad minus
            consequuntur!
          </div>
        </div>
      </div>
      
        <div class="accord-content collapse">
          <div class="accord-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            dolor neque! Accusamus mollitia, cumque harum iste nesciunt unde
            natus incidunt eius non explicabo sed vel voluptas facilis ad minus
            consequuntur!
          </div>
        </div>
      </div> -->
    `;
  }
}
customElements.define('badge-edu', BadgeEdu);