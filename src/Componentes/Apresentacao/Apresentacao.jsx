import imagemPerfil from "../../imgs/perfil.png"

import { Article, ButtonContato } from "./style"

function Apresentacao() {
    return (
        <Article id="apresentacao">
            <div>
                <div>
                    <h1>
                        <span>Olá,</span> meu nome é Matheus<br></br>Desenvolvedor Front-END <br></br>&#38;<br></br>Estudante de Análise e Desenvolvimento de Sistemas
                    </h1>
                    <address>
                        <ButtonContato href="mailto:matheusbalbinodeoliveira3@gmail.com" target="_blank" rel="noreferrer" colorBackground="#ff0000">
                            E-mail
                        </ButtonContato>
                        <ButtonContato href="https://github.com/matheusbalbino1" target="_blank" rel="noreferrer" colorBackground="#171515">
                            Github
                        </ButtonContato>
                        <ButtonContato href="https://www.linkedin.com/in/matheus-balbino-de-oliveira-4a2456195/" target="_blank" rel="noreferrer" colorBackground="#0e76a8">
                            Linkedin
                        </ButtonContato>
                    </address>
                </div>
                <img src={imagemPerfil} alt="foto de perfil do Matheus" ></img>
            </div>
        </Article>
    )
}
export default Apresentacao;