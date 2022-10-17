import styled from "vue-styled-components";

const appProps = { scale: Number };
export const Title = styled('h1', appProps)`
  background: #2ca2b9;
  color: white;
  font-size: ${props => props.scale * 40}px;
  padding: 4px;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  margin: 10px 0;
`;

export const Warning = styled('h1', appProps)`
  color: #3b5974;
  font-size: ${props => props.scale * 16}px;
`;

export const sessionTitle = styled('div', appProps)`
  font-size: ${props => props.scale * 24}px;
  color: #2079a9;
  font-family: Hind Madurai Bold;
  width: 100%;
`;

export const UploadButton = styled('button', appProps)`
    background: #2a79a9;
    color: white;
    border: none;
    padding: 10px 16px;
    margin: 0 10px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    font-size: ${props => props.scale * 24}px;
    font-family: Hind Madurai Light;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const QuestionTitle = styled('div', appProps)`
    width: auto;
    color: #2079a9;
    font-size: ${props => props.scale * 24}px;
    padding: 2px 0;
    font-family: Hind Madurai Medium;
`

export const QuestionInstruction = styled('div', appProps)`
    font-size: ${props => props.scale * 16}px;
    color: #00325c;
    padding: 4px 10px;
`
export const QuestionDescription = styled('div', appProps)`
  font-size: ${props => props.scale * 20}px;
    color: #00325c;
    padding: 4px 10px;
    display: flex;
    line-height: 30px;
`

export const ApplyButton = styled('button', appProps)`
    background: #2ca2b9;
    color: white;
    border: none;
    padding: 4px 30px;
    display: flex;
    justify-content: center;
    margin: 0 10px;
    border-radius: 3rem;
    font-size: ${props => props.scale * 24}px;
`

export const BackButton = styled('button', appProps)`
    background: white;
    color: #2ca2b9;
    border: 3px solid #2ca2b9;
    padding: 4px 30px;
    display: flex;
    justify-content: center;
    margin: 0 10px;
    border-radius: 3rem;
    font-size: ${props => props.scale * 24}px;
    `