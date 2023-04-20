import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const HomeItem = () => {
    return (
        <Stack style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
            <img src="../../public/imgs/BagPhoto.png" alt="bag" style={{width:'40%'}}/>
            <Nav>
                <Nav.Link to="/store" as={NavLink}>
                   <Button variant="danger">Get started on your shopping</Button>
                </Nav.Link>
            </Nav>
        </Stack>
    );
};

