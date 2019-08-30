import React from 'react';
import PropTypes from 'prop-types';
import ActivityMenuItem from '../ActivityMenuItem/component';
import './styles.scss';


const ActivityMenu = ({ activeTab, changeTab }) => {
  const handleSetActive = (index) => {
    window.scrollTo(0, 0);
    return () => changeTab(index);
  }

  const renderTabs = () => {
    const tabs = [
      { label: 'Top 10 Played' },
      { label: 'Last 2 weeks' },
    ];

    return tabs.map((tab, index) =>
      <ActivityMenuItem
        label={tab.label}
        active={index === activeTab}
        key={index.toString()}
        onClick={handleSetActive(index)}
      />
    );
  }

  return (
    <div className="ActivityMenu">
      <div className="ActivityMenu__title UI__subtitle">Activity</div>
      {renderTabs()}
    </div>
  );
}

ActivityMenu.propTypes = {
  activeTab: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default ActivityMenu;
