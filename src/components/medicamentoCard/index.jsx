import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { StyledCard } from './styled';


function MedicamentoCard({ medication }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detalharmedicamento/${medication.id}`);
  };

  return (
    <StyledCard onClick={handleCardClick}>
      <CardContent>
        <Typography variant="h6">{medication.nomeMedicamento}</Typography>
        <Typography variant="body1">
          Laboratório: {medication.nomeLaboratorio}
        </Typography>
        <Typography variant="body1">EAN: {medication.id}</Typography> 
        <Typography variant="body1">Dosagem: {medication.dosagem}</Typography>
        <Typography variant="body1">{medication.medida}</Typography>
        <Typography variant="body1">Preço: {medication.preco}</Typography>
        <Typography variant="body1">Tipo: {medication.tipo}</Typography>
      </CardContent>
    </StyledCard>
  );
}

export { MedicamentoCard };
