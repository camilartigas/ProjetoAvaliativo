import { Footer } from "../components/footer";
import { Header } from "../components/header";

function CadastroNovaFarmacia(){
    return(
        <>
        <Header />
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