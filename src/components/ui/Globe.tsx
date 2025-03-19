import * as React from "react"

function SvgComponent(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={35}
      height={35}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.36 31.073c1.135 0 2.27-.14 3.404-.424-.14-.284-.424-.424-.85-.284.423-1.986.707-2.977 1.558-3.828.567-.424.85-1.135.423-1.702-.283-.424-.85-.708-1.274-.567-.851.14-.284-.992-.992-1.135-.707-.14-1.702-1.559-2.693-1.986-.567-.284-1.135-.991-1.986-.991-.707 0-1.842.707-1.842.14 0-1.702-.14-2.837-.14-3.404 0-.424-.284-.14.85-.14.568 0 .284-1.135.852-1.135.567 0 1.842.567 2.126.283.284-.14 2.27 5.107 2.27.851 0-.567-.284-1.418 0-1.842.707-1.135 1.418-2.41 1.985-3.688a4.09 4.09 0 00-1.842 0c-.284.14.14.568-.284.568-1.418.283-2.693-.424-2.27-1.135.425-.708 2.127-.284 2.27-1.702.14-.851.14-1.702.14-2.41 1.843.284 1.703-2.126-.707-2.693h-.708a13.534 13.534 0 00-13.333 10.92c.567.567 1.558.567 1.986-.14-.14-.14-.14-.14 0-.284.567.424 1.418.424 1.418 1.135 0 2.41.14 4.963 2.27 4.963.85.284 1.418.991 1.702 1.842.14.567.991 0 1.702 0 .424 0 0 .708 0 2.126 0 1.419 3.26 3.828 3.26 3.828 0 .851 0 1.559.14 2.41-.423 0-.99 0-1.418.14.708.284 1.275.284 1.983.284zm12.766-18.157s-.14 0-.14-.14c-.851-2.27-2.977-.567-2.27 1.275-3.971 2.977-2.837 5.107-1.558 6.242.707.707 1.275 1.418 1.702 2.269-.424 1.135 1.275.851 2.41-.851.567-1.418.707-2.977.707-4.54v-1.274c0-.284 0-.567-.14-.707-.144-.571-.427-1.422-.711-2.274z"
        fill="#fff"
      />
      <path
        d="M17.503 32.351c-8.227 0-14.892-6.665-14.892-14.892S9.276 2.563 17.503 2.563 32.395 9.23 32.395 17.456 25.73 32.35 17.503 32.35zm0-28.37c-7.376 0-13.473 6.099-13.473 13.475 0 7.375 6.097 13.477 13.473 13.477s13.474-6.098 13.474-13.474S24.879 3.982 17.503 3.982z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent
