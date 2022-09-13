import SimpleBox from './SimpleBox';
import MovingBox from './MovingBox';
import styled from 'styled-components';
import {keyframes} from 'styled-components'

function App() {

  return (
    <>
    <SimpleBox/>
    <StyledBoxContainer>
          <MovingBox/><p>Move me on click !</p><MovingBox/>
      </StyledBoxContainer>
    </>
  );
}
export default App;

const fadeIn = keyframes`
from {opacity:0
}
to { opacity:1; }
`

const StyledBoxContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;

p {
  color: white;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  animation: ${fadeIn} 3s;
  }`

