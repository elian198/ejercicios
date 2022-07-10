import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { CgMenuRight } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import { FaAccusoft } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarStyles'
import { useLocation, useHistory } from 'react-router-dom'
import { data } from '../../data/NavbarData'

const Navbar = () => {

    const [show, setShow] = useState(false);

    const history = useHistory();
    const location = useLocation();

    const handleClick = () => {
        setShow(() => !show);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const closeMobileMenu = (to, id) => {
        if (id && location.pathname === '/') scrollTo(id);
        history.push(to);
        setShow(false);
    };

    return (

        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>

                <NavbarContainer>

                    <NavLogo to='/'>
                        <FaAccusoft /> AP
                    </NavLogo>

                    <MobileIcon onClick={handleClick} > {show ? <FaTimes /> : <CgMenuRight />} </MobileIcon>

                    <NavMenu show={show}>
                        {data.map((data, index) => (
                            <NavItem key={index}>
                                <NavLinks onClick={() => closeMobileMenu(data.to, data.id)} > {data.text} </NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu>

                </NavbarContainer>

            </Nav>
        </IconContext.Provider>

    )
}


export default Navbar