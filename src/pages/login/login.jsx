import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import logop from "../../img/logop.png";
import { HeadStyled, LoginStyled } from "./styled";


function Login() {
    return (
        <>
            <Header />
            <LoginStyled>
                <HeadStyled>
                    <img src={logop} alt="logo DEVinPharmacy" />
                    <span>Seja bem vindo! Faça seu login</span>
                </HeadStyled>


                <form>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="nome@email.com" />
                    </div>
                    <div>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="********" />
                    </div>

                    <a href="">Esqueceu sua senha?</a>
                    <button type="submit">Entrar</button>
                    <a href="">Crie sua conta aqui</a>

                </form>
            </LoginStyled>
            <Footer />




            <p>
                LOGIN COM CAMPO DE EMAIL E SENHA
                O evento onSubmit deverá validar se os campos foram preenchidos, sendo:
                i. E-Mail (obrigatório)
                ii. Senha (obrigatório)
                Ao validar os campos de input, o usuário é redirecionado para a página de Mapa.
                i. Não é necessário guardar as informações, apenas valide se o campo de e-mail recebeu um e-mail verdadeiro, e se o campo de senha possui 8 ou mais caracteres com números e letras.
                verificar header e footer default para todas as pg.
            </p> 
        </>

    )
}
export { Login };