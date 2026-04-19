import Particles from "react-tsparticles";

function ParticlesBg() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { speed: 1 },
          color: { value: "#00d4ff" },
        },
      }}
    />
  );
}

export default ParticlesBg;
