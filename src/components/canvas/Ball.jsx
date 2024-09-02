import * as THREE from 'three';  // Add this line to import THREE
import React,{ Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"

import CanvasLoader from '../Loader';

// Utility function to detect if the user is on a mobile device
const isMobile = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const Ball = (props) => { 
  const [decal] = useTexture([props.imgUrl]);


  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />  
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          />
          <Decal 
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
          />
      </mesh>
    </Float>
  )
}
const BallCanvas = ({ icon }) => {
  return(
    <Canvas 
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}  >
        <OrbitControls
        enablePan={!isMobile()} 
        enableRotate={!isMobile()} 
        enableZoom={false}  />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
    </Canvas>
  )
}

export default BallCanvas