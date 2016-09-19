import React, { Component, PropTypes } from 'react';
import Layer from 'grommet/components/Layer';
import Button from 'grommet/components/Button';
import Pulse from 'grommet/components/icons/Pulse';

const CLASS_ROOT = 'hotspot';

export default class Hotspot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerActive: false
    };

    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.setState({layerActive: !this.state.layerActive});
  }

  render() {
    const layer = (this.state.layerActive) ? (
      <div className="hotspot-layer">
        <Layer onClose={this._onClick} closer={true} flush={true} align={"center"}>
        {this.props.content}
        </Layer>
      </div>
    ) : (null);

    return (
      <div className={CLASS_ROOT} style={this.props.style}>
        <div className={`${CLASS_ROOT}__container`} 
          style={{top: this.props.top, left: this.props.left}}>
          <Button plain={true} onClick={this._onClick} className={`${CLASS_ROOT}__icon-container`}>
            <Pulse />
          </Button>
          {layer}
        </div>
        {this.props.children}
      </div>
    );
  }
};

Hotspot.PropTypes = {
  top: PropTypes.string,
  left: PropTypes.string
};

Hotspot.defaultProps = {
  top: '0%',
  left: '50%'
};
