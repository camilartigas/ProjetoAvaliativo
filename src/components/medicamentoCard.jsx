import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;



function MedicamentoCard({ medication }) {
  
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Redirecionar para a página de detalhes passando a ID do medicamento
    navigate(`/detalharmedicamento/${medication.id}`);
  };

  return (
    <StyledCard onClick={handleCardClick}>
      <CardContent>
        <Typography variant="h6">{medication.nomeMedicamento}</Typography>
        <Typography variant="body1">
          Laboratório: {medication.nomeLaboratorio}
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', padding: '0px' }}>
         <Typography variant="body1">Dosagem: {medication.dosagem}</Typography> 
         <Typography variant="body1">{medication.medida}</Typography>
        </div>
        
        <Typography variant="body1">Tipo: {medication.tipo}</Typography>
      </CardContent>
      
    </StyledCard>
  );
}


export { MedicamentoCard };
