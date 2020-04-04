import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';

const Select = styled.select`
  width: 6rem;
  height: 2.1rem;
  background: white;
  color: gray;
  padding-left: 0.3rem;
  font-size: 0.8rem;
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
    console.log(e.target.value)
    if (e.target.value === "descending") {
      descendingForDeaths();
    } else {
      assendingForDeaths();
    }

  }
  return (
    <Select
      onChange={handleSelectChange}
    >
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </Select>
  )
}

export default Dropdown;