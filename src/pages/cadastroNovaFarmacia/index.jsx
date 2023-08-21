import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CadastroFarmaciaStyled } from "./styled";
import React, { useState, useEffect } from 'react';


function CadastroNovaFarmacia() {
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [cep, setCep] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            const razaoSocial = event.target.razaoSocial.value;
            const cnpj = event.target.cnpj.value;
            const nomeFantasia = event.target.nomeFantasia.value;
            const email = event.target.email.value;
            const telefone = event.target.telefone.value;
            const celular = event.target.celular.value;
            const cep = event.target.cep.value;
            const logradouro = event.target.logradouro.value;
            const numero = event.target.numero.value;
            const bairro = event.target.bairro.value;
            const cidade = event.target.cidade.value;
            const estado = event.target.estado.value;
            const complemento = event.target.complemento.value;
            const latitude = event.target.latitude.value;
            const longitude = event.target.longitude.value;

            const novaFarmacia = {
                razaoSocial,
                cnpj,
                nomeFantasia,
                email,
                telefone,
                celular,
                cep,
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                complemento,
                latitude,
                longitude,
            };

            const existingNovaFarmacia = JSON.parse(localStorage.getItem('novaFarmacia')) || [];
            existingNovaFarmacia.push(novaFarmacia);
            localStorage.setItem('novaFarmacia', JSON.stringify(existingNovaFarmacia));

             // Limpa os campos após o cadastro
            event.target.reset();


            setFeedbackMessage('Farmácia cadastrado com sucesso.');
        } catch (error) {
            console.error(error);
            setFeedbackMessage('Ocorreu um erro ao cadastrar a farmácia.');
        }
    };

    const [addressData, setAddressData] = useState({
        logradouro: '',
        bairro: '',
        cidade: '',
        estado: '',
    });

    const fetchAddressData = async (cep) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
    
            if (!data.erro) {
                setAddressData({
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    cidade: data.localidade,
                    estado: data.uf,
                });
            }
        } catch (error) {
            console.error(error);
    }
};

useEffect(() => {
    if (addressData.logradouro === '' && cep !== '') {
        fetchAddressData(cep);
    }
}, [cep, addressData.logradouro]);



    return (
        <>
            <Header />
            <CadastroFarmaciaStyled>
                <h1>Cadastro Nova Farmácia</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '54ch' } }} noValidate autoComplete="off">
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Razão Social"
                                    type="text"
                                    name="razaoSocial"
                                   
                                />
                                <TextField
                                    required
                                    id="outlined-number"
                                    label="CNPJ"
                                    type="number"
                                    name="cnpj"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Nome Fantasia"
                                    type="text"
                                    name="nomeFantasia"
                                    />
                                    <TextField
                                    required
                                    id="outlined-required"
                                    label="E-mail"
                                    type="email"
                                    name="email"
                                    />
                                    <TextField
                                    id="outlined-number"
                                    label="Telefone"
                                    type="number"
                                    name="telefone"
                                />
                                <TextField
                                required
                                    id="outlined-number"
                                    label="Celular"
                                    type="number"
                                    name="celular"
                                />
                            </div>
                        </Box>

                        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '26ch' } }} noValidate autoComplete="off">
                            <div>
                                <h2>Endereço</h2>
                                <TextField
                                    required
                                    id="outlined-number"
                                    label="CEP"
                                    type="number"
                                    name="cep"
                                    onChange={(event) => setCep(event.target.value)}
                                />
                                <TextField
                                required
                                id="outlined-multiline-static"
                                label="Logradouro"
                                type="text"
                                name="logradouro"
                                value={addressData.logradouro}
    onChange={(event) => setAddressData({ ...addressData, logradouro: event.target.value })}

                            />
                                <TextField
                                    required
                                    id="outlined-helperText"
                                    label="Número"
                                    type="number"
                                    name="numero"
                                />
                                <TextField
                                required
                                id="outlined-multiline-static"
                                label="Bairro"
                                type="text"
                                name="bairro"
                                value={addressData.bairro}
    onChange={(event) => setAddressData({ ...addressData, bairro: event.target.value })}

                            />
                            <TextField
                                required
                                id="outlined-multiline-static"
                                label="Cidade"
                                type="text"
                                name="cidade"
                                value={addressData.cidade}
    onChange={(event) => setAddressData({ ...addressData, cidade: event.target.value })}

                            />
                            <TextField
                                required
                                id="outlined-multiline-static"
                                label="Estado"
                                type="text"
                                name="estado"
                                value={addressData.estado}
    onChange={(event) => setAddressData({ ...addressData, estado: event.target.value })}

                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Complemento"
                                type="text"
                                name="complemento"
                            />
                            <h3>Geolocalização</h3>
                            <TextField
                                    required
                                    id="outlined-helperText"
                                    label="Latitude"
                                    type="text"
                                    name="latitude"
                                />
                                <TextField
                                    required
                                    id="outlined-helperText"
                                    label="Longitude"
                                    type="text"
                                    name="longitude"
                                />
                               
                            </div>
                        </Box>
                    </div>

                    <Button type="submit" variant="contained" size="large">
                        Salvar
                    </Button>
                </form>
                {feedbackMessage && <p>{feedbackMessage}</p>}
            </CadastroFarmaciaStyled>
            <Footer />
        </>

    )
}

export { CadastroNovaFarmacia };