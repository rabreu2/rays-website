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
        padding: 0rem 2rem;
    `

const Navbar = () => {
  return (
    <Nav>
        <div>
            <Link href={"/"}><StyledLink>Home</StyledLink></Link>
        </div>
        <div>
            <Link href={"/about"}><StyledLink>About</StyledLink></Link>
        </div>
        <div>
            <Link href={"/contact"}><StyledLink>Contact</StyledLink></Link>
        </div>
    </Nav>
  )
}

export default Navbar