import React from 'react';

/**
 * A circular rotating dot spinner loader inspired by loading.io style.
 *
 * @param {Object} props
 * @param {boolean} [props.loading=true] - Whether the loader should be shown.
 * @param {number} [props.size=60] - Diameter of the spinner in pixels.
 * @param {string} [props.color="#3B82F6"] - Dot color (default: Tailwind blue-500).
 * @returns {JSX.Element|null}
 */
const DotSpinnerLoader = ({
  loading = true,
  size = 40,
  color = '#3B82F6' // Tailwind blue-500
}) => {
  if (!loading) return null;

  const dotCount = 12;
  const dots = Array.from({ length: dotCount });

  return (
    <div
      className="relative"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-live="polite"
      aria-label="Loading"
    >
      {dots.map((_, index) => {
        const rotate = (360 / dotCount) * index;
        return (
          <div
            key={index}
            className="absolute top-1/2 left-1/2"
            style={{
              width: `${size * 0.12}px`,
              height: `${size * 0.12}px`,
              backgroundColor: color,
              borderRadius: '50%',
              transform: `rotate(${rotate}deg) translate(${size / 2.5}px)`,
              animation: 'dotPulse 1.2s linear infinite',
              animationDelay: `${index * 0.1}s`,
              opacity: 0.25,
            }}
          ></div>
        );
      })}

      {/* Inline CSS animation */}
      <style>{`
        @keyframes dotPulse {
          0%, 20% { opacity: 0.25; }
          50% { opacity: 1; }
          100% { opacity: 0.25; }
        }
      `}</style>
    </div>
  );
};

export default DotSpinnerLoader;
