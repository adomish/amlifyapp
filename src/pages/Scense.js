import { useTexture, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const name = (type) => `images/Chip003_1K_${type}.jpg`;

function Sphere() {
  const [
    colorMap,
    displacement,
    metalness,
    normal,
    roughness
  ] = useTexture([
    name('Color'),
    name('Displacement'),
    name('Metalness'),
    name('Normal'),
    name('Roughness')
  ]);

  return (
    <>
      {/* オブジェクトを均等に照らす光 Options:color, intensity */}
      <ambientLight intensity={0.2} />
      {/* 太陽的な光 */}
      <directionalLight />
      <mesh>
        {/* 丸のジオメトリーの作成 */}
        <sphereBufferGeometry args={[1, 100, 100]} />
        {/* 画像の配置 */}
        <meshStandardMaterial 
          displacementScale={0.2}
          map={colorMap}
          displacementMap={displacement}
          normalMap={normal}
          roughnessMap={roughness}
          metalnessMap={metalness}
        />
      </mesh>
    </>
  )
}

export default function Scence() {
  return (
    <div className='App'>
      <Canvas>
        {/* 待機中に何か表示できる */}
        <Suspense fallback={null}>
          <Sphere />
          {/* オブジェクトのコントロール */}
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
