import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="2em"
    height="2em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m12 2 10.392 6v12L12 26 1.608 20V8L12 2Z"
      stroke="#64FFAB"
      strokeWidth={2}
    />
    <path
      d="M9.265 18.132a2.951 2.951 0 0 1-2.244-.979 3.588 3.588 0 0 1-.66-1.177 4.854 4.854 0 0 1-.242-1.584c0-.58.081-1.1.242-1.562a3.48 3.48 0 0 1 .671-1.177 2.835 2.835 0 0 1 1.023-.737 3.16 3.16 0 0 1 1.298-.264c.433 0 .814.088 1.144.264.338.176.613.381.825.616l-.517.583a2.326 2.326 0 0 0-.638-.473 1.709 1.709 0 0 0-.814-.187c-.344 0-.66.07-.946.209a1.95 1.95 0 0 0-.715.583c-.198.25-.352.554-.462.913-.11.36-.165.763-.165 1.21 0 .455.055.865.165 1.232.11.36.264.667.462.924s.437.455.715.594c.286.14.602.209.946.209.33 0 .624-.07.88-.209.264-.14.514-.337.748-.594l.517.561c-.286.33-.608.587-.968.77-.359.183-.78.275-1.265.275ZM14.772 18l-2.299-7.216h.968l1.166 3.894c.125.433.238.832.341 1.199.103.367.22.763.352 1.188h.044l.187-.605c.059-.198.114-.392.165-.583.059-.19.114-.385.165-.583.059-.198.117-.403.176-.616l1.155-3.894h.935L15.839 18h-1.067Z"
      fill="#64FFAB"
    />
  </svg>
)

export default SvgComponent
