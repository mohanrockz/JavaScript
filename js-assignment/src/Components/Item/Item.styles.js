import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  background-color:#f1f3f6;

  button {
    border-radius: 0 0 20px 20px;
    background-color: #ff9f00;
    font-family: Arial,sans-serif;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -.2px;
    // font-family:Roboto,Arial,sans-serif;


  }
  button:hover{
    opacity:110%;
    background-color:#fb641b;
  }

  img {
    margin: 10px;
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    // border:1px solid black;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;