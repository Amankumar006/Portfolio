import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useDeviceCapabilities } from "../hooks/useDeviceCapabilities";

const Hero = () => {
  const { isMobile, isLowEnd, dpr } = useDeviceCapabilities();
  const text = `I build intelligent AI-powered solutions
and modern web applications that
transform ideas into reality`;
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"AI & ML Engineering Student"}
        title={"Aman\u00A0Kumar"}
        text={text}
        textColor={"text-black"}
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100%", height: "100vh" }}
        aria-label="Interactive 3D planet decoration"
        role="img"
      >
        <Canvas
          shadows={!isMobile}
          dpr={dpr}
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
          performance={{ min: 0.5 }}
        >
          <ambientLight intensity={isMobile ? 0.7 : 0.5} />
          <Float
            speed={isMobile ? 0.3 : 0.5}
            floatIntensity={isMobile ? 0.3 : 1}
            rotationIntensity={isMobile ? 0.2 : 1}
          >
            <Planet scale={isMobile ? 0.7 : 1} enableShadows={!isMobile} />
          </Float>
          <Environment resolution={isMobile ? 64 : 256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              {/* Additional lights only on desktop for richer reflections */}
              {!isMobile && (
                <>
                  <Lightformer
                    form={"circle"}
                    intensity={2}
                    position={[-5, -1, -1]}
                    scale={10}
                  />
                  <Lightformer
                    form={"circle"}
                    intensity={2}
                    position={[10, 1, 0]}
                    scale={16}
                  />
                </>
              )}
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
