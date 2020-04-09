import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { font } from '../res/fonts';

const Select = styled.select`
  width: 7rem;
  height: 3rem;
  background: white;
  box-shadow: 10px 10px 13px -2px rgba(0,0,0,0.29);
  color: gray;
  border-radius: 10px;
  padding-left: 0.3rem;
  font-size: 0.9rem;
  font-family: ${props => props.font.primary};
  border: none;
  margin: 2rem;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 1.2rem;
    padding: 0px 2px 1px;
  }
`;

const Dropdown = () => {
  const { assendingForDeaths, descendingForDeaths } = useContext(GlobalContext)

  const handleSelectChange = e => {
    if (e.target.value === "descending") {
      descendingForDeaths();
    } else {
      assendingForDeaths();
    }

  }
  return (
    <Select
      onChange={handleSelectChange}
      font={font}
    >
      <option value="descending">Descending</option>
      <option value="ascending">Ascending</option>
    </Select>
  )
}

export default Dropdown;