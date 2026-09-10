function CloudMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 42C15 32 22 28 30 32C32 22 42 20 48 26C53 18 65 20 67 30C77 28 82 38 75 42L18 42Z"
        stroke="#BA7517"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 37C28 34 32 33 34 35"
        stroke="#BA7517"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M50 37C50 34 54 33 56 35"
        stroke="#BA7517"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Medallion() {
  const curveText = 'Học hôm nay, bứt phá ngày mai';

  return (
    <div
      className="relative w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] rounded-full flex items-center justify-center animate-fade-in"
      style={{
        background:
          'radial-gradient(circle at 50% 42%, #FAC775 0%, #FDE4B0 52%, #FDF6E9 100%)',
        border: '2px solid rgba(186, 117, 23, 0.55)',
        boxShadow:
          '0 20px 50px rgba(139, 30, 30, 0.35), 0 8px 20px rgba(0, 0, 0, 0.12)',
        animationDelay: '0.8s',
      }}
    >
      {/* Inner decorative ring */}
      <div className="absolute inset-[6px] rounded-full border border-[#BA7517]/25" />

      {/* Curved text along top arc — uses a viewBox that matches the medallion circle */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Circular path for the top half — radius 78 centered at (100,100) */}
          <path
            id="medallion-top-arc"
            d="M 22 100 A 78 78 0 0 1 178 100"
            fill="none"
          />
        </defs>
        <text
          fill="#FFFFFF"
          fontFamily="'Be Vietnam Pro', system-ui, sans-serif"
          fontSize="11"
          fontWeight="600"
          letterSpacing="2.2"
          textTransform="uppercase"
        >
          <textPath
            href="#medallion-top-arc"
            startOffset="50%"
            textAnchor="middle"
            style={{ textTransform: 'uppercase' }}
          >
            {curveText.toUpperCase()}
          </textPath>
        </text>
      </svg>

      {/* Calligraphy stamp image — hand-brushed 中 character */}
      <img
        src="https://res.cloudinary.com/qugyphlv/image/upload/v1789009070/dau-an-removebg-preview.png"
        alt="Ấn triện chữ Trung"
        className="relative w-[55%] h-[55%] object-contain drop-shadow-md"
        style={{ marginTop: '6%' }}
      />

      {/* Cloud motifs — lower-right accent */}
      <div className="absolute bottom-[14%] right-[10%] w-[32%] opacity-70">
        <CloudMotif />
      </div>
      <div className="absolute bottom-[28%] right-[20%] w-[22%] opacity-50">
        <CloudMotif />
      </div>
    </div>
  );
}
