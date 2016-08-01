import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import Next from 'grommet/components/icons/base/Next';
import Anchor from 'grommet/components/Anchor';
import Headline from 'grommet/components/Headline';
import Layer from 'grommet/components/Layer';
import Share from 'grommet/components/icons/base/Share';
import SocialShare from 'grommet/components/SocialShare';
import HPELogo from './HPELogo.js';

import Progress from './Progress';

const CLASS_ROOT = 'section-nav';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this._onShareClick = this._onShareClick.bind(this);
    this._onLayerClose = this._onLayerClose.bind(this);

    this.state = {
      navActive: false,
      layerActive: false
    };
  }

  _onShareClick() {
    this.setState({ layerActive: true });
  }

  _onLayerClose() {
    this.setState({ layerActive: false });
  }

  render() {
    let classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--active`]: this.props.progress > 98 || this.props.progress < 2,
        [`${CLASS_ROOT}--end`]: this.props.progress > 98
      }
    );

    let containerClasses = classnames(
      `${CLASS_ROOT}__container`
    );


    let shareIcon = <Share className={`end-frame__icon`} colorIndex={"dark-2"} />;

    let navCta = (this.props.progress < 10)
      ? <div className={`${CLASS_ROOT}__control`}>
          Scroll right to start journey <Next />
        </div>
      : <div className={`${CLASS_ROOT}__control`}>
          <Anchor label={'Share'} icon={shareIcon} reverse={true} onClick={this._onShareClick} />
        </div>;

    if (this.props.progress < 10 && this.props.layout !== 'small') navCta = null;
    
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
      <nav className={classes}>
        {layer}
      	<div className={containerClasses}>
          <HPELogo />
          {navCta}
        </div>
        <Progress percent={this.props.progress}/>
      </nav>
    );
  }
};

Nav.propTypes = {
  active: PropTypes.bool,
  progress: PropTypes.number
};
