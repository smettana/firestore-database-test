import React from 'react';
import PropTypes from 'prop-types';

const HelloPage = ({title}) => {
  return (

    <div className="content-wrapper">
      <div className="hello-title">
        { title }
      </div>
    </div>
  );
}

HelloPage.propTypes = {
    title : PropTypes.string,
};

HelloPage.defaultProps = {
    title : '',
};

export default HelloPage;
