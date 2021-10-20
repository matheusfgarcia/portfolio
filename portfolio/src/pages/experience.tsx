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
`;


export const PageExperience = () => {
  return (
    <Page>
      <ul>
        <Block>
          <div>
            <Image src="./td.jpeg" />
          </div>
          <div>
            <Title className="title">Tech Lead / Senior Software Engineer</Title>
            <Company className="company">Talkdesk</Company>
            <Date className="workPeriod">Feb 2020 ~ Nov 2021</Date>
          </div>
        </Block>
        <hr />
        <Block>
          <div>
            <Image src="./pk.jpeg" />
          </div>
          <div>
            <Title className="title">Team Lead / Backend Developer</Title>
            <Company className="company">Playkids</Company>
            <Date className="workPeriod">Apr 2015 ~ Dec 2020</Date>
          </div>
        </Block>
        <hr />
        <Block>
          <div>
            <Image src="./spider.jpeg" />
          </div>
          <div>
            <Title className="title">Fullstack Developer</Title>
            <Company className="company">Spider.ad</Company>
            <Date className="workPeriod">May 2012 ~ Feb 2015</Date>
          </div>
        </Block>
        <hr />
        <Block>
          <div>
            <Image src="./monqi.jpeg" />
          </div>
          <div>
            <Title className="title">Fullstack Developer</Title>
            <Company className="company">MonQi</Company>
            <Date className="workPeriod">Sep 2011 ~ Dec 2012</Date>
          </div>
        </Block>
      </ul>
    </Page>  
  )
}