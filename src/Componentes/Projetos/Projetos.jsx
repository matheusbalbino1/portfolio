import {Article, DivGithub} from "./style"

import {todosProjetos} from "./TodosProjetos"

console.log(todosProjetos)
function Projetos() {
    let URL = "https://docs.google.com/uc?id="
    return (
        <Article id="projetos">
            <h2>Projetos pessoais / cursos</h2>
            <article>
                {todosProjetos.map((projeto) => {
                    return (
                        <div key={projeto.id}>
                            <div>
                                <a href={projeto.URL_PAGE} target="_blank" rel="noreferrer"><img src={`${URL}${projeto.ID_IMAGEM}`} alt={projeto.ID_IMAGEM} /></a>
                            </div>
                            <address>
                                <DivGithub href={projeto.URL_GITHUB} target="_blank" rel="noreferrer">Github</DivGithub>
                            </address>
                        </div>
                    )
                })}
            </article>
        </Article>
    )
}
export default Projetos;