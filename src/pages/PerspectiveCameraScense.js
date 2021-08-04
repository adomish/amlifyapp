import { Environment, OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Main from "./Style";

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/assets/Avocado.gltf');
  console.log(nodes);
  console.log(materials);

  return (
    <group ref={group} {...props} dispose={null} scale={10}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Avocado.geometry}
        material={materials['2256_Avocado_d']}
        position={[4, -0.3, -3]}
        scale={30}
      />
    </group>
  )
} 

useGLTF.preload('/assets/Avocado.gltf');

export default function PrespectiveCameraScense() {
  return (
    <Main>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <Model />
          <OrbitControls />
          <Environment preset='sunset' background />
        </Suspense>
      </Canvas>
    </Main>
  )
}
