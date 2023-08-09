import { Typography, Container } from "@mui/material";
import { styled } from "@mui/system";

interface SectionProps{
    h1: string,
    p: string,
    children?:React.ReactNode;
}


const SectionContainer = styled(Container)({
})

const H1Typography = styled(Typography)({
    fontSize:'38px',
    padding: '.625rem',
    textAlign: 'center',
})

const PTypography = styled(Typography)({
    padding: '.625rem',
    textAlign: 'justify',
})

export default function Section({h1, p, children}:SectionProps): JSX.Element {
    return (
        <>
        <section>
            <SectionContainer>
                <H1Typography variant="h1">{h1}</H1Typography>
                <PTypography variant="body1">{p}</PTypography>
                <PTypography variant="body1">
                {children}
                </PTypography>
            </SectionContainer>
        </section>
        </>
    )
}