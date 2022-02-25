import React from 'react'
import {ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP} from './projectElements';
import Icon1 from '../../images/Allergy-Finder.PNG';
import Icon2 from '../../images/Travel-Agent.png';
import Icon3 from '../../images/Self-Service.jpg';
import Icon4 from '../../images/Threading.jpg';
import Icon5 from '../../images/Mailbox.jpg';
import Icon6 from '../../images/Sword_Shield.png';

const Projects = () => {
    return (
        <ProjectsContainer id="project">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard 
                href = "//www.github.com/JeffreyBanh/Allergy-Finder" 
                target= "_blank" 
                >
                    <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Allergy Finder</ProjectsH2>
                    <ProjectsP></ProjectsP>
                </ProjectsCard>
                <ProjectsCard
                href = "//www.github.com/JeffreyBanh/travel-agent" 
                target= "_blank" 
                >
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Travel Agent</ProjectsH2>
                    <ProjectsP></ProjectsP>
                </ProjectsCard>
                <ProjectsCard
                href = "//www.github.com/JeffreyBanh/personal-projects" 
                target= "_blank" 
                >
                    <ProjectsIcon src={Icon3} />
                    <ProjectsH2>Self-service Tool Geographical and Population Data Set</ProjectsH2>
                    <ProjectsP></ProjectsP>
                </ProjectsCard>
                <ProjectsCard
                href = "//www.github.com/JeffreyBanh/personal-projects" 
                target= "_blank" 
                >
                    <ProjectsIcon src={Icon4} />
                    <ProjectsH2>Threading Project</ProjectsH2>
                    <ProjectsP></ProjectsP>
                </ProjectsCard>
                <ProjectsCard
                href = "//www.github.com/JeffreyBanh/personal-projects" 
                target= "_blank" 
                >
                    <ProjectsIcon src={Icon5} />
                    <ProjectsH2>MailBox</ProjectsH2>
                    <ProjectsP></ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon6} />
                    <ProjectsH2>Pokedex Go</ProjectsH2>
                    <ProjectsP></ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects