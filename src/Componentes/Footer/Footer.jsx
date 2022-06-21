import styled from "styled-components"

const FooterEnd = styled.footer`
    margin-top:4rem;
    background:black;
    padding:1rem 0;
    address{
        color:whitesmoke;
        text-align: center;
    }
`

function Footer(){
    return(
        <FooterEnd>
            <address>São Paulo - SP 2022 &#0169; matheus balbino de oliveira</address>
        </FooterEnd>
    )
}
export default Footer