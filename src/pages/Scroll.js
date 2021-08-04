import { Environment, OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Main from "./Style";

function Model() {
  const group = useRef();
  const jpg = useTexture('images/IMG_3072.jpg');

  return (
    <>
      <ambientLight intensity={0.5} />
        <group ref={group} dispose={null} >
          <mesh position={[0, 0, -1000]}>
            <planeBufferGeometry args={[350, 350, 350]} />
            <meshPhongMaterial map={jpg} />
          </mesh>
        </group>
    </>
  )
}

export default function Scroll() {
  return (
    <Main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, -20]} />
          <Model />
          <OrbitControls />
          <Environment preset='sunset' background />
        </Canvas>
      </Suspense>
    </Main>
  )
}
