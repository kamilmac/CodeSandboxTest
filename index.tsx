import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import './styles.css'
import { Mesh } from 'three'

function Thing() {
  const ref = React.useRef<Mesh>()
  console.log('TESTING')
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log('click')}
      onPointerOver={(e) => console.log('hover')}
      onPointerOut={(e) => console.log('unhover')}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

ReactDOM.render(
  <Canvas>
    <Thing />
  </Canvas>,
  document.getElementById('root')
)
