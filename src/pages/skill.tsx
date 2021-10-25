import styled from 'styled-components'

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
      padding: 0;
      margin: 0;
    }
  }
`;

const Block = styled.li`
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin: 0 30px;  

  img {
    margin: 0 0 5px 0; 
  }

  @media only screen and (max-width: 1024px) {
    margin: 10px 25px 
  }
`;

const Title = styled.span<{className?: string;}>`
  width:100%;
  font-weight: 700;
  display: block;
  margin: 20px 0px;
  text-align: center;
`;

const Section = styled.section<{className?: string;}>`
  margin: 20px 0;

  div {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }

  @media only screen and (max-width: 1024px) {
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Image = styled.img<{src: string;}>`
  width:45px;
  height:45px;
`;


const SkillBlock = ( { src, text } : { src: string, text: string } ) => {
  return (
    <Block>
      <Image src={src} /> {text}
    </Block>
  )
}

export const PageSkill = () => {
  return (
    <Page>
      <ul>
        <Section>
          <Title>BackEnd</Title>
          <div>
            <SkillBlock src="./images/php.png" text="PHP"/>
            <SkillBlock src="./images/kotlin.jpeg" text="Kotlin"/>
            <SkillBlock src="./images/ruby.png" text="Ruby"/>
            <SkillBlock src="./images/node.png" text="Node"/>
          </div>
        </Section>
        <hr/>
        <Section>
          <Title>FrontEnd</Title>
          <div>
            <SkillBlock src="./images/js.png" text="Javascript"/>
            <SkillBlock src="./images/react.png" text="React"/>
            <SkillBlock src="./images/sass.png" text="Sass"/>
          </div>
        </Section>
        <hr/>
        <Section>
          <Title>Storage</Title>
          <div>

            <SkillBlock src="./images/mysql.png" text="Javascript"/>
            <SkillBlock src="./images/postgres.png" text="PostgreSQL"/>
            <SkillBlock src="./images/mongo.png" text="MongoDB"/>
            <SkillBlock src="./images/rabbitmq.png" text="RabbitMQ"/>
            <SkillBlock src="./images/kafka.png" text="Kafka"/>
          </div>
        </Section>
        <hr/>
        <Section>
          <Title>Other</Title>
          <div>
            <SkillBlock src="./images/github.png" text="GitHub"/>
            <SkillBlock src="./images/aws.png" text="AWS"/>
          </div>
        </Section>
      </ul>
    </Page>  
  )
}