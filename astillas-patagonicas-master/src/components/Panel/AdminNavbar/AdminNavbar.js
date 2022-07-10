import React from 'react'
import { IconContext } from 'react-icons'
import { FaAccusoft } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLinks, NavLogo } from '../../Navbar/NavbarStyles'
import { NavItem, NavMenu } from './AdminNavbarStyles';

const AdminNavbar = () => {

    return (

        <IconContext.Provider value={{ color: '#fff' }}>

            <Nav bgColor>
                <NavbarContainer>

                    <NavLogo to='/'>
                        <FaAccusoft /> AP
                    </NavLogo>

                    <NavMenu>
                        <NavItem>
                            <NavLinks>Logout</NavLinks>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>

        </IconContext.Provider>

    )

}

export default AdminNavbar