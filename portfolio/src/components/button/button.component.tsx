import { useRef, useLayoutEffect, useState } from 'react';
import styled from 'styled-components'

const ButtonStyled = styled.button<{className: string; onClick: ()=> void}>`
      background: white;
      color: palevioletred;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
      transition: 0.4s;
      cursor: pointer;

      &:hover {
        background: palevioletred;
        color: white;
      }

    @media only screen and (max-width: 1024px) {
      display: block;
      margin: 10px auto;
    }

    `;

export const ButtonComponent = ({
  className,
  value,
  page,
  flipCard,
  activePage
}: {className?: string; value: string; page: string; flipCard: any; activePage: any}) => {

  const [isFlipped, setFlipped] = useState<Boolean>(flipCard);
  const toggleClass = () => {
    setFlipped(!isFlipped); 
  };

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (!firstUpdate.current) {
      activePage(page)
      flipCard(flipCard)
    }

    firstUpdate.current = false;
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isFlipped])
    

  return (
    <ButtonStyled className={isFlipped ? "active "+className : "inactive "+className} onClick={toggleClass}>
      {value}
    </ButtonStyled>
  )

}