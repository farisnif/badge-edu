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
            loadingImg:
                { type: String },
            loading:
                { type: Boolean }
        }
    }
    constructor() {
        super();
        this.badges = [];
        this.wiki = 'Badges (5)';
        this.getSearchResults().then((results) => {
            this.badges = results;
        });
        this.loading = false;
        this.loadingImg = "https://cdn.discordapp.com/attachments/434857360155213827/1094505354391461948/745856610882289665.png";
    }


    static get styles() {
        return css`
                @keyframes loading-spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
            .loading-container {
      display: inline;
    }

    .loading-sign {
      width: 175px;
      padding-top: 60px;
      padding-bottom: 60px;
      animation: loading-spin infinite 5s linear;
    }
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
        this.badges = await this.getSearchResults(term);
    }


    render() {
        if (this.loading) {
            return html`
            <div class="loading-container">
              <img src="${this.loadingImg}" class="loading-sign">
            </div>
          `;
        }
    }

    render() {
        return html`
            <h2>${this.wiki}</h2>
            <search-bar placeholder="Search Content, Topics, and People" @value-changed="${this._handleSearchEvent}"></search-bar>
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