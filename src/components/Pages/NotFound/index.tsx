import { styled } from "@mui/system";import { Box, Typography } from "@mui/material";

const BoxStyle = styled(Box)({
 height: '75vh',
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
})

export default function NotFound(){
    return (
        <>
        <BoxStyle>
            <Typography variant="h3">Erro 404 - página não encontrada</Typography>
        </BoxStyle>
        </>
    )
}