import styled from "styled-components"

export const ContainerCarousel = styled.article`
    background-color:black;
    overflow: hidden;
    `
export const Carousel = styled.ul`
        display:flex;
        background:black;
        transform: translateX(0);
        animation-duration: 25s;
        animation-name: go-back;
        animation-iteration-count: infinite;
        @keyframes go-back {
             from {
                    transform: translateX(100px);
            }
            to {
                    transform: translateX(-3500px);
            }
            }
        li{
            background:black;
            list-style: none;
            color:whitesmoke;
            margin-right:1rem;
            min-width: 200px;
            text-align: center;
            text-transform: uppercase;
            padding:1rem 0;
        }
    `