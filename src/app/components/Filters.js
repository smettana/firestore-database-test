import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const Filters = ({ changeFilter }) => {
    return (
        <div className="filters">
            <Button variant="contained" className="filter-all" onClick={() => {changeFilter('all')}}>All users</Button>
            <Button variant="contained" color="primary" className="filter-active" onClick={() => {changeFilter('active')}}>Active users</Button>
        </div>
    );
}

Filters.propTypes = {
    changeFilter: PropTypes.func,
};

Filters.defaultProps = {
    changeFilter: () => { },
};

export default Filters

