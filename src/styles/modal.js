import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  width: 90%;
  max-width: 350px;
  background-color: white;
  z-index: 10;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 50%);
  margin-top: -75px;

  .modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px 4px 0px 0px;
    padding: 15px 20px;
  }

  .modal__header > button {
    background-color: #f62958;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 0px;
    color: white;
    border: 1px solid transparent;
  }

  form {
    padding: 25px 20px 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 0.9rem;
    gap: 10px;
  }

  form > button {
    margin-top: 10px;
    background-color: #29b6f6;
  }

  label {
    display: flex;
    flex-direction: column;
  }
`;
