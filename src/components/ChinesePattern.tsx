const ChinesePattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <svg
        className="absolute w-full h-full text-gold"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="chinese-pattern"
            x="0"
            y="0"
            width="150"
            height="150"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="75" cy="75" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="75" cy="75" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="75" cy="75" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            
            <line x1="75" y1="35" x2="75" y2="55" stroke="currentColor" strokeWidth="0.5" />
            <line x1="75" y1="95" x2="75" y2="115" stroke="currentColor" strokeWidth="0.5" />
            <line x1="35" y1="75" x2="55" y2="75" stroke="currentColor" strokeWidth="0.5" />
            <line x1="95" y1="75" x2="115" y2="75" stroke="currentColor" strokeWidth="0.5" />
            
            <path d="M 55 55 Q 65 65, 75 55 Q 85 45, 95 55" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 55 95 Q 65 85, 75 95 Q 85 105, 95 95" fill="none" stroke="currentColor" strokeWidth="0.5" />
            
            <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3" />
            <circle cx="130" cy="20" r="3" fill="currentColor" opacity="0.3" />
            <circle cx="20" cy="130" r="3" fill="currentColor" opacity="0.3" />
            <circle cx="130" cy="130" r="3" fill="currentColor" opacity="0.3" />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#chinese-pattern)" />
      </svg>
    </div>
  );
};

export default ChinesePattern;