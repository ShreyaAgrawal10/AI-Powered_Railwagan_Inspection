import React from 'react';

const RotatingCard = () => {
  const cards = [
    { color: '142, 249, 252' },
    { color: '142, 252, 204' },
    { color: '142, 252, 157' },
    { color: '215, 252, 142' },
    { color: '252, 252, 142' },
    { color: '252, 208, 142' },
    { color: '252, 142, 142' },
    { color: '252, 142, 239' },
    { color: '204, 142, 252' },
    { color: '142, 202, 252' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden text-center">
      <div 
        className="absolute w-[100px] h-[150px] top-1/4 left-[calc(50%-52.5px)] z-[2] preserve-3d"
        style={{
          transform: "perspective(1000px) rotateX(-15deg)",
          animation: "rotating 20s linear infinite"
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="absolute inset-0 rounded-xl overflow-hidden"
            style={{
              border: `2px solid rgba(${card.color})`,
              transform: `rotateY(${(360 / cards.length) * index}deg) translateZ(250px)`
            }}
          >
            <div 
              className="w-full h-full"
              style={{
                background: `radial-gradient(
                  circle,
                  rgba(${card.color}, 0.2) 0%,
                  rgba(${card.color}, 0.6) 80%,
                  rgba(${card.color}, 0.9) 100%
                )`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Add required CSS
const styles = `
@keyframes rotating {
  from {
    transform: perspective(1000px) rotateX(-15deg) rotateY(0);
  }
  to {
    transform: perspective(1000px) rotateX(-15deg) rotateY(360deg);
  }
}

.preserve-3d {
  transform-style: preserve-3d;
}
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default RotatingCard;