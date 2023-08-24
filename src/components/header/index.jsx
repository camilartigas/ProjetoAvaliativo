import { PrimarySearchAppBar } from "./mui"
import { Link } from "react-router-dom"
import { HeaderStyled } from "./styled"

function Header(){
    const pages = [
        {
            route:"",
            description:"Home"
        },
        {
            route:"cadastromedicamento",
            description:"Cadastro de Medicamentos"
        },
        {
            route:"listamedicamentos",
            description:"Lista de Medicamentos"
        },
        {
            route:"cadastronovafarmacia",
            description:"Cadastro de Novas Farmácias"
        },
        {
            route:"ofertas",
            description:"Ofertas"
        },
        {
            route:"mapa",
            description:"Mapa"
        }
    ]
    return(
        <>
        <PrimarySearchAppBar /> 
        <HeaderStyled>
        <nav>
        {pages.map(({ route, description }) => {
          return (
            <Link key={route} to={`/${route}`}>{description}</Link>
            // Adicione uma barra inicial na frente de 'route'
          );
        })}
      </nav>
        </HeaderStyled>
        </>
        

    )
}

export { Header };