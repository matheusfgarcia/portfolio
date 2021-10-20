import styled from 'styled-components'
import { ButtonPage as Button } from '../button'
import ProfilePicture from '../profilePicture'
import { PageAbout } from '../../pages/about'
import { PageSkill } from '../../pages/skill'
import { PageExperience } from '../../pages/experience'
import { useLayoutEffect, useRef, useState } from 'react'

const CardStyled = styled.section<{className: string;}>`
  width: 35em;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .back {
    button {
      width: 20px;
      text-align: center;
      padding: 0;
      border: 0;
      position: absolute;
      top: 0;
      left: 1em;
    }
  }
`;


export const CardComponent = ( { getCardState, getActivePage, flipCard } : {  getCardState: any, getActivePage: any, flipCard: any } )=> {

  let activeCard = '';
  if (getCardState) {
    activeCard += ' active';
  }

  const sizing = {
    height: '120px'
  };

  
  const [activePage, setActivePage] = useState<any>(null);


  function renderPage(activePage: string){
    switch(activePage) {
      case "skill":
        return <PageSkill />
      case "experience":
        return <PageExperience />
      case "about":
        return <PageAbout />
    }
  }

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (!firstUpdate.current) {

      if(getActivePage == "null") {

        flipCard(false)

      } else { 

        setActivePage(renderPage(getActivePage))
      }

    }

    firstUpdate.current = false;
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[getActivePage])
    

  return (
    <CardStyled className={"card" + activeCard} style={sizing}>
      <div className="front">
          <div className="wrapper">
            <div className="wrapper-item">
              <ProfilePicture />
            </div>
            <div className="wrapper-item">
              My name is Matheus Garcia.<br/>
              I'm a <b>Senior Software Engineer</b> and a <b>game lover</b>.
              <br /><br />
              <Button className="flip" value="Work Experience" page="experience"/>
              <Button className="flip" value="Skills" page="skill" />
              <Button className="flip" value="About" page="about" />
            </div>
          </div>
        </div>
        <div className="back">
          {activePage}

          <Button className="flip" value="<" page="null"/>
        </div>
    </CardStyled>
  )

}