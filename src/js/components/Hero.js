import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

let isWalking = false;
let animInterval;
let heroLoop = [
  'hero',
  'hero-walk-01',
  'hero-walk-02'
];

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroImg: 'hero'
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.scrolling === true && isWalking === false) {
      animInterval = setInterval(() => {
        switch(this.state.heroImg) {
          case 'hero-walk-01':
            this.setState({heroImg: heroLoop[2]});
            break;
          case 'hero-walk-02':
            this.setState({heroImg: heroLoop[1]});
            break;
          default:
            this.setState({heroImg: heroLoop[1]});
        }
      }, 250);

      isWalking = true;
    } else if (this.props.scrolling === false && isWalking === true ) {
      clearInterval(animInterval);
      isWalking = false;
      this.setState({heroImg: heroLoop[0]});
    }
  }

  render() {
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
      <div className={heroStyles} >
        <img src={`../img/${this.state.heroImg}.svg`} ref="hero" /> 
      </div>
    );
  }
};

Hero.propTypes = {
  layout: PropTypes.string.isRequired,
  scrolling: PropTypes.bool
};
