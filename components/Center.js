import styled from "styled-components"

const StyledDiv = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;

export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  )
}
