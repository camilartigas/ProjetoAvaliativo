import React, { useState } from 'react';
import { Header } from '../../components/header';
import { MedicamentoCard } from '../../components/medicamentoCard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import logop from "../../img/logop.png";
import { Container, StyledImage, Title } from './styled';

function ListaMedicamentos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMedications, setFilteredMedications] = useState([]);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const filtered = existingMedications.filter(
      (medication) =>
        medication.nomeMedicamento.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
        medication.nomeLaboratorio.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredMedications(filtered);
  };

  const existingMedications = JSON.parse(localStorage.getItem('medications')) || [];

  return (
    <>
      <Header />

      <div>
        <Container>
          <StyledImage src={logop} alt="logo DEVinPharmacy" />
          <Title variant="h5">Lista de medicamentos</Title>
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
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '10px', justifyContent: 'center', alignItems: 'center'}}>
          {searchTerm.length > 0 && filteredMedications.length === 0 && (
            <Typography variant="body1">Nenhum medicamento encontrado.</Typography>
          )}
          {searchTerm.length === 0 && existingMedications.length === 0 && (
            <Typography variant="body1">Nenhum medicamento cadastrado.</Typography>
          )}
          {searchTerm.length === 0 &&
            existingMedications.length > 0 &&
            existingMedications.map((medication) => (
              <MedicamentoCard key={medication.ean} medication={medication} />
            ))}
          {searchTerm.length > 0 &&
            filteredMedications.length > 0 &&
            filteredMedications.map((medication) => (
              <MedicamentoCard key={medication.ean} medication={medication} />
            ))}
        </div>
      </div>
    </>
  );
}

export { ListaMedicamentos };

