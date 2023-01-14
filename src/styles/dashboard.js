import styled from "styled-components";

export const BackgroundDash = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .schedules-container {
    width: 90%;
    max-width: 1000px;
    height: 70vh;
    background-color: white;
    border-radius: var(--border-radius);
    margin: 50px auto;
    box-shadow: var(--box-shadow);
    padding: 30px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .schedules-container::-webkit-scrollbar {
    display: none;
  }

  .schedules-container ul {
    height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .no-content {
    display: flex;
    width: 30%;
    flex-direction: column;
    gap: 12px;
  }

  .no-content > p {
    line-height: 25px;
    font-size: 1.1rem;
  }

  .no-content > span {
    font-size: 90px;
  }
`;
