import styled from "styled-components"

const Navbar = () => {
    return (
        <Nav>
            <img src="logo.png" alt="" />
        </Nav>
    )
}

export default Navbar;

const Nav = styled.nav`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    img{
        width: 450px;
    }
`