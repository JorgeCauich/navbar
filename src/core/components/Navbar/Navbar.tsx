import { useState } from 'react';
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
                <NavbarBrand color='white' href="/">JC</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </NavBarBootstrap>
        </div>
    );
}