/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: BlenderMonke (https://sketchfab.com/sebasronn)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shortsword-83448a37970b41729c63f07aa28303c1
Title: ShortSword
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function SwordModel(props) {
  const { nodes, materials } = useGLTF('/models/Sword-transformed.glb');

  const modelRef = useRef();

  useFrame(() => {
   modelRef.current.rotation.y += 0.007
  })


  return (
    <group {...props} dispose={null} 
    position={[0.65,0,0]}
    scale={[1.2,1.2,1.2]}
    rotation={[0,0,0]}
    ref={modelRef}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sword_Material002_0.geometry}
        material={materials['Material.002']}
        position={[-0.028, 1.914, 0]}
        rotation={[Math.PI / 2, 0.015, 0]}
        scale={0.581}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sword_Material005_0.geometry}
        material={materials['Material.005']}
        position={[-0.028, 1.914, 0]}
        rotation={[Math.PI / 2, 0.015, 0]}
        scale={0.581}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sword_Material004_0.geometry}
        material={materials['Material.004']}
        position={[-0.028, 1.914, 0]}
        rotation={[Math.PI / 2, 0.015, 0]}
        scale={0.581}
      />
    </group>
  )
}

useGLTF.preload('/models/Sword-transformed.glb')