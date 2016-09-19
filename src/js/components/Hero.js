import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

let isWalking = false;
let animInterval;

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroLoop: [
        'hero',
        'hero-walk-01',
        'hero-walk-02'
      ],
      currHeroImg: 'hero'
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.scrolling === true && isWalking === false) {
      animInterval = setInterval(() => {
        switch(this.state.currHeroImg) {
          case this.state.heroLoop[1]:
            this.setState({currHeroImg: this.state.heroLoop[2]});
            break;
          case this.state.heroLoop[2]:
            this.setState({currHeroImg: this.state.heroLoop[1]});
            break;
          default:
            this.setState({currHeroImg: this.state.heroLoop[1]});
        }
      }, 250);

      isWalking = true;
    } else if (this.props.scrolling === false && isWalking === true ) {
      clearInterval(animInterval);
      isWalking = false;
      this.setState({currHeroImg: this.state.heroLoop[0]});
    }
  }

  render() {
    let  heroTrigger = (this.props.layout === 'small')
      ? 18
      : 17;

    let heroStyles = classnames([
      'illustration--stacked', 
      'illustration__hero', {
        ['illustration__hero--active']: this.props.progress < heroTrigger
      }
    ]);

    return (
      <div className={heroStyles} >
        <img src={`../img/${this.state.currHeroImg}.svg`} ref="hero" /> 
      </div>
    );
  }
};

Hero.propTypes = {
  layout: PropTypes.string.isRequired,
  scrolling: PropTypes.bool,
  loop: PropTypes.array
};
