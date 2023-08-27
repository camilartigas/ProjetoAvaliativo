import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const StyledImage = styled('img')`
  max-width: 100%;
  height: auto;
  width: 10%;
`;

export const Title = styled(Typography)`
  font-size: 1.5rem;
  margin-top: 16px;
`;
