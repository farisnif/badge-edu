import { LitElement, html, css } from 'lit';
import "./badge-edu.js";

export class BadgeRoster extends LitElement {
    static get tag() {
        return 'badge-roster';
    }
    static get properties() {
        return {
            badges: { type: Array },
            wiki: { type: String },
        }
    }
    constructor() {
        super();
        this.badges = [];
        this.wiki = 'Badges (5)';
        this.updateRoster();
        this.welcomeText = 'Here you will learn how to set up an account for AWS, how to create a root user, a I AM user account, setup MFA on your Root and I AM accounts, set up a user pool in Amazon Cognito, how to upload and use Amazon S3, and how to use Amazon Lambda';
        this.pageTitle = 'Explore';
        this.searchPlaceHolder = 'Search Content, Topics, and People';
    }

    updateRoster() {
        const address = '../api/roster';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
            .then((data) => {
                this.badges = data;
            });
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline;
        }
        .welcomeStage {
            background-color: white;
            padding: 20px;
            font-size: 20px;
            /* max-width: 90%; */
            margin: 0 auto;
            /* need to add font */
        }
        .pageTitle {
            padding: 20px;
            font-size: 32px;
            /* max-width: 100%; */
            margin: 0 auto;
        }
        `;
    }

    render() {
        return html`
        <div class="pageTitle">${this.pageTitle}</div>
      <div class="welcomeStage">${this.welcomeText}
      <fetch style="display: flex; justify-content: center; margin-top: 20px;">
        <input type="text" placeholder=${this.searchPlaceHolder} id="search-input" style="padding: 10px; width: 90%; border-radius: 4px; border: none; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
        <button type="submit" style="padding: 10px 20px; margin-left: 10px; background-color: #007bff; color: #fff; border-radius: 4px; border: none; cursor: pointer;">Search</button>
    </fetch>
    </div>
            <h2>${this.wiki}</h2>
            ${this.badges.map(badge => html`
            <div class="item">
                <badge-edu badgeName="${badge.badgeName}" badgeIcon="${badge.badgeIcon}" badgeDescription="${badge.badgeDescription}" link="${badge.link}" creatorName="${badge.creatorName}" badgeCompletionTime="${badge.badgeCompletionTime}" stepOne="${badge.stepOne}" stepTwo="${badge.stepTwo}" hoursCompletionStepOne="${badge.hoursCompletionStepOne}" hoursCompletionStepTwo="${badge.hoursCompletionStepTwo}" hyperLinkText="${badge.hyperLinkText}"></badge-edu>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(BadgeRoster.tag, BadgeRoster);