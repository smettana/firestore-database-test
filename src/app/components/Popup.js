import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Popup = (props) => {
    const {firstName, lastName, phone, isActive, popupShow, fieldsError, userEdit, handleInputChange, handleCheckboxChange, updateUser, addUser, closePopupBtnListener} = props;
    return (
        <div className={popupShow ? 'popup show' : 'popup'}>
            <div className="popup-wrapper">

                <div className="row">
                    <TextField
                        id="firstName"
                        className="input-field"
                        label="First name"
                        margin="normal"
                        variant="outlined"
                        name="firstName"
                        value={firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="row">
                    <TextField
                        id="lastName"
                        className="input-field"
                        label="Last name"
                        margin="normal"
                        variant="outlined"
                        name="lastName"
                        value={lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="row">
                    <TextField
                        id="phone"
                        className="input-field"
                        label="Phone"
                        margin="normal"
                        variant="outlined"
                        name="phone"
                        value={phone}
                        type="number"
                        onChange={handleInputChange}
                    />
                </div>
                {
                    fieldsError && <div className="row error">Please fill in all the inputs</div>
                }
                <div className="row">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isActive}
                                name="isActive"
                                onChange={handleCheckboxChange}
                            />
                        }
                        label="isActive"
                    />
                </div>
                <div className="row row-btns">
                    <Button variant="contained" color="primary" className="active-action" onClick={userEdit ? updateUser : addUser}>
                        {userEdit ? 'Update user' : 'Save user'}
                    </Button>
                    <Button variant="contained" color="secondary" className="passive-action" onClick={closePopupBtnListener}>
                        Cancel
                    </Button>
                </div>
            </div>

        </div>
    );
}

Popup.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    isActive: PropTypes.bool,
    popupShow: PropTypes.bool,
    fieldsError: PropTypes.bool,
    userEdit: PropTypes.bool,
    handleInputChange: PropTypes.func,
    handleCheckboxChange: PropTypes.func,
    updateUser: PropTypes.func,
    addUser: PropTypes.func,
    closePopupBtnListener: PropTypes.func,
};

Popup.defaultProps = {
    firstName: '',
    lastName: '',
    phone: '',
    isActive: true,
    popupShow: false,
    fieldsError: false,
    userEdit: false,
    handleInputChange: () => {},
    handleCheckboxChange: () => {},
    updateUser: () => {},
    addUser: () => {},
    closePopupBtnListener: () => {},
};

export default Popup;
