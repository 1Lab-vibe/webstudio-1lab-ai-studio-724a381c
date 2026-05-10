const FlowDiagram = () => {
  return (
    <svg
      viewBox="0 0 600 220"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Схема: клиент → AI → CRM"
    >
      <defs>
        <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="hsl(187 95% 55%)" stopOpacity="0.1" />
          <stop offset="50%" stopColor="hsl(187 95% 55%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(187 95% 55%)" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="node-glow">
          <stop offset="0%" stopColor="hsl(187 95% 55%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(187 95% 55%)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Connecting lines with animated dashes */}
      <path d="M 110 110 L 260 110" stroke="url(#line)" strokeWidth="1.5" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.2s" repeatCount="indefinite" />
      </path>
      <path d="M 340 110 L 490 110" stroke="url(#line)" strokeWidth="1.5" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.2s" repeatCount="indefinite" />
      </path>

      {/* Side branches */}
      <path d="M 300 145 L 300 195 L 420 195" fill="none" stroke="hsl(220 20% 22%)" strokeWidth="1" />
      <path d="M 300 75 L 300 25 L 180 25" fill="none" stroke="hsl(220 20% 22%)" strokeWidth="1" />

      {/* Nodes */}
      {[
        { x: 70, y: 110, label: "Клиент", sub: "сайт · мессенджер" },
        { x: 300, y: 110, label: "AI-агент", sub: "1Lab core", main: true },
        { x: 530, y: 110, label: "CRM", sub: "Bitrix · amoCRM" },
      ].map((n, i) => (
        <g key={i}>
          {n.main && <circle cx={n.x} cy={n.y} r="42" fill="url(#node-glow)" />}
          <circle
            cx={n.x}
            cy={n.y}
            r={n.main ? 26 : 22}
            fill="hsl(220 22% 11%)"
            stroke="hsl(187 95% 55%)"
            strokeWidth={n.main ? "1.5" : "1"}
          />
          <circle cx={n.x} cy={n.y} r="4" fill="hsl(187 95% 55%)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
          </circle>
          <text x={n.x} y={n.y + 50} textAnchor="middle" fill="hsl(210 30% 96%)" fontSize="13" fontWeight="600" fontFamily="Manrope, sans-serif">
            {n.label}
          </text>
          <text x={n.x} y={n.y + 66} textAnchor="middle" fill="hsl(215 15% 62%)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            {n.sub}
          </text>
        </g>
      ))}

      {/* Side labels */}
      <text x="170" y="20" textAnchor="end" fill="hsl(215 15% 62%)" fontSize="10" fontFamily="JetBrains Mono, monospace">
        база знаний
      </text>
      <text x="430" y="210" fill="hsl(215 15% 62%)" fontSize="10" fontFamily="JetBrains Mono, monospace">
        отчёты · аналитика
      </text>

      {/* Moving particles */}
      <circle r="3" fill="hsl(187 95% 70%)">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M 110 110 L 260 110" />
      </circle>
      <circle r="3" fill="hsl(187 95% 70%)">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M 340 110 L 490 110" begin="0.6s" />
      </circle>
    </svg>
  );
};

export default FlowDiagram;
