import styled from "styled-components"

export const Article = styled.article`
padding-top:7rem;

    h2{
        text-transform:uppercase;
        text-align: center;
        font-size:2rem;
        letter-spacing: 5px;
    }
    article{
        display:flex;
        overflow-x: scroll;
        height:360px;
        margin-top:2rem;
        padding-left:2rem;
        padding-top:2rem;
        padding-bottom:2rem;
        box-sizing:content-box ;
        margin: 2rem 0 0 1rem;

        @media(max-width:600px){
                    padding-bottom: 0;
                    height:300px;
            }

        > div{
            display:flex;
            flex-direction: column;
            margin-right:2rem;
            border-radius: 20px 20px 0 0;
            height:330px;
            border:1px solid black;
            @media(max-width:600px){
                    height:215px;
            }
            @media(max-width:450px){
                    height:175px;
                }
            > div{
                max-width:700px;
                min-width: 500px;
                background:whitesmoke;
                height:300px;
                border-radius: 20px 20px 0 0;
                @media(max-width:600px){
                    min-width: 300px;
                    height:180px;
                }
                @media(max-width:450px){
                    min-width: 240px;
                    height:140px;
                }
                
                >a{
                    width:100%;

                    >img{
                        width:100%;
                        max-height:400px;
                        border-radius: 20px 20px 0 0;
                    }
                }
            }
            > address{
                display:flex;
                flex-wrap: wrap;
            }
        }
    }

`
export const DivGithub = styled.a`
        width:100%;
        text-align: center;
        padding:0.5rem 0;
        background-color: #171515;
        text-decoration: none;       
        color:white;
        font-style:normal;
        text-transform:uppercase;

`