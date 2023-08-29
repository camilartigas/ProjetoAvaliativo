import React, { useState, useEffect } from 'react';
import { Header } from '../../components/header';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import logop from "../../img/logop.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from '@mui/material/Box';
import { Container, StyledImage, Title } from './styled'

function Ofertas() {
  const [medications, setMedications] = useState([]);
  const [filteredMedications, setFilteredMedications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const existingMedications = JSON.parse(localStorage.getItem('medications')) || [];
    setMedications(existingMedications);
    setFilteredMedications(existingMedications);
  }, []);

  const handlePriceChange = (medicationName, newPrice) => {
    const updatedMedications = medications.map((medication) => {
      if (medication.nomeMedicamento === medicationName) {
        return { ...medication, preco: newPrice };
      }
      return medication;
    });

    setMedications(updatedMedications);
    setFilteredMedications(updatedMedications);
    localStorage.setItem('medications', JSON.stringify(updatedMedications));
  };

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const filtered = medications.filter(
      (medication) =>
        medication.nomeMedicamento.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredMedications(filtered);

    if (newSearchTerm === '') {
      setFilteredMedications(medications);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <StyledImage src={logop} alt="logo DEVinPharmacy" />
        <Title variant="h5">Cadastro de Ofertas</Title>
      </Container>
      <Box sx={{ p: 3 }}>
        <TextField
          label="Buscar medicamento"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderColor: '#00153c',
              borderRadius: '15px',
              borderWidth: '2px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00153c',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#046d8b',
            }
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
        {filteredMedications.map((medication) => (
          <Card
            key={medication.nomeMedicamento}
            sx={{
              border: '1px solid #00153c',
              borderRadius: '15px',
              transition: 'transform 0.2s',
              padding: '16px',
            }}
          >
            <CardContent>
              <Typography variant="h6">{medication.nomeMedicamento}</Typography>
              <Typography variant="body1">Preço: {medication.preco}</Typography>
              <TextField
                label="Novo Preço"
                variant="outlined"
                fullWidth
                type="text"
                defaultValue={medication.preco}
                onChange={(event) =>
                  handlePriceChange(medication.nomeMedicamento, event.target.value)
                }
                sx={{ marginTop: 1 }}
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}

export { Ofertas };
