import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";

import { fetchUsers, addUser, updateUser, changeFilter } from '../actions/actionCreator';

import Button from '@material-ui/core/Button';

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
        const { firstName, lastName, phone, isActive } = this.state.userInfo;
        const id = +new Date();
        
        const { addUser } = this.props;

        if(firstName === '' || lastName === '' || phone === ''){
            this.setState(({fieldsError}) => ({
                fieldsError: !fieldsError
            }));
        }else{
            addUser({id, firstName, lastName, phone, isActive});

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

        updateUser({id, firstName, lastName, phone, isActive});

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

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const headTitles = ['First Name', 'Last Name', 'Tel', 'State', 'Actions'];
        const state = this.state;
        const { users, filters , changeFilter } = this.props;
        const {firstName, lastName, phone, isActive} = state.userInfo;
        const popupShow = state.popupShow;
        const fieldsError = state.fieldsError;
        const userEdit = state.userEdit;
        const filteredUsers = this.filterUsers(users, filters);

        return(
            <div className="content-wrapper">
                <div className="global-actions">
                    <Button variant="contained" className="button-add" data-name="add" onClick={this.popupBtnClickListener} >
                        Add User
                    </Button>
                    {users.length > 0 ? <Filters changeFilter={changeFilter}/> : null }
                </div>
                <div className="users-wrapper">
                    <div className="users-thead">
                        {
                            headTitles.map(title => {
                                return(
                                    <div className="item" key={title}>{title}</div>
                                )
                            })
                        }
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
}), { fetchUsers, addUser, updateUser, changeFilter })(Users);