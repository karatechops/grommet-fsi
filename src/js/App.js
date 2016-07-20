// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React from 'react';
import GrommetApp from 'grommet/components/App';

class App extends React.Component {
  _isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  render() {
    // This is used to reduce height for mobile navigation bars.
    let styles = (this._isMobileDevice()) ? 'app-mobile' : null;

    return (
      <GrommetApp className={styles} centered={false} inline={true}>
        {this.props.children}
      </GrommetApp>
    );
  }
}

export default App;
