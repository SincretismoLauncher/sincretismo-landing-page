import type { CSSProperties } from "react";

const stars = Array.from({ length: 82 }, (_, index) => {
  const x = (index * 37 + 11) % 100;
  const y = (index * 61 + 7) % 100;
  const size = 1 + (index % 3) * 0.7;
  const alpha = 0.28 + (index % 5) * 0.1;
  const duration = 2.8 + (index % 6) * 0.45;
  const delay = (index % 11) * -0.22;

  return { alpha, delay, duration, index, size, x, y };
});

type StarStyle = CSSProperties & Record<`--star-${string}`, string | number>;

function getStarStyle(star: (typeof stars)[number]): StarStyle {
  return {
    "--star-alpha": star.alpha,
    "--star-delay": `${star.delay}s`,
    "--star-duration": `${star.duration}s`,
    "--star-size": `${star.size}px`,
    "--star-x": `${star.x}%`,
    "--star-y": `${star.y}%`,
  };
}

export function Starfield() {
  return (
    <div className="starfield-layer" aria-hidden="true">
      {stars.map((star) => (
        <span
          className="star"
          key={star.index}
          style={getStarStyle(star)}
        />
      ))}
    </div>
  );
}
