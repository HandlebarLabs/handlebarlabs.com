// TODO: Add redirect from /email-list/

import React from 'react';
import Script from 'react-load-script';

export default class extends React.Component {
  render() {
    return (
      <div className="email-list-background">
        <div className="email-list-content">
          <div id="_ck_133004" />
          <Script url="https://forms.convertkit.com/133004?v=6" />
        </div>
      </div>
    );
  }
}
