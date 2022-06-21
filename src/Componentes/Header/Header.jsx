import { NavDesktop, NavMobile } from "./style"
import { FaBars, FaAngleLeft } from "react-icons/fa"
import { useState } from "react";

function Header() {

    const [mostrarMenu, setMostrarMenu] = useState(false)

    function mostrarEsconderMenu (){
        setMostrarMenu(!mostrarMenu)
    }

    return (
        <>
            <NavMobile onClick={mostrarEsconderMenu}>
                {mostrarMenu ?
                    <>
                        <nav>
                            <li><a href="#apresentacao">Apresentação</a></li>
                            <li><a href="#conhecimentos">Conhecimentos</a></li>
                            <li><a href="#projetos">Projetos</a></li>
                        </nav>
                        <div onClick={mostrarEsconderMenu}><FaAngleLeft /></div>
                    </>
                    :
                    <FaBars />
                }

            </NavMobile>
            <NavDesktop>
                <nav>
                    <ul>
                        <li><a href="#apresentacao">Apresentação</a></li>
                        <li><a href="#conhecimentos">Conhecimentos</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                    </ul>
                </nav>
            </NavDesktop>
        </>

    )
}
export default Header;