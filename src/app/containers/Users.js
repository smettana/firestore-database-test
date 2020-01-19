import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUser, updateUser, changeFilter } from '../actions/actionCreator';

import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

import UserRow from '../components/UserRow';
import Filters from '../components/Filters'
import Popup from '../components/Popup';

class Users extends Component {
    state = {
        userInfo: {
            firstName: '',
            lastName: '',
            phone: '',
            isActive: false
        },
        editableUserId:null,
        fieldsError:false,
        popupShow: false,
        userEdit: false
    }

    popupBtnClickListener = (e) =>{

        if(e.currentTarget.getAttribute('data-name') === 'edit'){
            const { users } = this.props;
            const editableUserInfo = users.filter(user => user.id === +e.currentTarget.getAttribute('data-id'))[0];
            console.log(editableUserInfo.id)
            this.setState(({popupShow, userEdit}) => ({
                userInfo: {
                    firstName: editableUserInfo.firstName,
                    lastName: editableUserInfo.lastName,
                    phone: editableUserInfo.phone,
                    isActive: editableUserInfo.isActive
                },
                editableUserId:editableUserInfo.id,
                popupShow: !popupShow,
                userEdit: !userEdit
            }));
        }else{
            this.setState(({popupShow}) => ({
                popupShow: !popupShow
            }));
        }
    }

    closePopupBtnListener = (e) =>{
        let { userEdit } = this.state;
        if(userEdit){
            userEdit = false
        } 
        this.setState(({popupShow}) => ({
            userInfo: {
                firstName: '',
                lastName: '',
                phone: '',
                isActive: false
            },
            editableUserId:null,
            popupShow: !popupShow,
            userEdit
        }));
    }
    
    handleInputChange = (e) => {
        let info = { ...this.state.userInfo, [e.target.name]: e.target.value };
        this.setState({
            userInfo: info
        });
    }

    handleCheckboxChange = (e) => {
        let info = { ...this.state.userInfo, [e.target.name]: e.target.checked };
        this.setState({
            userInfo: info
        });
    }

    addUser = () => {
        const {firstName, lastName, phone, isActive} = this.state.userInfo;
        const id = +new Date();

        const { addUser } = this.props;

        if(firstName === '' || lastName === '' || phone === ''){
            this.setState(({fieldsError}) => ({
                fieldsError: !fieldsError
            }));
        }else{
            addUser(id, firstName, lastName, phone, isActive);

            this.setState((popupShow) => ({
                userInfo: {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    isActive: false
                },
                popupShow: !popupShow,
                fieldsError: false
            }));
        }
        
    }

    filterUsers = (users, activefilter) => {
        switch (activefilter) {
            case 'active':
                return users.filter(user => user.isActive);
                break;
            default :
                return users
        }
    }

    updateUser = (e) => {
        const { firstName, lastName, phone, isActive } = this.state.userInfo;
        const id = this.state.editableUserId;
        const { updateUser } = this.props;

        console.log(id);
        updateUser(id, firstName, lastName, phone, isActive);

        this.setState((popupShow) => ({
            userInfo: {
                firstName: '',
                lastName: '',
                phone: '',
                isActive: false
            },
            editableUserId: null,
            popupShow: !popupShow,
            fieldsError: false,
            userEdit: false
        }));
    }

    render() {
        const state = this.state;
        const { users, filters , changeFilter } = this.props;
        const {firstName, lastName, phone, isActive} = state.userInfo;
        const popupShow = state.popupShow;
        const fieldsError = state.fieldsError;
        const userEdit = state.userEdit;
        const filteredUsers = this.filterUsers(users, filters);

        return(
            <div className="page-wrapper">
                <div className="global-actions">
                    <Button variant="contained" className="button-add" data-name="add" onClick={this.popupBtnClickListener} >
                        Add User
                    </Button>
                    <Filters changeFilter={changeFilter}/>
                </div>
                <div className="users-wrapper">
                    <div className="users-thead">
                        <div className="item">First Name</div>
                        <div className="item">Last Name</div>
                        <div className="item">Tel</div>
                        <div className="item">State</div>
                        <div className="item">Actions</div>
                    </div>
                    <div className="users-table">
                        {
                            filteredUsers.map(({id,firstName, lastName, phone, isActive})=>{
                                return(
                                    <UserRow 
                                        key={id} 
                                        id={id} 
                                        firstName={firstName} 
                                        lastName={lastName} 
                                        phone={phone} 
                                        isActive={isActive}
                                        popupBtnListener = {this.popupBtnClickListener}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div className={popupShow ? 'popup show': 'popup'}>
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
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
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
                                        onChange={this.handleCheckboxChange}
                                    />
                                }
                                label="isActive"
                                />
                        </div>
                        <div className="row row-btns">
                            <Button variant="contained" color="primary" className="active-action" onClick={userEdit ? this.updateUser : this.addUser}>
                                {userEdit ? 'Update user' : 'Save user'}
                            </Button>
                            <Button variant="contained" color="secondary" className="passive-action" onClick={this.closePopupBtnListener}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                    
                </div> */}
                <Popup 
                    firstName={firstName} 
                    lastName={lastName} 
                    phone={phone} 
                    isActive={isActive}
                    popupShow={popupShow}
                    fieldsError={fieldsError}
                    userEdit={userEdit}
                    handleInputChange={this.handleInputChange}
                    handleCheckboxChange={this.handleCheckboxChange}
                    updateUser={this.updateUser}
                    addUser={this.addUser}
                    closePopupBtnListener={this.closePopupBtnListener}
                />
            </div>
        )
    }
}

export default connect(({users, filters}) => ({
    users,
    filters
}), { addUser, updateUser, changeFilter })(Users);