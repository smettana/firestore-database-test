import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink, Link } from "react-router-dom";
import DehazeIcon from '@material-ui/icons/Dehaze';

import logo from '../../images/logo.svg';

const Header = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="menu">
                <DehazeIcon aria-controls="simple-menu" aria-haspopup="true" fontSize="large" onClick={handleClick}/>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><NavLink exact to="/">Hello Page</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink  to="/users">Users</NavLink></MenuItem>
                </Menu>
            </div>
        </header>
    )
}


export default Header;