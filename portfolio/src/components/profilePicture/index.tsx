import styled from 'styled-components'

const ProfilePicture = styled.div`
  background-image: url(./me.png);
  width: 125px;
  height: 125px;
  background-position: 189px 212px;
  border-radius: 50%;
  transition: 0.8s;


  &:hover {
    box-shadow: 0px 0px 5px 5px #e082a182;
  }

`;

export default ProfilePicture
