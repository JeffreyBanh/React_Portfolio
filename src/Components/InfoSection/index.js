import React from 'react';
import {Button, Button2} from '../ButtonElements';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, 
    TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';

const InfoSection = (
    
    {lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2}
    ) => {

    return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button2
                                href = 'https://docs.google.com/document/d/e/2PACX-1vSemMLBOrXxZcbz0fptxGRH0fFRulPur4d_KU1FPUcuE8dh7SJ7ddBwVVpsLvrxNA/pub'
                                //to = 'home'
                                target= "_blank" 
                                smooth = {true}
                                duration = {500}
                                spy = {true}
                                exact = "true"
                                offset = {-80}
                                primary = {primary ? 1 : 0}   
                                dark = {dark ? 1: 0}
                                dark2 = {dark2 ? 1:0}
                                >{buttonLabel}</Button2>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
    );
};

export default InfoSection
