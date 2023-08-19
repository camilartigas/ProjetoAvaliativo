import styled from 'styled-components';

export const CadastroFarmaciaStyled = styled.div`
      width: 100%;
      height: 100%;
      
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 8px;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 20px;

        form{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        input{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 8px;
        }

        label{
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
        }

        input{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 16px;
            width: 520px;
            height: 10px;
            border: 1px solid #00153c;
            border-radius: 15px;
        }

        a{
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            padding: 10px;
            padding-bottom: 20px;
            color: #00153c;
        }

        button{
            width: 520px;
            height: 56px;
            background: #00153c;
            border-radius: 15px;
            color: #FFFFFF;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            border: none;
            margin-top: 8px;
        }
`

export const HeadStyled = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        
        img{
            width: 40%;
            height: 40%;
            padding: 10px;
        }

`
