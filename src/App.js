import { Canvas } from '@react-three/fiber';
import styled from 'styled-components'
import SimpleBox from './SimpleBox';

function App() {

  return (
    <SimpleBox/>
  );
}

const StyledCanvas = styled.div`
height: 400px;
`

export default App;
