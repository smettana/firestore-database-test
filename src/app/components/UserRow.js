import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const UserRow = ({id, firstName, lastName, phone, isActive, popupBtnListener, editUser}) => {
  
  return (
    <div className="user-row">
      <div className="item">
        {firstName}
      </div>
      <div className="item">
        {lastName}
      </div>
      <div className="item">
        {phone}
      </div>
      <div className="item">
        {isActive ? 'Active' : 'Not Active'}
      </div>
      <div className="item">
        <Button variant="contained" className="button-info">
          <Link to={`/users/${id}`}>
            Info
          </Link>
        </Button>
        <Button variant="contained" color="primary" data-id={id} className="button-edit" onClick={popupBtnListener} data-name="edit">
          Edit
        </Button>
      </div>
    </div>
  );
}

UserRow.propTypes = {
  id : PropTypes.number,
  firstName : PropTypes.string,
  lastName : PropTypes.string,
  phone : PropTypes.string,
  isActive : PropTypes.bool,
  popupBtnListener: PropTypes.func,
  editUser: PropTypes.func,
};

UserRow.defaultProps = {
  id : 0,
  firstName : '',
  lastName : '',
  phone : '',
  isActive: true,
  popupBtnListener: () => {},
  editUser: () => {},
};

export default UserRow;
