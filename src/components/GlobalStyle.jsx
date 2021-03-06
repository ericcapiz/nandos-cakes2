import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background: #AAD6D7;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #063b42;
    background: transparent;
    color:black;
    transition: all 0.5s ease;
    border-radius: 5%;
    &:hover{
        background-color:#2b737c;
        color:white;
    }
    
}

h2{
    font-weight: lighter;
    font-size:4rem;
    color: #3d6c6e
    }
h3{
    color:#2b737c;
    }
h4{
    font-weight: bold;
    color:#2b737c;
}
a{
    font-size:1.1rem;
}
span{
    font-weight: bold;
    color:grey;
}
p{
    padding: 3rem 0rem;
    color: grey;
    font-size: 1.4rem;
    line-height: 150%normal;
    }

`

export default GlobalStyle;