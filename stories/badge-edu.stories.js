import { html } from 'lit';
import '../src/badge-edu.js';

export default {
  title: 'BadgeEdu',
  component: 'badge-edu',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <badge-edu
      style="--badge-edu-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </badge-edu>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
