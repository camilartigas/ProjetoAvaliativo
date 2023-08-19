import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import logop from "../../img/logop.png";
import { HeadStyled, LoginStyled } from "./styled";
import React, { useState } from "react";


function validaSenha(password) {
    // Verifica se a senha tem pelo menos 8 caracteres
    if (password.length < 8) {
        return false;
    }

    const temNumero = /[0-9]/.test(password);
    const temLetra = /[a-zA-Z]/.test(password);

    return temNumero && temLetra;
}

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
   
    

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const validaLogin = (e) => {
        e.preventDefault();
        
        if (!validaSenha(password)) {
            alert("A senha deve conter pelo menos 8 caracteres com números e letras.");
            return;
        }
        
        
    
    };

    return (
        <>
            <Header />
            <LoginStyled>
                <HeadStyled>
                    <img src={logop} alt="logo DEVinPharmacy" />
                    <span>Seja bem vindo! Faça seu login</span>
                </HeadStyled>


                <form onSubmit={validaLogin}>
                    <div>
                        <input 
                        required 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="nome@email.com" 
                        onChange={handleEmailChange}
                        value={email}
                        />
                    </div>
                    <div>
                        <input 
                        required
                        id="password"
                        name="password"
                        type="password"
                        placeholder="********"
                        onChange={handlePasswordChange}
                        value={password}
                        />
                    </div>

                    <a href="">Esqueceu sua senha?</a>
                    <button type="submit">Entrar</button>
                    <a href="">Crie sua conta aqui</a>

                </form>
            </LoginStyled>
            <Footer />




            <p>
                
                Ao validar os campos de input, o usuário é redirecionado para a página de Mapa.
               
            </p> 
        </>

    )
}
export { Login };