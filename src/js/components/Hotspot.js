import React, { Component, PropTypes } from 'react';
import Layer from 'grommet/components/Layer';
import Add from 'grommet/components/icons/base/Add';

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
    let layer = (this.state.layerActive) ? (
      <div className="hotspot-layer">
        <Layer onClose={this._onClick} closer={true} flush={true} align={"center"}>
        {this.props.content}
        </Layer>
      </div>
    ) : (null);

    return (
      <div className={CLASS_ROOT} style={this.props.style}>
        <div className={`${CLASS_ROOT}__container`} 
          onClick={this._onClick} style={{top: this.props.top, left: this.props.left}}>
          <div className={`${CLASS_ROOT}__icon-container`}>
            <div className={`${CLASS_ROOT}__icon`}>
              <Add />
            </div>
          </div>
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
