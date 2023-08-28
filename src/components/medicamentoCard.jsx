import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  border: 1px solid #00153c;
  border-radius: 15px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    borderColor: '#046d8b';
  }
`;

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
