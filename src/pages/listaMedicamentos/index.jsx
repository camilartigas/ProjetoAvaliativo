import React, { useState } from 'react';
import { Header } from '../../components/header';
import { MedicamentoCard } from '../../components/medicamentoCard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import logop from "../../img/logop.png";


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
        <Box sx={{ p: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: '10%' }}>
            <img src={logop} alt="logo DEVinPharmacy" style={{ width: '100%' }} />
          </div>
          <div style={{ marginTop: '1px', fontSize: '20px', fontFamily: 'inter', color: '#00153c' }}>
            <span>Lista de Medicamentos</span>
          </div>
          </Box>
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '10px' }}>
          {searchTerm.length > 0 && filteredMedications.length === 0 && (
            <Typography variant="body1">Nenhum medicamento encontrado.</Typography>
          )}
           {searchTerm.length === 0 && existingMedications.length === 0 && (
            <Typography variant="body1">Nenhum medicamento cadastrado.</Typography>
          )}
          {searchTerm.length === 0 &&
            existingMedications.length > 0 &&
            existingMedications.map((medication) => (
              <MedicamentoCard key={medication.nomeMedicamento} medication={medication}
              />
            ))}
          {searchTerm.length > 0 &&
            filteredMedications.length > 0 &&
            filteredMedications.map((medication) => (
              <MedicamentoCard key={medication.nomeMedicamento} medication={medication} />
              ))}
          </div>
        </div>
      </>
    );
  }
  
  export { ListaMedicamentos };
