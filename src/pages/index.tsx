import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useScroll,
  ScrollControls,
  Environment,
  Merged,
  Text,
  MeshReflectorMaterial,
  Html,
  Text3D,
  Box,
} from "@react-three/drei";

function Train() {
  const ref = useRef();
  const scroll = useScroll();
  const [cabin, seat] = useGLTF([
    "/cabin-transformed.glb",
    "/seat-transformed.glb",
  ]);
  const meshes = useMemo(
    // @ts-ignore
    () => ({ Cabin: cabin.nodes.cabin_1, Seat: seat.nodes.seat }),
    [cabin, seat]
  );
  // @ts-ignore
  useFrame(() => (ref.current.position.z = -scroll.offset * 120));
  // Merged creates THREE.InstancedMeshes out of the meshes you feed it
  // All in all we end up with just 5 draw-calls for the entire scene
  return (
    <Merged castShadow receiveShadow meshes={meshes}>
      {(models: any) => (
        // @ts-ignore
        <group ref={ref}>
          <Cabin
            models={models}
            color="#252525"
            seatColor="sandybrown"
            name="1A"
            position={[0, 0, 6]}
          />
          <Cabin
            models={models}
            color="#454545"
            seatColor="gray"
            name="2B"
            position={[0, 0, 32]}
          />
          <Cabin
            models={models}
            color="#252525"
            seatColor="lightskyblue"
            name="3A"
            position={[0, 0, 58]}
          />
          <Cabin
            models={models}
            color="#454545"
            seatColor="gray"
            name="4B"
            position={[0, 0, 84]}
          />
          <Cabin
            models={models}
            color="#252525"
            seatColor="sandybrown"
            name="5B"
            position={[0, 0, 110]}
          />
        </group>
      )}
    </Merged>
  );
}

interface QuarterProps {
  models: any;
  color: any;
  position?: any;
}

const Quarter: React.FC<QuarterProps> = ({ models, color, ...props }) => (
  <group {...props}>
    <models.Seat color={color} position={[-0.35, 0, 0.7]} />
    <models.Seat color={color} position={[0.35, 0, 0.7]} />
    <models.Seat
      color={color}
      position={[-0.35, 0, -0.7]}
      rotation={[0, Math.PI, 0]}
    />
    <models.Seat
      color={color}
      position={[0.35, 0, -0.7]}
      rotation={[0, Math.PI, 0]}
    />
  </group>
);

interface RowProps {
  models: any;
  color: any;
  position?: any;
}

const Row: React.FC<RowProps> = ({ models, color, ...props }) => (
  <group {...props}>
    <Quarter models={models} color={color} position={[-1.2, -0.45, 9.75]} />
    <Quarter models={models} color={color} position={[1.2, -0.45, 9.75]} />
  </group>
);

interface CabinProps {
  models: any;
  color: string;
  seatColor: string;
  name: any;
  position?: any;
}

const Cabin: React.FC<CabinProps> = ({
  models,
  color = "white",
  seatColor = "white",
  name,
  ...props
}) => (
  <group {...props}>
    {/* <Text
      fontSize={4}
      color="#101020"
      position={[0, 6, 4]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      {name}
    </Text> */}
    <Text3D
      curveSegments={32}
      bevelEnabled
      bevelSize={0.04}
      bevelThickness={0.1}
      height={0.5}
      size={2}
      position={[0, -1.5, -7]}
      font="/Inter_Bold.json"
      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
    >
      tanadon.com
      {/* <meshNormalMaterial /> */}
      <meshStandardMaterial color="gray" />
    </Text3D>
    <Text3D
      curveSegments={32}
      bevelEnabled
      bevelSize={0.04}
      bevelThickness={0.1}
      height={0}
      size={1}
      position={[-2, -1.5, -7]}
      letterSpacing={0.08}
      font="/Inter_Bold.json"
      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
    >
      Site is under maintenance
      <meshStandardMaterial color="gray" />
    </Text3D>
    <Text3D
      curveSegments={32}
      bevelEnabled
      bevelSize={0.04}
      bevelThickness={0.1}
      height={0}
      size={0.5}
      position={[-3.3, -1.5, -7]}
      letterSpacing={0.08}
      font="/Inter_Bold.json"
      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
    >
      Will be right back very soon!
      <meshStandardMaterial color="gray" />
    </Text3D>
    {/* <Html
      transform
      as="div"
      className="flex flex-col text-white font-code"
      position={[0, -1.5, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <h3 className="font-bold text-xl">Contact</h3>
      <input
        type="text"
        className="outline-none bg-transparent border border-white border-opacity-70 rounded-md"
      />
    </Html> */}
    {/* <models.Cabin color={color} /> */}
    {/* <Row models={models} color={seatColor} />
    <Row models={models} color={seatColor} position={[0, 0, -1.9]} />
    <Row models={models} color={seatColor} position={[0, 0, -6.6]} />
    <Row models={models} color={seatColor} position={[0, 0, -8.5]} />
    <Row models={models} color={seatColor} position={[0, 0, -11]} />
    <Row models={models} color={seatColor} position={[0, 0, -12.9]} />
    <Row models={models} color={seatColor} position={[0, 0, -17.6]} />
    <Row models={models} color={seatColor} position={[0, 0, -19.5]} /> */}
  </group>
);

export default function Portfolio() {
  return (
    <div className="w-screen h-screen">
      <Canvas
        dpr={[1, 1.5]}
        shadows
        camera={{ position: [-15, 15, 18], fov: 35 }}
        gl={{ alpha: false }}
      >
        <fog attach="fog" args={["#17171b", 35, 47.5]} />
        <color attach="background" args={["#17171b"]} />
        <ambientLight intensity={0.25} />
        <directionalLight
          castShadow
          intensity={2}
          position={[10, 6, 6]}
          shadow-mapSize={[1024, 1024]}
        >
          <orthographicCamera
            attach="shadow-camera"
            left={-20}
            right={20}
            top={20}
            bottom={-20}
          />
        </directionalLight>
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            <Train />
          </ScrollControls>
          <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={15}
              depthScale={1}
              minDepthThreshold={0.85}
              color="#151515"
              metalness={0.6}
              roughness={1}
              mirror={0}
            />
          </mesh>
          <Environment preset="dawn" />
        </Suspense>
      </Canvas>
    </div>
  );
}
