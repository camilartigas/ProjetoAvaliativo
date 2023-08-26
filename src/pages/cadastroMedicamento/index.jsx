import { Header } from "../../components/header";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CadastroMedicamentoStyled } from "./styled";
import React, { useState } from 'react';



const types = [
    {
        value: 'medicamento comum',
        label: 'Medicamento comum',
    },
    {
        value: 'medicamento controlado',
        label: 'Medicamento controlado',
    },

];

const measure = [
    {
        value: 'miligramas',
        label: 'mg',
    },
    {
        value: 'microgramas',
        label: 'mcg',
    },
    {
        value: 'gramas',
        label: 'g',
    },
    {
        value: 'mililitros',
        label: 'ml',
    },
    {
        value: 'litros',
        label: 'L',
    },
    {
        value: 'unidade internacional',
        label: 'UI',
    },
];

function CadastroMedicamentos() {

    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            const nomeMedicamento = event.target.nomeMedicamento.value;
            const nomeLaboratorio = event.target.nomeLaboratorio.value;
            const dosagem = event.target.dosagem.value;
            const medida = event.target.medida.value;
            const preco = event.target.preco.value;
            const tipo = event.target.tipo.value;
            const descricao = event.target.descricao.value;

            const medication = {
                nomeMedicamento,
                nomeLaboratorio,
                dosagem,
                medida,
                preco,
                tipo,
                descricao,
            };

            const existingMedications = JSON.parse(localStorage.getItem('medications')) || [];
            existingMedications.push(medication);
            localStorage.setItem('medications', JSON.stringify(existingMedications));

            // Limpa os campos após o cadastro
            event.target.nomeMedicamento.value = '';
            event.target.nomeLaboratorio.value = '';
            event.target.dosagem.value = '';
            event.target.medida.value = 'mg'; // Define um valor padrão para a medida
            event.target.preco.value = 'R$ ';
            event.target.tipo.value = 'medicamento comum';
            event.target.descricao.value = '';


            setFeedbackMessage('Medicamento cadastrado com sucesso.');
        } catch (error) {
            console.error(error);
            setFeedbackMessage('Ocorreu um erro ao cadastrar o medicamento.');
        }
    };

    return (
        <>
            <Header />
            <CadastroMedicamentoStyled>
                <h1>Cadastro de Medicamentos</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '54ch' } }} noValidate autoComplete="off">
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Nome do medicamento"
                                    type="text"
                                    name="nomeMedicamento"
                                   
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Nome do laboratório"
                                    type="text"
                                    name="nomeLaboratorio"
                                    />
                            </div>
                        </Box>

                        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '26ch' } }} noValidate autoComplete="off">
                            <div>
                                <TextField
                                    required
                                    id="outlined-number"
                                    label="Dosagem"
                                    type="number"
                                    name="dosagem"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-select-measure-native"
                                    select
                                    label="Selecione"
                                    name="medida"
                                    defaultValue="mg"
                                    SelectProps={{
                                        native: true,
                                    }}>
                                    {measure.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                                <TextField
                                    required
                                    id="outlined-helperText"
                                    label="Preço"
                                    name="preco"
                                   defaultValue="R$ "
                                />
                                <TextField
                                    required
                                    id="outlined-select-types-native"
                                    select
                                    label="Selecione"
                                    name="tipo"
                                    defaultValue="mg"
                                    SelectProps={{
                                        native: true,
                                    }}>
                                    {types.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </div>
                        </Box>

                        <Box
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '110ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-multiline-static"
                                label="Descrição do medicamento"
                                name="descricao"
                                multiline
                                rows={5}
                               defaultValue="Default Value"
                            />
                        </Box>
                    </div>

                    <Button type="submit" variant="contained" size="large">
                        Salvar
                    </Button>
                </form>

                {feedbackMessage && <p>{feedbackMessage}</p>}


            </CadastroMedicamentoStyled>
            
        </>

    )
}

export { CadastroMedicamentos };