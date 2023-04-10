import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const PageNavigation = ({title}) => {
  return <Wrapper>
    <Link to="/">Home</Link>/{title}
  </Wrapper>
}

const Wrapper = styled.section`
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;
  a {
    font-size: 3.2rem;
  }
`;

export default PageNavigation;