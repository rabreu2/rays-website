'use client'

import Link from "next/link";
import styled from "styled-components";
import { usePathname } from 'next/navigation';

const StyledLink = styled.p`
    color: ${(props) => (props.$active ? "#56c495" : "#d9d9d9")};
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
        color: #56c495;
    }
`;

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="h-20 bg-black flex items-center justify-center sm:justify-end w-full">
            <div className="px-4 sm:px-8 py-0">
                <Link href="/" passHref>
                    <StyledLink $active={pathname === '/'}>Home</StyledLink>
                </Link>
            </div>
            <div className="px-4 sm:px-8 py-0">
                <Link href="/about" passHref>
                    <StyledLink $active={pathname === '/about'}>About</StyledLink>
                </Link>
            </div>
            <div className="px-4 sm:px-8 py-0">
                <Link href="/projects" passHref>
                    <StyledLink $active={pathname === '/projects'}>Projects</StyledLink>
                </Link>
            </div>
            <div className="px-4 sm:px-8 py-0">
                <Link href="/contact" passHref>
                    <StyledLink $active={pathname === '/contact'}>Contact</StyledLink>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar