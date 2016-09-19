// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React from 'react';
import GrommetApp from 'grommet/components/App';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
    	<GrommetApp centered={false} inline={true}>
        <Home onProgress={this._onProgress} />
      </GrommetApp>
    );
  }
}

export default App;
