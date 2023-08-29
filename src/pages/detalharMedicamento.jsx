import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function DetalharMedicamento() {
  const { id } = useParams();
  const [medication, setMedication] = useState(null);

  useEffect(() => {
    const medications = JSON.parse(localStorage.getItem('medications')) || [];
    const medicamentoDesejado = medications.find((med) => med.id === id);
    
    if (medicamentoDesejado) {
      setMedication(medicamentoDesejado);
    }
  }, [id]);

  if (!medication) {
    return (
      <div>
        <h1>Medicamento não encontrado.</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 64px)">
        <Card variant="outlined" style={{ width: '50%', borderWidth: '2px', borderColor: '#00153c', borderRadius: '15px', padding: '20px' }}>
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              Detalhes do Medicamento
            </Typography>
            <Typography variant="body1" gutterBottom>
              Nome: {medication.nomeMedicamento}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Laboratório: {medication.nomeLaboratorio}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Dosagem: {medication.dosagem} {medication.medida}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Preço: {medication.preco}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Tipo: {medication.tipo}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Descrição: {medication.descricao}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export { DetalharMedicamento };

