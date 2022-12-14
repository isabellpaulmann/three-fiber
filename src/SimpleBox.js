import styled from 'styled-components'
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function SimpleBox() {
    return (
        <StyledCanvas>
         <Canvas camera={{ position: [5, 2, 2] }}>
          <Stars
          radius={130}
          depth={90}
          count={8000}
          factor={3}
                    />
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
background: #111;
`