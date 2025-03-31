import * as React from "react"

function SvgComponent(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <rect x={1} y={4} width={30} height={24} rx={4} ry={4} fill="#fff" />
      <path fill="#be2a2a" d="M31 14H18V4h-4v10H1v4h13v10h4V18h13v-4z" />
      <path
        d="M27 4H5a4 4 0 00-4 4v16a4 4 0 004 4h22a4 4 0 004-4V8a4 4 0 00-4-4zm3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16z"
        opacity={0.15}
      />
      <path
        d="M27 5H5a3 3 0 00-3 3v1a3 3 0 013-3h22a3 3 0 013 3V8a3 3 0 00-3-3z"
        fill="#fff"
        opacity={0.2}
      />
    </svg>
  )
}

export default SvgComponent
