// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';

import Responsive from 'grommet/utils/Responsive';
import classnames from 'classnames';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import Layer from 'grommet/components/Layer';
import Share from 'grommet/components/icons/base/Share';
import SocialShare from 'grommet/components/SocialShare';

import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Background from './Background';
import Nav from './Nav';

class Home extends Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this._updateProgress = this._updateProgress.bind(this);
    this._onShareClick = this._onShareClick.bind(this);
    this._onLayerClose = this._onLayerClose.bind(this);

    this.state = {
      layout: 'large',
      progress: 0,
      color: 'light',
      layerActive: false
    };
  }

  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive);
    window.addEventListener('scroll', this._updateProgress);
    window.addEventListener('resize', this._updateProgress);
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

  _onShareClick() {
    console.log('share click')
    this.setState({layerActive: true});
  }

  _onLayerClose() {
    this.setState({layerActive: false});
  }

  _updateProgress() {
    let xOffset = window.pageXOffset;
    // Main illustration is 900 (mobile) 400 (desktop) vw.
    // Dark illustration is 410 (mobile) 210 (desktop) vw.
    // End frame illustration is 100 (mobile) 50 (desktop) vw.
    // End frame is 100 vw.
    let siteWidth = (this.state.layout === 'small')
      ? window.innerWidth * 15.1
      : window.innerWidth * 7.6;
    let scrollPercent = xOffset / (siteWidth - window.innerWidth);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    if (scrollPercentRounded !== this.state.progress) this.setState({progress:scrollPercentRounded});
    // For temp debug purposes.
    console.log('progress:', scrollPercentRounded);
  }

  render () {
    let shareIcon = <Share className={`end-frame__icon`} colorIndex={"dark-2"} />;

    let navActive = (this.state.progress < 3)
      ? true
      : false;

    let homeClasses = classnames([
      'home'
    ]);

    let layer = (this.state.layerActive) ? (
      <div className="share-layer">
        <Layer onClose={this._onLayerClose} closer={true} flush={true} align={"center"}>
          <div className="share">
            <Headline size={"large"} strong={true}>
              Thanks for sharing, we're glad you enjoyed it.
            </Headline>
            <div className="share__icons">
              <SocialShare type="email"
              link="#"
              title="Grommet Infographic"
              text="HPE...." />
              <SocialShare type="twitter"
              link="#"
              text="@HPE..." />
              <SocialShare type="facebook"
              link="#" />
              <SocialShare type="linkedin"
              link="#"
              title="Grommet Infographic"
              text="HPE..." />
            </div>
          </div>
        </Layer>
      </div>
    ) : (null);

    return (
      <Article className={homeClasses} scrollStep={false} controls={false} wrap={false} responsive={false} direction="row">
        <Nav active={navActive} />
        <Section1 layout={this.state.layout} progress={this.state.progress} />
        <Section2 layout={this.state.layout} progress={this.state.progress} />

        <Section className="end-frame-illustration" colorIndex="neutral-2" pad="none" responsive={false}>
          <Background />
        </Section>

        <Section className="end-frame" colorIndex="neutral-2" pad="none" justify="center" align="start" >
          {layer}
          <Heading tag="h1">
          For more information about how HPE is 
          accelerating the digital transformation of the 
          Financial Services industry, visit us here
          </Heading>
          <Button className="end-frame__button" href="http://www.hpe.com/solutions/enable" label="www.hpe.com" primary={true} />
          <Anchor label={'Share'} icon={shareIcon} reverse={true} onClick={this._onShareClick} />
        </Section>

      </Article>
    );
  }

};

export default Home;
