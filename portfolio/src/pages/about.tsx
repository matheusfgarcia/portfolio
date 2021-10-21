import styled from 'styled-components'


const Block = styled.li`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }
  
  span {
    display:block;
    margin: 0 15px;
  }

  div {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
  }
`;

const Page = styled.section`
  text-align: center;

  p {
    margin: 5px 0;
  }
`;

const Image = styled.img<{src: string;}>`
  width:45px;
  height:45px;
`;

export const PageAbout = () => {
  return (
    <Page>
      <p>I'm Matheus Garcia, Brazilian living in Portugal.</p>
      <p>I work with web development since 2011.</p>
      <p>I'm passionate to solve problems, and make others life better.</p>
      <Block>
          <a href="https://medium.com/@matheus.mfgarcia"><Image src="./medium.png" /> <span>Medium</span></a>
          <a href="https://github.com/matheusfgarcia"><Image src="./github.png" /> <span>Github</span></a>
          <a href="https://www.linkedin.com/in/matheusgarcia/"><Image src="./linkedin.png" /> <span>LinkedIn</span></a>
      </Block>
    </Page>  
  )
}