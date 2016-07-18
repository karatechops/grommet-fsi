// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';

import Responsive from 'grommet/utils/Responsive';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import Meter from 'grommet/components/Meter';
import Share from 'grommet/components/icons/base/Share';

import Background from './Background';
import Nav from './Nav';

class Home extends Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this._updateProgress = this._updateProgress.bind(this);

    this.state = {
      layout: 'large',
      progress: 0
    };
  }

  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive);
    window.addEventListener('scroll', this._updateProgress);
    window.addEventListener('resize', this._updateProgress);
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

  _updateProgress() {
    let xOffset = window.pageXOffset;
    // Site width is either 8 or 7.5 vw.
    let siteWidth = (this.state.layout === 'small')
      ? window.innerWidth * 8
      : window.innerWidth * 7.5;
    let scrollPercent = xOffset / (siteWidth - window.innerWidth);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    if (scrollPercentRounded !== this.state.progress) this.setState({progress:scrollPercentRounded});
    console.log('progress:', scrollPercentRounded);
  }

  render () {
    let text1Left = (this.state.layout === 'small')
      ? '190vw'
      : '120vw';

    let text2Left = (this.state.layout === 'small')
      ? '340vw'
      : '200vw';

    let text3Left = (this.state.layout === 'small')
      ? '490vw'
      : '270vw';

    let text4Left = (this.state.layout === 'small')
      ? '630vw'
      : '340vw';

    let text5Left = (this.state.layout === 'small')
      ? '770vw'
      : '420vw';

    let text6Left = (this.state.layout === 'small')
      ? '890vw'
      : '485vw';

    let text7Left = (this.state.layout === 'small')
      ? '1010vw'
      : '550vw';

    let shareIcon = <Share className={`end-frame__icon`} colorIndex={"dark-2"} />;

    let navActive = (this.state.progress < 5)
      ? true
      : false;

    return (
      <Article className="home" scrollStep={false} controls={false} wrap={false} responsive={false} direction="row">
        <Nav active={navActive} />
        <Section pad="none" direction="row" responsive={false} ref="section" style={{position:'relative',height:'100vh'}}>

          <Box className="text-frame title-frame" justify="center" align="center">
            
            <div className="title-frame--border">
            <Heading tag="h1">
              The Speed of Change is Accelerating
            </Heading>
            </div>
            <Heading tag="h3">
              In no industry is this more true than Financial Services. New entrants are disrupting the marketplace, 
              consumers are more willing to adopt new technologies than ever before, and established players are racing to adapt.
            </Heading>
          </Box>
          
          <Box className="text-frame" style={{ left:text1Left }}>
            <Heading className="text-frame__title" tag="h3">
              Regulatory Reform is reshaping the industry
            </Heading>
            <Box className="text-frame__row" direction="row">
              <Heading tag="h1">
                $97.3Bn
              </Heading>
              <Heading tag="h3">
                Will be spent worldwide on risk information technologies by 2018.
              </Heading>
            </Box>
          </Box>

          <Box className="text-frame" style={{ left:text2Left }}>
            <Heading className="text-frame__title" tag="h3">
              The Economics of the Financial Services Business have changed
            </Heading>
            <Box direction="row" className="text-frame__row">
              <Heading tag="h1">
                25-30%
              </Heading>
              <Heading tag="h3">
                Of current banking industry revenue is at risk.
              </Heading>
            </Box>
          </Box>

          <Box className="text-frame" style={{ left:text3Left }}>
            <Heading className="text-frame__title" tag="h3">
              Customer base for financial institutions is shifting
            </Heading>
            <Box direction="row" justify="center" align="center">
              <Meter value={25} type="circle" size="medium" units="%" 
                a11yTitleId="meter-title" a11yDescId="meter-desc" />
              <Heading tag="h3">
                of the customers of any given bank indicate brand loyalty
              </Heading>
            </Box>
          </Box>

          <Box className="text-frame" style={{ left:text4Left }}>
            <Heading className="text-frame__title" tag="h3">
              Technology is creating new opportunities and threats.
            </Heading>
            <Box direction="row" justify="center" align="center">
              <Meter value={62} type="circle" size="medium" units="%" 
                a11yTitleId="meter-title" a11yDescId="meter-desc" />
              <Heading tag="h3">
                Innovative banks are likely to see 62% growth 
                over the next 5 years vs  market average 35%.
              </Heading>
            </Box>
          </Box>

          <Box className="text-frame" style={{ left:text5Left }}>
            <Heading className="text-frame__desktop-header" tag="h1">
              Helping Businesses Evolve
            </Heading>

            <Heading className="text-frame__title" tag="h3">
              Zero unplanned downtime
            </Heading>
            <Heading tag="h3">
              HPE provided an end-to-end, single-vendor infrastructure upgrade to 
              enable the integration of acquisitions while supporting business-critical 
              processes, with zero unplanned downtime.
            </Heading>
          </Box>

          <Box className="text-frame" style={{ left:text6Left }}>
            <Heading className="text-frame__title" tag="h3">
              Lower IT Infrastructure Cost
            </Heading>
            <Heading tag="h3">
              HPE moved the bank's IT infrastructure to a new style based on HP Helion 
              Managed Private Cloud, modernizing the IT environment and reducing 
              IT-related infrastructure costs.
            </Heading>
          </Box>

          <Box className="text-frame" style={{ left:text7Left }}>
            <Heading className="text-frame__title" tag="h3">
              Enabling Transformation
            </Heading>
            <Heading tag="h3">
              HPE provided an IT infrastructure  solution, including a data center and 
              security system that enabled BlueShore to transform from a mass-market 
              credit union to a high-end financial boutique.
            </Heading>
          </Box>

          <img className="illustration" src="../img/bg.svg" />
        </Section>

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
          <Anchor label={'Share'} icon={shareIcon} reverse={true} onClick={this._onClick} />
        </Section>

      </Article>
    );
  }

};

export default Home;
