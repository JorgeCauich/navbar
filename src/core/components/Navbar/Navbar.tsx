import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Navbar as NavBarBootstrap
} from 'reactstrap';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <NavBarBootstrap className='px-4' container='fluid' color='primary' expand='md'>
                {/* <NavbarBrand color='white'> */}
                <Link className='nav-link white fw-bold' to={"/"}> JC</Link>
                {/* </NavbarBrand> */}
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link className='nav-link' to={"calculadora"}>Calculadora</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </NavBarBootstrap>
        </div>
    );
}