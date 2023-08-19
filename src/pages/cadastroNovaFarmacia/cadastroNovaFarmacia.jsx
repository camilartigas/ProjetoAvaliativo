import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { CadastroFarmaciaStyled } from "./styled";
import { HeadStyled } from "./styled";
import logop from "../../img/logop.png";

function CadastroNovaFarmacia() {
    return (
        <>
            <Header />
            <CadastroFarmaciaStyled>
                <HeadStyled>
                    <img src={logop} alt="logo DEVinPharmacy" />
                    <span>Cadastro Nova Loja</span>
                </HeadStyled>
                <form>
                    <div>
                        <label htmlFor="razao_social">Razão Social</label>
                        <input type="text" name="razao-social" id="razao_social" placeholder="Razão Social" />
                    </div>
                    <div>
                        <label htmlFor="cnpj">CNPJ</label>
                        <input type="number" name="cnpj" id="cnpj" placeholder="00.000.000/0000-00" />
                    </div>
                    <div>
                        <label htmlFor="nome_fantasia">Nome Fantasia</label>
                        <input type="text" name="nome_fantasia" id="nome_fantasia" placeholder="Nome Fantasia" />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="e-mail" />
                    </div>
                    <div>
                        <label htmlFor="tel">Telefone</label>
                        <input type="tel" name="razao-social" id="tel" placeholder="55(00)0000-0000" />
                    </div>
                    <div>
                        <label htmlFor="celular">Celular</label>
                        <input type="tel" name="razao-social" id="celular" placeholder="55(00)90000-0000" />
                    </div>
                    <div>
                        <label htmlFor="endereco">Endereço</label>
                        <input type="number" name="cep" id="cep" placeholder="CEP" />
                        <input type="text" name="logradouro" id="logradouro" placeholder="Logradouro" />
                        <input type="number" name="numero" id="numero" placeholder="Número" />
                        <input type="text" name="bairro" id="bairro" placeholder="Bairro" />
                        <input type="text" name="cidade" id="cidade" placeholder="Cidade" />
                        <input type="text" name="estado" id="estado" placeholder="Estado" />
                        <input type="text" name="complemento" id="complemento" placeholder="Complemento" />
                    </div>


                    <button type="submit">Adicionar Nova Loja</button>


                </form>
            </CadastroFarmaciaStyled>


            <p>Todos os dados de uma farmácia real

                a. Razão social (obrigatório)
                b. CNPJ (obrigatório)
                c. Nome Fantasia (obrigatório)
                d. E-mail (obrigatório)
                e. Telefone (opcional)
                f. Celular (obrigatório)
                g. Endereço
                CEP (obrigatório)
                Logradouro/Endereço (obrigatório)
                Número (obrigatório)
                Bairro (obrigatório)
                Cidade (obrigatório)
                Estado (obrigatório)
                Complemento (opcional)
                Geolocalização
                Latitude (obrigatório)
                Longitude (obrigatório)
                Os dados de endereço devem ser pré-preenchidos através da consulta do CEP pela API ViaCEP do IBGE Brasil. Preencher com os campos disponíveis da API (logradouro, bairro, cidade e etc) e solicitar ao usuário os campos extras (número, complemento e etc)
                i. Os campos obrigatórios e opcionais devem ser validados no método onSubmit.
                j. Ao cadastrar uma nova farmácia, mostrar uma mensagem de feedback de empresa
                cadastrada com sucesso. Dica: Utilize o método onSubmit com Try/Catch.
                k. Salve os dados em localStorage para simular uma API.
                verificar header e footer default para todas as pg.
            </p>
            <Footer />
        </>
    )
}

export { CadastroNovaFarmacia };