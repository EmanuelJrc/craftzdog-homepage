const ControllerIcon = props => {
  return (
    <svg
      width={20}
      height={20}
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
      viewBox="0 0 40 40"
      fill="currentColor"
      {...props}
    >
      <g
        transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path d="M57 312 c-37 -41 -67 -162 -53 -216 9 -37 44 -33 93 9 37 32 47 35 103 35 56 0 65 -3 103 -35 28 -25 50 -35 67 -33 22 3 25 8 28 51 4 59 -22 154 -51 185 -24 25 -55 28 -83 7 -25 -19 -103 -19 -128 0 -27 20 -59 19 -79 -3z m163 -55 c0 -19 -10 -27 -26 -20 -21 8 -17 33 6 33 11 0 20 -6 20 -13z" />
      </g>
    </svg>
  )
}

export default ControllerIcon
