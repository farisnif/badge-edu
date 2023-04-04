import { LitElement, html, css } from 'lit';
import "./badge-edu.js";
import "./search.js"

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
        // this.welcomeText = 'Here you will learn how to set up an account for AWS, how to create a root user, a I AM user account, setup MFA on your Root and I AM accounts, set up a user pool in Amazon Cognito, how to upload and use Amazon S3, and how to use Amazon Lambda';
        // this.pageTitle = 'Explore';
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
        `;
    }

    render() {
        return html`
            <search-bar></search-bar>
            <h2>${this.wiki}</h2>
            ${this.badges.map(badge => html`
            <div class="item">
                <badge-edu badgeName="${badge.badgeName}" badgeIcon="${badge.badgeIcon}" badgeDescription="${badge.badgeDescription}" link="${badge.link}" creatorName="${badge.creatorName}" badgeCompletionTime="${badge.badgeCompletionTime}" stepOne="${badge.stepOne}" stepTwo="${badge.stepTwo}" hoursCompletionStepOne="${badge.hoursCompletionStepOne}" hoursCompletionStepTwo="${badge.hoursCompletionStepTwo}" hyperLinkText="${badge.hyperLinkText}"></badge-edu>
            </div>
            `)}
        
        `;
    }
}
customElements.define(BadgeRoster.tag, BadgeRoster);