const ClayTexture = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="clay-noise">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.9" 
              numOctaves="4" 
              seed="2"
            />
            <feColorMatrix 
              type="saturate" 
              values="0.3"
            />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 0.5"/>
            </feComponentTransfer>
          </filter>
          
          <pattern
            id="clay-texture"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <rect width="200" height="200" fill="#4A2F28" opacity="0.3"/>
            <circle cx="20" cy="30" r="1.5" fill="#3A1F18" opacity="0.4"/>
            <circle cx="60" cy="50" r="1" fill="#3A1F18" opacity="0.3"/>
            <circle cx="140" cy="40" r="1.2" fill="#3A1F18" opacity="0.35"/>
            <circle cx="180" cy="80" r="0.8" fill="#3A1F18" opacity="0.3"/>
            <circle cx="30" cy="120" r="1.3" fill="#3A1F18" opacity="0.4"/>
            <circle cx="100" cy="90" r="1.1" fill="#3A1F18" opacity="0.35"/>
            <circle cx="170" cy="150" r="0.9" fill="#3A1F18" opacity="0.3"/>
            <circle cx="50" cy="180" r="1.4" fill="#3A1F18" opacity="0.4"/>
            <circle cx="120" cy="160" r="1" fill="#3A1F18" opacity="0.35"/>
            
            <ellipse cx="80" cy="70" rx="3" ry="1" fill="#8B5A42" opacity="0.15"/>
            <ellipse cx="150" cy="110" rx="2.5" ry="0.8" fill="#8B5A42" opacity="0.12"/>
            <ellipse cx="40" cy="140" rx="3.2" ry="1.2" fill="#8B5A42" opacity="0.15"/>
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#clay-texture)" filter="url(#clay-noise)"/>
      </svg>
    </div>
  );
};

export default ClayTexture;
