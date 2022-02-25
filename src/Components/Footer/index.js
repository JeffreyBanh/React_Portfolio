import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {FaGithub, FaLinkedin } from 'react-icons/fa'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './footerElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = '/' onClick = {toggleHome}>Portfolio</SocialLogo>
                        <WebsiteRights>Portfolio © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink 
                            href ="//www.github.com/JeffreyBanh" 
                            target= "_blank" 
                            aria-label = "Github"> 
                            <FaGithub /></SocialIconLink>
                            <SocialIconLink 
                            href ="/" 
                            target= "_blank" 
                            aria-label = "Linkedin"> 
                            <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer