
import styled from "styled-components";

export const NavDesktop = styled.header`

  height: 48px;
  background: black;

    nav {
        height: 48px;
        display: flex;
        justify-content: center;

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 500px;
            width: 90%;

            li {
                list-style: none;

                a {
                    text-decoration: none;
                    font-size: 1rem;
                    color: white;
                    text-transform: uppercase;
                    &:hover{
                        filter: brightness(0.8);
                    }
                }
            }
        }
    }
@media(max-width:450px){
    display:none;
}
`
export const NavMobile = styled.nav`
position:absolute;
top:0;
left:0;    
background:white;
display:flex;
justify-content: center;
align-items: center;
padding:0.5rem;
>svg{
    width:40px;
    height:40px;
}

div{
    background:whitesmoke;
    position: absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    top:0;
    right:-50px;
    height:50px;
    width:50px;
    svg{
        height:50px;
        width:50px;
    }
}
nav{
    position: relative;
    top:0;
    left:0;
    background:white;
    width:60vw;
    max-width:300px;
    min-height:100vh;
    li{
        list-style: none;
        margin-bottom: 2rem;
        text-transform: uppercase;
        margin-top:1rem;
        box-sizing: content-box;
        a{
            box-sizing: content-box;
            text-decoration: none;
            color:black;
            padding: 2rem 0 1rem 1rem;
        }
    }
}

@media(min-width:451px){
    display:none;
}
`