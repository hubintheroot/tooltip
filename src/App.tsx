import { useState } from 'react';
import './App.css';
import Tooltip from './components/tooltip';
import styled from 'styled-components';

const Box = styled.section`
  position: relative;
  width: 10vw;
  height: 10vh;
`;
const Container = styled.div`
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 10rem;
`;
const TestBtn = styled.button`
  background-color: #1aab8a;
  width: fit-content;
  border-radius: 4px;
  background: var(--bc);
  color: #fff;
  border: none;
  position: relative;
  font-size: 15px;
  padding: 2px 0;
  margin: 2px 2px;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
`
const Div = styled.div`
  font-size: 1rem;
`

function App() {
  const [disabled, setDisabled] = useState<boolean>(false)

  const handleDisable = () => {
    setDisabled(!disabled);
  }


  const testTooltip = <Div><p>tooltip Test</p><p>tooltip Test</p><p>tooltip Test</p></Div>
  const testCSS = {backgroundColor: 'lightskyblue'};
  return (
    <div className="App">
      <header className="App-header" style={{flexDirection: 'row', gap: '5rem', flexWrap:'wrap'}}>
          {/* top */}
          <Box>
            <Tooltip content={testTooltip} direction='topLeft'>
              <Container>
                <TestBtn>TopLeft</TestBtn>
              </Container>
            </Tooltip>
            <Tooltip content={testTooltip}>
              <Container>
                <TestBtn>Top</TestBtn>
              </Container>
            </Tooltip>
            <Tooltip content={testTooltip} direction='topRight'>
              <Container>
                <TestBtn>TopRight</TestBtn>
              </Container>
            </Tooltip>
          </Box>
          {/* Right */}
          <Box>
            <Tooltip content={testTooltip} direction='rightTop'>
              <Container>
                <TestBtn>RightTop</TestBtn>
              </Container>
            </Tooltip>
            <Tooltip content={testTooltip} direction='right'>
              <Container>
                <TestBtn>Right</TestBtn>
              </Container>
            </Tooltip>
            <Tooltip content={testTooltip} direction='rightBottom'>
              <Container>
                <TestBtn>RightBottom</TestBtn>
              </Container>
            </Tooltip>
          </Box>
          {/* Left */}
          <Box>
            <Tooltip content={testTooltip} direction='leftTop'>
              <Container>
                <TestBtn>LeftTop</TestBtn>
              </Container>
            </Tooltip>
            <Tooltip content={testTooltip} direction='left'>
              <Container>
                <TestBtn>Left</TestBtn>
              </Container>
            </Tooltip>
            <Tooltip content={testTooltip} direction='leftBottom'>
              <Container>
                <TestBtn>LeftBottom</TestBtn>
              </Container>
            </Tooltip>
          </Box>
          {/* Bottom */}
          <Box>
            <Tooltip content={testTooltip} direction='bottomLeft'>
              <Container>
                <TestBtn>BottomLeft</TestBtn>
              </Container>
            </Tooltip>
            <Tooltip content={testTooltip} direction='bottom'>
              <Container>
                <TestBtn>Bottom</TestBtn>
              </Container>
            </Tooltip>
            <Tooltip content={testTooltip} direction='bottomRight'>
              <Container>
                <TestBtn>BottomRight</TestBtn>
              </Container>
            </Tooltip>
          </Box>
          {/* disable tooltip */}
          <Box>
            <Tooltip content={testTooltip} disabled={disabled}>
              <Container>
                <TestBtn onClick={handleDisable}>disable tooltip</TestBtn>
              </Container>
            </Tooltip>
          </Box>
          {/* Delay */}
          <Box>
            <Tooltip content={testTooltip} delay={1} direction='leftBottom'>
              <Container>
                <TestBtn>enter-delay 1s</TestBtn>
              </Container>
            </Tooltip>
            <Tooltip content={testTooltip} delay={-1} direction='rightTop'>
              <Container>
                <TestBtn>leave-delay 1s</TestBtn>
              </Container>
            </Tooltip>
          </Box>
          {/* Custom */}
          <Box>
            <Tooltip content={testTooltip} customStyle={{backgroundColor:'lightskyblue'}}>
              <Container style={{backgroundColor:'lightskyblue', border:'none'}}>
                <TestBtn>lightSkyBlue</TestBtn>
              </Container>
            </Tooltip>
            <Tooltip content={testTooltip} customStyle={{backgroundColor:'pink'}}>
              <Container style={{backgroundColor:'pink', border:'none'}}>
                <TestBtn>pink</TestBtn>
              </Container>
            </Tooltip>
          </Box>
      </header>
    </div>
  );
}

export default App;
