import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

interface HeaderPrps{
    src:string;
    alt?:string;
    span?:string;
    children?:React.ReactNode;
}

const HeaderBox = styled(Box)({
    width: '100%', 
    minWidth: 500, 
    height: '100px', 
    background: '#6e1567',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
})

const MenuBox = styled(Box)({
    textAlign:'end',
    display: 'flex',
    gap: '2rem',
    justifyContent: 'end',
    fontSize: '1.2rem',
})

const ImgBox = styled(Box)({
    width: '70px',
    color: 'white'
})

export default function Header({src, alt, span, children}: HeaderPrps): JSX.Element{
    return (
        <header>
            <HeaderBox >
                <ImgBox>
                    <img src={src} alt={alt} />
                </ImgBox>
                <Typography variant="body1">
                    {span}
                </Typography>
                <MenuBox >
                    {children}
                </MenuBox>
            </HeaderBox>
        </header>
    )
}