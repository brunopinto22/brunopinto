import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function Head(props) {
  const { nodes, materials } = useGLTF("public/head.glb");

  const [rotation, setRotation] = useState(3);
  useEffect(() => {
    const interval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 0.01);
    }, 16);

    return () => clearInterval(interval);
  }, [rotation]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["appstorageapprawf3479520-7389-11ec-873d-5fe6ac4d76fesmk55"].geometry}
        material={materials.material_0}
        position={[0, 1, 0]}
        rotation={[0, rotation, 0]}
        scale={1.2}
      >
      </mesh>
    </group>
  );
}

function Avatar(props) {
  return (
    <Canvas frameloop="demand" camera={{ position: [100, 5, -5], fov: 4.8 }}>

      <Head />

      <group position={[-1, 1, -1]}>
      <ambientLight
        intensity={0.2}
        color={0xffffff}
      />
      <hemisphereLight
        intensity={2}
        color={0xffffff}
        groundColor={0x7a4900}
      />
      </group>

    </Canvas>
  )
}

export default Avatar;
