'use client'

import Link from "next/link";
import styled from "styled-components"

const Nav = styled.nav`
    height: 80px;
    background: #000;
    display: flex;
    justify-content: right;
    align-items: center;
    `;

const StyledLink = styled.a`
    color: #d9d9d9;
    &:hover {
        color: #56c495;
    }
    `;

const NavElements = styled.div`
    padding: 0rem 2rem;     
`;

const ContactElement = styled.div`
    padding: 0rem 6rem 0rem 2rem;     
`;

const Navbar = () => {
  return (
    <Nav>
        <NavElements>
            <Link href={"/"}><StyledLink>Home</StyledLink></Link>
        </NavElements>
        <NavElements>
            <Link href={"/about"}><StyledLink>About</StyledLink></Link>
        </NavElements>
        <NavElements>
            <Link href={"/projects"}><StyledLink>Projects</StyledLink></Link>
        </NavElements>
        <ContactElement>
            <Link href={"/contact"}><StyledLink>Contact</StyledLink></Link>
        </ContactElement>
    </Nav>
  )
}

function stext() {
    var x = document.getElementById("link1");
    x.style.color = 'red';
}

export default Navbar