import * as React from "react"

function SvgComponent(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={118}
      height={102}
      viewBox="0 0 118 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_103_6)">
        <path
          d="M40.855 33.374l-9.396-6.526 1.618-2.312.296.202 8.832 6.135 2.127 1.392c.84.56 1.657.964 2.492 1.233l.221.066a8.446 8.446 0 001.977.336h.045a9.68 9.68 0 002.194-.148c2.256-.402 4.112-1.487 5.517-3.229a8.75 8.75 0 00.417-.547l.033-.045c.138-.198.265-.396.377-.588 1.15-1.915 1.529-4.025 1.127-6.27a9.597 9.597 0 00-.614-2.091l-.026-.069a8.395 8.395 0 00-.978-1.695l.25-.263-.28.225c-.554-.738-1.28-1.314-2.2-1.952l-1.792-1.253-7.264 10.386-2.331-1.619.217-.29 8.674-12.4L56.5 14.91c1.296.901 2.242 1.778 2.956 2.746l.006-.004.179.259c.403.592.75 1.22 1.03 1.865.014.034.024.058.032.082.357.837.625 1.75.797 2.71.264 1.475.276 2.912.035 4.27l-.361-.025.352.063-.008.046c-.063.348-.146.698-.241 1.035a11.78 11.78 0 01-1.328 2.974c-.116.192-.247.394-.414.633-.17.242-.312.432-.448.6a11.669 11.669 0 01-3.27 2.885l-.035.02c-1.204.7-2.563 1.187-4.037 1.45a12.987 12.987 0 01-2.849.19h-.016l-.081-.005a11.203 11.203 0 01-2.084-.317h-.01l-.073-.02c-1.507-.386-2.799-.958-3.932-1.744l-1.841-1.24-.004-.009zm35.459-11.828c-2.26-1.57-4.361-2.377-6.75-2.579.189.677.349 1.378.479 2.09.235 1.335.348 2.679.338 4l.18.061c.95.334 1.876.812 2.758 1.425l13.168 9.147L84.87 38l-13.168-9.148a8.853 8.853 0 00-1.549-.865c-.014.095-.028.19-.045.283l-.014.065c-.492 2.843-1.654 5.599-3.453 8.167-1.713 2.45-3.787 4.42-6.172 5.862.602 1.214 1.507 2.247 2.695 3.073l1.685 1.17 7.324-10.468 9.42 6.542-13.861 19.816-2.322-1.612L77.654 43.38l-4.779-3.32-12.23 17.489-6.406-4.45c-3.084-2.141-5.014-4.548-6.233-7.775-3.621-.246-7.062-1.485-10.231-3.688l-8.946-6.118-.296-.194-2.026-1.406 1.618-2.312 1.16.806 10.106 6.913c2.553 1.774 5.308 2.827 8.187 3.132l.09-.016.05.03c.663.067 1.355.093 2.054.079l.116-.02.028.018a19.506 19.506 0 002.863-.3 18.902 18.902 0 003.747-1.058l.025-.036.11-.02a16.423 16.423 0 001.796-.863l.066-.037c2.251-1.265 4.202-3.063 5.797-5.344 1.594-2.278 2.61-4.718 3.022-7.254l.008-.04c.105-.655.17-1.326.197-2.01v-.062a18.49 18.49 0 00-.294-3.972c-.16-.891-.374-1.75-.637-2.556h-.014l-.11-.322a16.412 16.412 0 00-.805-1.935l-.227-.461h.016c-1.25-2.378-3.104-4.409-5.645-6.175l-8.897-6.181-12.233 17.49-2.32-1.612L50.238 0l11.218 7.791c3.295 2.29 5.613 5.008 7.083 8.31 3.427.038 6.332 1.01 9.394 3.135l13.506 9.382-1.616 2.31-13.506-9.382h-.002zM59.943 53.629l3.293-4.708-2.02-1.423c-1.377-1.022-2.455-2.283-3.203-3.742l-.027.02-.05-.115-.019.006a22.046 22.046 0 01-4.637 1.36 22.91 22.91 0 01-2.214.283c1.016 2.192 2.51 3.898 4.791 5.484l4.086 2.837v-.002zM24.855 80.933c0 6.709-5.217 10.77-13.369 10.77H0V70.165h11.486c8.152 0 13.369 4.062 13.369 10.77v-.002zm-5.033 0c0-4.431-3.52-6.585-8.706-6.585H4.94v13.168h6.175c5.186 0 8.706-2.154 8.706-6.585v.002zM45.82 87.149H32.76l-2.315 4.554h-5.28l11.454-21.538h5.404l11.454 21.538h-5.341l-2.316-4.554zm-2.068-4.001l-4.477-8.77-4.477 8.77h8.954zM78.58 85.178c0 4.246-4.044 7.2-11.7 7.2-5.465 0-9.912-1.538-13.215-4.338l2.841-3.355c2.656 2.431 6.083 3.569 10.497 3.569s6.608-.83 6.608-2.615c0-1.784-2.222-2.277-7.194-2.707-6.174-.524-11.918-1.878-11.918-6.493s4.815-6.952 11.486-6.952c4.725 0 8.8 1.17 11.547 3.291l-2.716 3.415c-2.377-1.815-5.31-2.554-8.83-2.584-2.935-.03-6.516.493-6.516 2.46 0 1.847 3.089 2.031 7.379 2.37 6.886.554 11.732 2.001 11.732 6.74zM107.203 70.163v21.538h-4.939v-8.77H87.537v8.77h-4.94V70.163h4.94v8.463h14.727v-8.463h4.939zM113.008 91.703V70.165h4.939v21.538h-4.939z"
          fill="#F26529"
        />
        <path
          d="M62.117 100.618c-.5.8-1.584 1.382-3.08 1.382-2.152 0-3.437-1.087-3.437-2.881 0-1.795 1.285-2.882 3.422-2.882 1.34 0 2.261.497 2.806 1.08l-.764.543c-.482-.544-1.123-.808-2.034-.808-1.535 0-2.48.699-2.48 2.067 0 1.368.96 2.067 2.527 2.067.96 0 1.738-.249 2.135-.871v-.623h-2.277v-.8h3.181v1.726zM74.93 101.836l-1.692-1.974h-2.3v1.974h-.934v-5.437h3.71c1.272 0 2.207.606 2.207 1.732 0 .94-.655 1.515-1.606 1.685l1.77 2.02h-1.156zm-1.278-2.772c.778 0 1.31-.248 1.31-.925s-.53-.924-1.31-.924H70.93v1.85h2.72zM83.43 99.119c0-1.795 1.294-2.882 3.391-2.882s3.39 1.087 3.39 2.882c0 1.794-1.293 2.881-3.39 2.881-2.096 0-3.39-1.087-3.39-2.881zm5.824 0c0-1.322-.95-2.06-2.433-2.06-1.482 0-2.44.738-2.44 2.06 0 1.321.952 2.059 2.44 2.059s2.433-.738 2.433-2.06zM103.94 96.399v2.875c0 1.609-1.036 2.726-2.97 2.726-1.934 0-2.962-1.119-2.962-2.726V96.4h.934v2.813c0 1.22.724 1.958 2.028 1.958s2.034-.738 2.034-1.958v-2.813h.936zM118 98.177c0 1.142-.88 1.778-2.206 1.778h-2.752v1.879h-.934v-5.437h3.688c1.326 0 2.206.644 2.206 1.778l-.002.002zm-.959.008c0-.699-.521-.972-1.324-.972h-2.675v1.942h2.675c.803 0 1.324-.279 1.324-.972v.002z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_103_6">
          <path fill="#fff" d="M0 0H118V102H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
