import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';

export default function MovingBox() {
    return (
        <StyledCanvas>
         <Canvas camera={{ position: [2, 2, 4] }}>
          <pointLight position={[3, 3, 2]} intensity={1} color='white' />
          <ambientLight />
          <OrbitControls/>
          <mesh>
            <boxBufferGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color='#e12' />
          </mesh>
        </Canvas>
        </StyledCanvas>
      );
}
   

const StyledCanvas = styled.div`
height: 300px;
`