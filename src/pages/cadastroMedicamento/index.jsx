import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CadastroMedicamentoStyled } from "./styled";


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
    return (
        <>
            <Header />
            <CadastroMedicamentoStyled>
            <h1>Cadastro de Medicamentos</h1>
            
            <div>
                <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '54ch' } }} noValidate autoComplete="off">
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Nome do medicamento"
                            type="text"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Nome do laboratório"
                            type="text"
                        />
                    </div>
                </Box>

                <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '26ch' } }} noValidate autoComplete="off">
                    <div>
                        <TextField
                            required
                            id="outlined-number"
                            label="Dosagem"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }} 
                            />
                        <TextField
                            required
                            id="outlined-select-measure-native"
                            select
                            label="Selecione"
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
                            defaultValue="R$ "
                        />
                        <TextField
                            required
                            id="outlined-select-types-native"
                            select
                            label="Selecione"
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
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '110ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField
                        id="outlined-multiline-static"
                        label="Descrição do medicamento"
                        multiline
                        rows={5}
                        defaultValue="Default Value"
                    />
                </Box>
            </div>

            <Button variant="contained" size="large">
          Salvar
        </Button>



            <p>

                h. Ao cadastrar um novo medicamento, mostrar uma mensagem de feedback de produto
                cadastrado com sucesso. Dica: Utilize o método onSubmit com Try/Catch.
                i. Salve os dados em localStorage para simular uma API.
            </p>
            </CadastroMedicamentoStyled>
            <Footer />
        </>

    )
}

export { CadastroMedicamentos };