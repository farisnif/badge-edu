import {LitElement, html, css} from 'lit';

export class BadgeEdu extends LitElement {
  static properties = {
    version: {},
  };

  static get styles() {
    return css`
          * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .accordion-container {
      background: #c00a0a;
      width: 400px;
      border: 1px solid #ccc;
      margin-top: 80px;
      padding: 20px;
    }
    .accord-header {
      background: black;
      color: #fff;
      padding: 1rem 1.25rem;
      cursor: pointer;
    }
    .accord-content {
      height: 120px;
      overflow: hidden;
      transition: all 0.35s ease-out;
      transform: scaleY(1);
      transform-origin: top;
    }
    .accord-body {
      padding: 1rem 1.25rem;
    }
    .accord-item {
      border-bottom: 1px solid #ccc;
    }
    .accord-item:last-of-type {
      border: none;
    }
    .collapse {
      height: 0px;
      transform: scaleY(0);
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
     <h1>Badge (5)</h1>
      <div class="accord-item">
        <div class="accord-header">
          <div class="acccord-title">Accordion Item #1</div>
        </div>
        <div class="accord-content collapse">
          <div class="accord-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            dolor neque! Accusamus mollitia, cumque harum iste nesciunt unde
            natus incidunt eius non explicabo sed vel voluptas facilis ad minus
            consequuntur!
          </div>
        </div>
      </div>
      <div class="accord-item">
        <div class="accord-header">
          <div class="acccord-title">Accordion Item #2</div>
        </div>
        <div class="accord-content collapse">
          <div class="accord-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            dolor neque! Accusamus mollitia, cumque harum iste nesciunt unde
            natus incidunt eius non explicabo sed vel voluptas facilis ad minus
            consequuntur!
          </div>
        </div>
      </div>
      <div class="accord-item">
        <div class="accord-header">
          <div class="acccord-title">Accordion Item #3</div>
        </div>
        <div class="accord-content collapse">
          <div class="accord-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            dolor neque! Accusamus mollitia, cumque harum iste nesciunt unde
            natus incidunt eius non explicabo sed vel voluptas facilis ad minus
            consequuntur!
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('badge-edu', BadgeEdu);