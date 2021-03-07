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
    position: sticky;
    top:0;
    z-index:10;
    a{
        color: #24bace;
        text-decoration:none;
        font-size: 1.8rem;
    }
    ul{
        display:flex;
        list-style: none;
    }
    #logo{
            font-size: 2rem;
            font-family: 'Kalam', cursive;    
        }
    li{
        padding-left: 10rem;
        position:relative;
    }

    @media only screen and (min-width: 350px){
        flex-direction:column;
        padding: 2rem 1rem;
        #logo{
            display: inline-block;
            margin: 1rem;
        }
        ul{
            padding:.8rem;
            justify-content:space-around;
            width:100%;
            li{
                padding:0;
            }
        }
    }


/* @media only screen and (min-width: 768px) {...}


@media only screen and (min-width: 992px) {...}


@media only screen and (min-width: 1200px) {...}  */

    
`
export default Nav;