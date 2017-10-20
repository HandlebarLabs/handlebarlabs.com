// TODO: Add redirect from /email-list/

import React from 'react'
import Script from 'react-load-script'

export default class extends React.Component {
  render() {
    return (
      <div>
        <div id="_ck_133004"></div>
        {console.log('render', Date.now())}
        <Script url="https://forms.convertkit.com/133004?v=6" />
      </div>
    );
  }
}
