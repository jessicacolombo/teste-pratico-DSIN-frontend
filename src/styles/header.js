import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: white;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow);

  .header-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 1000px;
  }

  button {
    background: #29b6f6;
    width: 85px;
  }

  .buttons-container {
    display: flex;
    gap: 20px;
  }
`;
