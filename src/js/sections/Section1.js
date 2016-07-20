import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';

export default class Section1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });
  }

  render() {
    let text1Left = (this.props.layout === 'small')
      ? '250vw'
      : '120vw';

    let text2Left = (this.props.layout === 'small')
      ? '430vw'
      : '200vw';

    let text3Left = (this.props.layout === 'small')
      ? '580vw'
      : '270vw';

    let text4Left = (this.props.layout === 'small')
      ? '730vw'
      : '340vw';

    let bgStyles = classnames([
      'illustration__background',
      {
        ['illustration__background--active']: this.state.mounted
      }
    ]);

    let womanTrigger = (this.props.layout === 'small')
      ? 22
      : 17;

    let womanStyles = classnames([
      'illustration--stacked',
      'illustration__item',
      'illustration__item--left', {
        ['illustration__item--active']: this.props.progress > womanTrigger
      }
    ]);

    let strollerTrigger = (this.props.layout === 'small')
      ? 32
      : 24;

    let strollerStyles = classnames([
      'illustration--stacked',
      'illustration__item',
      'illustration__item--right', {
        ['illustration__item--active']: this.props.progress > strollerTrigger
      }
    ]);

    let bikerTrigger = (this.props.layout === 'small')
      ? 41
      : 32;

    let bikerStyles = classnames([
      'illustration--stacked',
      'illustration__item',
      'illustration__item--left', {
        ['illustration__item--active']: this.props.progress > bikerTrigger
      }
    ]);

    let woman2Trigger = (this.props.layout === 'small')
      ? 50
      : 39;

    let woman2styles = classnames([
      'illustration--stacked',
      'illustration__item',
      'illustration__item--left', {
        ['illustration__item--active']: this.props.progress > woman2Trigger
      }
    ]);

    let heroTrigger = (this.props.layout === 'small')
      ? 21
      : 17;

    let heroStyles = classnames([
      'illustration--stacked', 
      'illustration__hero', {
        ['illustration__hero--active']: this.props.progress < heroTrigger
      }
    ]);

    return (
      <Section pad="none" direction="row" responsive={false} ref="section">

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

        <div className="illustration" ref="illustration">
          <img className={`illustration--stacked`} style={{zIndex: 5}} src="../img/buildings-1.svg" /> 
          <img className={womanStyles} src="../img/woman.svg" /> 
          <img className={strollerStyles} src="../img/stroller.svg" /> 
          <img className={bikerStyles} src="../img/biker.svg" /> 
          <img className={woman2styles} src="../img/woman-2.svg" /> 
          <img className={heroStyles} src="../img/hero.svg" ref="hero" /> 
          <img className={bgStyles} src="../img/bg.svg" />
        </div>
      </Section>
    );
  }
};

Section1.propTypes = {
  layout: PropTypes.string.isRequired,
  progress: PropTypes.number
};
