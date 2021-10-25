import styled from 'styled-components'


const Title = styled.span<{className: string;}>`
  display: block;
`;


const Company = styled.span<{className: string;}>`
  display: block;
  font-size: 10px;
`;


const Date = styled.span<{className: string;}>`
  display: block;
  font-size: 9px;
  color: #919191;
`;

const Block = styled.li`
  display: flex;

  div {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    div {
      margin: 10px 0;
    }
  }
`;

const Image = styled.img<{src: string;}>`
  width:45px;
`;


const Page = styled.section`
  text-align: left;

  hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }


  @media only screen and (max-width: 1024px) {
    ul {
      margin: 0;
      padding: 0;
    }
  }
`;

const ExperienceBlock = ({image, title, company, date}: {image: string, title: string, company: string, date: string}) => {
  return (
    <Block>
      <div>
        <Image src={image} />
      </div>
      <div>
        <Title className="title">{title}</Title>
        <Company className="company">{company}</Company>
        <Date className="workPeriod">{date}</Date>
      </div>
    </Block>
  )
}


export const PageExperience = () => {
  return (
    <Page>
      <ul>
        <ExperienceBlock image="./images/td.jpeg" title="Tech Lead / Senior Software Engineer" company="Talkdesk" date="Feb 2020 ~ Nov 2021"/>
        <hr />
        <ExperienceBlock image="./images/pk.jpeg" title="Team Lead / Backend Developer" company="Playkids" date="Apr 2015 ~ Dec 2020"/>
        <hr />
        <ExperienceBlock image="./images/spider.jpeg" title="Fullstack Developer" company="Spider.ad" date="May 2012 ~ Feb 2015"/>
        <hr />
        <ExperienceBlock image="./images/monqi.jpeg" title="Fullstack Developer" company="MonQi" date="Sep 2011 ~ Dec 2012"/>
      </ul>
    </Page>  
  )
}