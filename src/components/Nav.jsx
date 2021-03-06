import {Link} from 'react-router-dom';
import styled from 'styled-components';
const Nav = () => {
    return ( 
        <StyledNav>
           
            <h1><Link id="logo" to="/">Nando's Cakes</Link>
            </h1>

            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/work">Sample Cakes</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
            </ul>
        </StyledNav>
     );
}

const StyledNav = styled.nav `
    min-height: 10vh;
    display:flex;
    margin: auto;
    justify-content: space-between;
    align-items:center;
    padding: 1rem 10rem;
    background: #063b42;
    a{
        color: #24bace;
        text-decoration:none;
    }
    ul{
        display:flex;
        list-style: none;
    }
    #logo{
            font-size: 1.5rem;
            font-family: 'Kalam', cursive;    
        }
    li{
        padding-left: 10rem;
        position:relative;
    }
    
`
export default Nav;