import { Link } from "react-router-dom";
import styled from "styled-components";

export const FieldFormDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  div {
    background-color: white;
    width: 90%;
    max-width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 45px 20px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }

  form {
    width: 94%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  button {
    width: 100%;
    background: #29b6f6;
    margin-top: 20px;
  }

  h1 {
    font-weight: 700;
    font-size: 20px;
  }

  p {
    font-size: 45px;
    padding: 10px;
    margin: 15px 0;
  }

  span {
    margin-bottom: 20px;
    text-align: center;
  }

  label {
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-bottom: 7px;
  }

  .register-here {
    width: 94%;
    margin-top: 18px;
    margin-bottom: -7px;
    font-size: 0.75rem;
    text-align: right;
    padding-right: 3px;
  }

  .register-here > a {
    color: #29b6f6;
  }

  .errors {
    font-size: 0.75rem;
    padding: 0;
    margin: -7px 0 0 0;
    color: #f62958;
  }
`;

export const StyledLink = styled(Link)`
  align-self: flex-start;
  text-decoration: none;
  font-size: 22px;
  padding: 10px;
  margin-top: -33px;
`;
