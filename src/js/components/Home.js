// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';

import Responsive from 'grommet/utils/Responsive';
import classnames from 'classnames';

import Article from './Article';
import Box from 'grommet/components/Box';
import Next from 'grommet/components/icons/base/Next';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';

import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Nav from './Nav';

// Global timer to monitor scrolling.
let SCROLL_TIMER;

class Home extends Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this._onProgress = this._onProgress.bind(this);
    this._startScrollingTimer = this._startScrollingTimer.bind(this);

    this.state = {
      layout: 'large',
      progress: 0,
      color: 'light',
      layerActive: false,
      scrolling: false
    };
  }

  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    this._responsive.stop();
    window.removeEventListener('resize', this._updateProgress);
  }

  _onResponsive (small) {
    this.setState({
      layout: (small) ? 'small' : 'large'
    });
  }

  _onLayerClose() {
    this.setState({layerActive: false});
  }

  _startScrollingTimer() {
    clearTimeout(SCROLL_TIMER);

    SCROLL_TIMER = setTimeout(() => {
      this.setState({scrolling: false});
    }, 150);
  }

  _onProgress(progress) {
    this.setState({
      progress: progress,
      scrolling: true
    });
    // Uncomment below for debug purposes.
    //console.log('progress:', progress);
    this._startScrollingTimer();
  }

  render () {
    let homeClasses = classnames([
      'home'
    ]);

    let startCtaClasses = classnames([
      'start-cta', {
        ['start-cta--active']: this.state.progress < 2
      }
    ]);

    let startCta = (this.state.layout !== 'small')
      ? <Box className={startCtaClasses} direction="row" responsive={false}>
        Scroll right to start journey <Next />
      </Box>
      : null;

    return (
      <Article ref="home" className={homeClasses} onProgress={this._onProgress}
        wrap={false} responsive={false} direction="row" scrollStep={false}>
        {startCta}
        <Nav progress={this.state.progress} />
        <Section1 ref="section1" layout={this.state.layout} progress={this.state.progress} scrolling={this.state.scrolling}/>
        <Section2 layout={this.state.layout} progress={this.state.progress} />

        <Section className="end-frame-illustration" colorIndex="neutral-1" pad="none" responsive={false} justify="end" align="end">
          <img src="../img/end.svg" />
        </Section>

        <Section className="end-frame" colorIndex="neutral-1" pad="none" justify="center" align="start" >
          <Heading tag="h1">
          For more information about how HPE is 
          accelerating the digital transformation of the 
          Financial Services industry, visit us here
          </Heading>
          <Button className="end-frame__button" href="http://www.hpe.com/solutions/enable" label="Learn More" primary={true} />
        </Section>

      </Article>
    );
  }

};

export default Home;
