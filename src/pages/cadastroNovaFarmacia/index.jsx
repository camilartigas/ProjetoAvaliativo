import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { CadastroFarmaciaStyled } from "./styled";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CadastroNovaFarmacia() {
    return (
        <>
            <Header />
            <CadastroFarmaciaStyled >
                <h1>Cadastro de novas farmácias</h1>
                <div>
                <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' } }} noValidate autoComplete="off">
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Razão Social"
                            type="text"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="CNPJ"
                            type="text"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Nome Fantasia"
                            type="text"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="E-mail"
                            type="text"
                        />
                        <TextField
                            id="outlined-number"
                            label="Telefone"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }} 
                            />
                             <TextField
                             required
                            id="outlined-number"
                            label="Celular"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }} 
                            />
                    </div>
                    <div>
                        <h3>Endereço</h3>
                        <TextField
                            required
                            id="outlined-required"
                            label="CEP"
                            type="text"
                        />
                    </div>
                </Box>
                </div>
            </CadastroFarmaciaStyled>
            <p>
                
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