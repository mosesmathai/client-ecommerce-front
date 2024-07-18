import styled from "styled-components"

const StyledTable = styled.table`
  width: 100%;
  background: white;
  border-collapse: collapse;

  thead {
    background-color: black;
    text-align: left;
    text-transform: uppercase;
    color: white; 
  }
  td {
    border: 1px solid #ccc;
    color: black;
    padding: 10px 0 10px 10px;
  }

`; 

export default function Table({children}) {
  return <StyledTable>{children}</StyledTable>
}
