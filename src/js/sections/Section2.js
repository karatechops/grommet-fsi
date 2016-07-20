import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';

export default class Section2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text5Left = (this.props.layout === 'small')
      ? '28vw'
      : '15vw';
    let text6Left = (this.props.layout === 'small')
      ? '163vw'
      : '84vw';
    let text7Left = (this.props.layout === 'small')
      ? '310vw'
      : '157vw';

    let sectionColorTrigger = (this.props.layout === 'small')
      ? 58
      : 47;

    let sectionClasses = classnames([
      'section-2', {
        ['section-2--light']: this.props.progress < sectionColorTrigger,
        ['section-2--dark']: this.props.progress > sectionColorTrigger
      }
    ]);

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

        <div className="illustration-2">
          <img src="../img/bg-2.svg" />
        </div>
      </Section>
    );
  }
};

Section2.propTypes = {
  layout: PropTypes.string.isRequired,
  progress: PropTypes.number
};
