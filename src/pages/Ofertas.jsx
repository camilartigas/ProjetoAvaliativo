import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Ofertas() {
  const [medications, setMedications] = useState([]);
  
  useEffect(() => {
    const existingMedications = JSON.parse(localStorage.getItem('medications')) || [];
    setMedications(existingMedications);
  }, []);
  
  const handlePriceChange = (medicationName, newPrice) => {
    const updatedMedications = medications.map((medication) => {
      if (medication.nomeMedicamento === medicationName) {
        return { ...medication, preco: newPrice };
      }
      return medication;
    });

    setMedications(updatedMedications);
    localStorage.setItem('medications', JSON.stringify(updatedMedications));
  };

  return (
    <>
      <Header />
      <div>
        <Box sx={{ p: 3 }}>
          <Typography variant="h5">Cadastro de Ofertas</Typography>
        </Box>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
          {medications.map((medication) => (
            <div key={medication.nomeMedicamento}>
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
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { Ofertas };
