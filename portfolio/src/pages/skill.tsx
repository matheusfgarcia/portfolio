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

  div {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
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

export const PageSkill = () => {
  return (
    <Page>
      <ul>
        <Section>
          <Title>BackEnd</Title>
          <div>
            <Block>
              <Image src="./php.png" /> PHP
            </Block>
            <Block>
              <Image src="./kotlin.jpeg" /> Kotlin
            </Block>
            <Block>
              <Image src="./ruby.png" /> Ruby
            </Block>
            <Block>
              <Image src="./node.png" /> 
              <span>Node</span>
            </Block>
          </div>
        </Section>
        <hr/>
        <Section>
          <Title>FrontEnd</Title>
          <div>
            <Block>
              <Image src="./js.png" /> Javascript
            </Block>
            <Block>
              <Image src="./react.png" /> React
            </Block>
            <Block>
              <Image src="./sass.png" /> Sass
            </Block>
          </div>
        </Section>
        <hr/>
        <Section>
          <Title>Storage</Title>
          <div>
            <Block>
              <Image src="./mysql.png" /> MySQL
            </Block>
            <Block>
              <Image src="./postgres.png" /> PostgreSQL
            </Block>
            <Block>
              <Image src="./mongo.png" /> MongoDB
            </Block>
            <Block>
              <Image src="./rabbitmq.png" /> RabbitMQ
            </Block>
            <Block>
              <Image src="./kafka.png" /> Kafka
            </Block>
          </div>
        </Section>
        <hr/>
        <Section>
          <Title>Other</Title>
          <div>
            <Block>
              <Image src="./github.png" /> GitHub
            </Block>
            <Block>
              <Image src="./aws.png" /> AWS
            </Block>
          </div>
        </Section>
      </ul>
    </Page>  
  )
}