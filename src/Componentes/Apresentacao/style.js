import styled from "styled-components";

export const Article = styled.article`

background-image: linear-gradient(rgb(20, 0, 66), black);
display: flex;
flex-direction: column;
align-items: center;
padding: 8rem 0;

    div {
        max-width: 1200px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 1rem;

        @media (max-width:930px){
            flex-direction: column-reverse;
            flex-wrap: wrap;
        }

        img {
            max-width: 400px;
            width: 80%;
            border-radius: 50%;
            background: #949494;
            }

        div {
            flex-direction: column;
            display: flex;
            align-items: center;
            justify-content: space-between;

            h1 {
                color: white;
                text-align: center;
                letter-spacing: 5px;
                @media (max-width:450px){
                    font-size: 1rem;
                }

                span {
                font-size: 3rem;
                }
            }

            address {
                margin-top: 7rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 500px;
                width: 100%;
                text-decoration: none;
                @media (max-width:450px){
                    flex-wrap: wrap;
                    flex-direction: column;
                }

            }
        }
    }

`
export const ButtonContato = styled.a`
text-align:center;
box-sizing: content-box;
padding: 10px 20px;
text-decoration: none;
font-style: normal;
text-transform: uppercase;
color: white;
border-radius: 5px;
background: ${props => props.colorBackground};
&:active{
    transform: scale(1.2);
}
@media (max-width:450px){
    width:80%;
    margin-bottom: 1rem;
}


`