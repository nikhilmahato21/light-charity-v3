function BloodBagSVG({ number }) {
  return (
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Blood drop */}
      <path fill="#d9534f" d="M 75 20 Q 100 70 75 120 Q 50 70 75 20 Z" />
      {/* Number */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="80"
        fill="#fff"
      >
        {number}
      </text>
    </svg>
  );
}

export default BloodBagSVG;
