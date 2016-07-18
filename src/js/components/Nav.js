import React from 'react';
import classnames from 'classnames';

import HPELogo from './HPELogo.js';

const CLASS_ROOT = 'section-nav';

export default function Nav (props) {
  let classes = classnames(
    CLASS_ROOT,
    {
      [`${CLASS_ROOT}--active`]: props.active
    }
  );

  let containerClasses = classnames(
    `${CLASS_ROOT}__container`
  );

  return (
    <nav className={classes}>
    	<div className={containerClasses}>
        <HPELogo />
      </div>
    </nav>
  );
};
