import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';

import Illustration2 from '../components/Illustration2';
import Hotspot from '../components/Hotspot';

export default class Section2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text5Left = (this.props.layout === 'small')
      ? '38vw'
      : '15vw';
    let text6Left = (this.props.layout === 'small')
      ? '193vw'
      : '84vw';
    let text7Left = (this.props.layout === 'small')
      ? '364vw'
      : '157vw';

    let sectionColorTrigger = (this.props.layout === 'small')
      ? 57
      : 52;

    let sectionClasses = classnames([
      'section-2', {
        ['section-2--light']: this.props.progress < sectionColorTrigger,
        ['section-2--dark']: this.props.progress > sectionColorTrigger
      }
    ]);

    let building1Trigger = (this.props.layout === 'small')
      ? 62
      : 63;

    let building2Trigger = (this.props.layout === 'small')
      ? 72
      : 73;

    let building3Trigger = (this.props.layout === 'small')
      ? 82
      : 84;

    let illustration2Classes = classnames([
      'illustration-2', {
        ['building-1--active'] : this.props.progress > building1Trigger,
        ['building-2--active'] : this.props.progress > building2Trigger,
        ['building-3--active'] : this.props.progress > building3Trigger
      }
    ]);

    let hotspotContent = (
      <div>
        <Headline size="large" strong={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in nisi lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Headline>
      </div>
    );

    return (
      <Section className={sectionClasses} pad="none" direction="row" responsive={false} ref="section">

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

        <Hotspot style={{alignSelf: 'flex-end'}} tabIndex="0" content={hotspotContent} name="hotspot" top={'45%'} left={'79.4%'}>
          <Hotspot style={{alignSelf: 'flex-end'}} content={hotspotContent} name="hotspot" top={'30%'} left={'20%'}>
            <Hotspot style={{alignSelf: 'flex-end'}} content={hotspotContent} name="hotspot" top={'12%'} left={'53%'}>
              <Illustration2 className={illustration2Classes} />
            </Hotspot>
          </Hotspot>
        </Hotspot>
      </Section>
    );
  }
};

Section2.propTypes = {
  layout: PropTypes.string.isRequired,
  progress: PropTypes.number
};
