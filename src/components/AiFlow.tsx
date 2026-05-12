// Animated SVG: depicts client message → AI agent → CRM/handoff
const AiFlow = () => (
  <svg viewBox="0 0 480 240" className="w-full h-auto" role="img" aria-label="Схема работы AI-агента">
    <defs>
      <linearGradient id="line" x1="0" x2="1">
        <stop offset="0%" stopColor="hsl(168 70% 45%)" stopOpacity="0.2" />
        <stop offset="50%" stopColor="hsl(168 70% 55%)" />
        <stop offset="100%" stopColor="hsl(42 100% 67%)" />
      </linearGradient>
      <filter id="glow"><feGaussianBlur stdDeviation="2" /></filter>
    </defs>

    {/* nodes */}
    {[
      { x: 50, y: 120, label: 'Клиент', sub: 'WhatsApp · Tg' },
      { x: 240, y: 120, label: 'AI-агент', sub: '1Lab Core' },
      { x: 430, y: 60, label: 'CRM', sub: 'amo · Bitrix' },
      { x: 430, y: 180, label: 'Менеджер', sub: 'эскалация' },
    ].map((n, i) => (
      <g key={i}>
        <circle cx={n.x} cy={n.y} r="32" fill="hsl(220 28% 13%)" stroke="hsl(168 70% 45% / 0.5)" />
        <circle cx={n.x} cy={n.y} r={i === 1 ? 38 : 0} fill="none" stroke="hsl(168 70% 55%)" strokeOpacity="0.3" className="animate-pulse-dot" />
        <text x={n.x} y={n.y - 2} textAnchor="middle" fill="hsl(210 20% 97%)" fontSize="12" fontFamily="Manrope" fontWeight="600">{n.label}</text>
        <text x={n.x} y={n.y + 14} textAnchor="middle" fill="hsl(215 15% 65%)" fontSize="9" fontFamily="Inter">{n.sub}</text>
      </g>
    ))}

    {/* animated paths */}
    <g fill="none" stroke="url(#line)" strokeWidth="2" strokeDasharray="6 6" filter="url(#glow)">
      <path d="M82 120 H208" className="animate-flow" />
      <path d="M272 120 Q350 120 398 70" className="animate-flow" style={{ animationDelay: '0.4s' }} />
      <path d="M272 120 Q350 120 398 180" className="animate-flow" style={{ animationDelay: '0.8s' }} />
    </g>
  </svg>
);

export default AiFlow;
