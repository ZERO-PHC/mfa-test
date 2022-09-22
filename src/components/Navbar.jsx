import styled from "styled-components"
import Image from "next/image"

const Navbar = () => {
    return (
        <Nav style={{
            background: "rgba(0, 0, 0, 0.5)"
        }}>
            <Image src="/assets/logo.png" alt="logo" height={50} width={50} />
        </Nav>
    )
}

export default Navbar;


const Nav = styled.nav`
    margin: 0;
    position: fixed;
    width: 100%;
    padding: 0;
    display: flex;
    border-bottom: 0.5px solid #00ffb2;
    align-items: center;
    padding: 0 2rem;
    height: 4rem;
    z-index: 100;
    
`