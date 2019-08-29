import React from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';


const ActivityMenuItem = ({ active, label, onClick }) => {
  const classes = classnames({
    ActivityMenuItem: true,
    'ActivityMenuItem--active': active,
  });

  return (
    <div className={classes} onClick={onClick}>
      <div className="ActivityMenuItem__label">
        {label}
      </div>
    </div>
  );
};

ActivityMenuItem.propTypes = {};

export default ActivityMenuItem;
