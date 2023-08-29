import { styled } from "@mui/system";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)`
  border: 1px solid #00153c;
  border-radius: 15px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    borderColor: '#046d8b';
  }
`;

