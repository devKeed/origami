import { Canvas } from "@react-three/fiber";
import { Item2 } from "../../../grid/Item2";

function SpinningElement() {
  return (
    <div className="w-full h-[768px]">
      <Canvas
        camera={{
          position: [0, 0, 3],
          fov: 75,
        }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Item2 />
      </Canvas>
    </div>
  );
}

export default SpinningElement;
