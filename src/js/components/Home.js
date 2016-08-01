// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Responsive from 'grommet/utils/Responsive';
import classnames from 'classnames';

import Box from 'grommet/components/Box';
import Next from 'grommet/components/icons/base/Next';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';

import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Background from './Background';
import Nav from './Nav';

//import '../../scss/index.scss';

// Global timer to monitor scrolling.
let SCROLL_TIMER;

class Home extends Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this._updateProgress = this._updateProgress.bind(this);
    this._startScrollingTimer = this._startScrollingTimer.bind(this);

    this.state = {
      layout: 'large',
      progress: 0,
      color: 'light',
      layerActive: false,
      isScrolling: false
    };
  }

  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive);
    window.addEventListener('scroll', this._updateProgress);
    window.addEventListener('resize', this._updateProgress);
    ReactDOM.findDOMNode(this.refs.home).addEventListener('scroll', this._updateProgress);
    ReactDOM.findDOMNode(this.refs.home).addEventListener('resize', this._updateProgress);
    this._updateProgress();
  }

  componentWillUnmount() {
    this._responsive.stop();
    window.removeEventListener('scroll', this._updateProgress);
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

  _updateProgress() {
    let xOffset = -1 * (ReactDOM.findDOMNode(this.refs.section1).getBoundingClientRect().left);
    // Main illustration is 900 (mobile) 400 (desktop) vw.
    // Dark illustration is 410 (mobile) 210 (desktop) vw.
    // End frame illustration is 100 (mobile) 50 (desktop) vw.
    // End frame is 100 (mobile) 50 (desktop) vw.
    let siteWidth = (this.state.layout === 'small')
      ? window.innerWidth * 15.1
      : window.innerWidth * 7.1;
    let scrollPercent = xOffset / (siteWidth - window.innerWidth);
    let scrollPercentRounded = Number(Math.max( Math.round(scrollPercent * 1000) / 10, 0 ).toFixed(2));
    if (scrollPercentRounded !== this.state.progress) 
      this.setState({
        progress: scrollPercentRounded,
        scrolling: true
      });
    // Uncomment below for debug purposes.
    //console.log('progress:', scrollPercentRounded);
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
      <Box ref="home" className={homeClasses} style={{position:'relative', overflow:'auto', overflowY:'hidden', maxHeight:'100vh' }} wrap={false} responsive={false} direction="row">
        <Nav progress={this.state.progress} layout={this.state.layout}/>
        {startCta}
        <Section1 ref="section1" layout={this.state.layout} progress={this.state.progress} scrolling={this.state.scrolling}/>
        <Section2 layout={this.state.layout} progress={this.state.progress} />

        <Section className="end-frame-illustration" colorIndex="neutral-1" pad="none" responsive={false}>
          <Background />
        </Section>

        <Section className="end-frame" colorIndex="neutral-1" pad="none" justify="center" align="start" >
          <Heading tag="h1">
          For more information about how HPE is 
          accelerating the digital transformation of the 
          Financial Services industry, visit us here
          </Heading>
          <Button className="end-frame__button" href="http://www.hpe.com/solutions/enable" label="www.hpe.com" primary={true} />
        </Section>

      </Box>
    );
  }

};

export default Home;
