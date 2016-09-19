import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

let isWalking = false;
let animInterval;

export default class Hero2 extends Component {
  constructor(props) {
    super(props);

    this._getHeroTrigger = this._getHeroTrigger.bind(this);

    this.state = {
      heroLoop: [
        'hero-woman',
        'hero-walk-01-woman',
        'hero-walk-02-woman'
      ],
      currHeroImg: 'hero-woman'
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.scrolling === true && isWalking === false && this.props.progress > this._getHeroTrigger(this.props.layout)) {
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

    // Removes lag when transitioning to stand. 
    if(this.props.progress < this._getHeroTrigger(this.props.layout) && isWalking === true) {
      clearInterval(animInterval);
      isWalking = false;
      this.setState({currHeroImg: this.state.heroLoop[0]});
    }
  }

  _getHeroTrigger(layout) {
    if (layout === 'small') return 23;
    return 21;
  }

  render() {
    let  heroTrigger = this._getHeroTrigger(this.props.layout);

    let heroStyles = classnames([
      'illustration--stacked', 
      'illustration__hero-2', {
        ['illustration__hero-2--active']: this.props.progress > heroTrigger
      }
    ]);

    return (
      <div className={heroStyles} >
        <img src={`../img/${this.state.currHeroImg}.svg`} ref="hero" /> 
      </div>
    );
  }
};

Hero2.propTypes = {
  layout: PropTypes.string.isRequired,
  scrolling: PropTypes.bool,
  loop: PropTypes.array
};
