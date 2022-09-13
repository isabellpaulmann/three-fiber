import styled from 'styled-components'
import { Canvas } from '@react-three/fiber';

export default function SimpleBox() {
    return (
        <StyledCanvas>
         <Canvas camera={{ position: [5, 2, 2] }}>
          <pointLight position={[3, 5, 2]} intensity={4} color='white' />
          <mesh>
            <boxBufferGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={333} />
          </mesh>
        </Canvas>
        </StyledCanvas>
      );
}


const StyledCanvas = styled.div`
height: 600px;
`