import * as React from "react"

function SvgComponent(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24a12 12 0 100-24 12 12 0 000 24zm5.56-13.06l-4.5-4.5a1.5 1.5 0 00-2.12 2.12l1.939 1.94H7.5a1.5 1.5 0 100 3h5.379l-1.94 1.94a1.501 1.501 0 001.056 2.578 1.501 1.501 0 001.066-.457l4.5-4.5a1.5 1.5 0 000-2.121z"
        fill="#191A19"
      />
    </svg>
  )
}

export default SvgComponent
