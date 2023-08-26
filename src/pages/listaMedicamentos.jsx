import React, { useState } from 'react';
import { Header } from '../components/header';
import { MedicamentoCard } from '../components/medicamentoCard'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
        <Box sx={{ p: 3 }}>
          <TextField
            label="Buscar medicamento"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Box>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
          {/* Renderizar os cards dos medicamentos */}
          {searchTerm.length > 0 && filteredMedications.length === 0 && (
            <Typography variant="body1">Nenhum medicamento encontrado.</Typography>
          )}
          {searchTerm.length === 0 && existingMedications.length === 0 && (
            <Typography variant="body1">Nenhum medicamento cadastrado.</Typography>
          )}
          {searchTerm.length === 0 &&
            existingMedications.length > 0 &&
            existingMedications.map((medication) => (
              <MedicamentoCard key={medication.nomeMedicamento} medication={medication} />
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
