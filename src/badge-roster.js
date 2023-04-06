import { LitElement, html, css } from 'lit';
import "./badge-edu.js";
import "./search-bar.js"

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
        this.getSearchResults().then((results) => {
            this.badges = results;
        });
    }
   

    static get styles() {
        return css`
       
        `;
    }

    async getSearchResults(value = '') {
        const address = `/api/roster?search=${value}`;
        const results = await fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            return data;
        });

        return results;
    }

    async _handleSearchEvent(e) {
        const term = e.detail.value;
        this.players = await this.getSearchResults(term);
    }


    render() {
        return html`
            <h2>${this.wiki}</h2>
            <search-bar> @value-changed="${this._handleSearchEvent}"</search-bar>
            <div class="wrapper">
            ${this.badges.map(badge => html`
            <div class="item">
                <badge-edu badgeName="${badge.badgeName}" badgeIcon="${badge.badgeIcon}" badgeDescription="${badge.badgeDescription}" link="${badge.link}" creatorName="${badge.creatorName}" badgeCompletionTime="${badge.badgeCompletionTime}" stepOne="${badge.stepOne}" stepTwo="${badge.stepTwo}" hoursCompletionStepOne="${badge.hoursCompletionStepOne}" hoursCompletionStepTwo="${badge.hoursCompletionStepTwo}" hyperLinkText="${badge.hyperLinkText}" pfpImage="${badge.pfpImg}"></badge-edu>
            </div>
            `)}
            </div>
        
        `;
    }
}
customElements.define(BadgeRoster.tag, BadgeRoster);