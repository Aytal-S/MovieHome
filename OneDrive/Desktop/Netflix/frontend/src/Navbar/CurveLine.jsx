const CurveLine = () => {
  return (
    <div className="relative w-full h-24 bg-[#000000] overflow-hidden">
      {/* Blue glow effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #101a45 0%, #080d24 45%, #000000 100%)",
        }}
      />

      {/* Curved red line */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="curveColor">
            <stop offset="0%" stopColor="#8e195b" />
            <stop offset="50%" stopColor="#e50914" />
            <stop offset="100%" stopColor="#8e195b" />
          </linearGradient>
        </defs>

  
        <path
          d="M 0 22 Q 500 -28 1000 22"
          fill="none"
          stroke="url(#curveColor)"
          strokeWidth="9"
          strokeLinecap="round"
         
        />
      </svg>
    </div>
  );
};

export default CurveLine;