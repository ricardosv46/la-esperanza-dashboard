import * as React from 'react'
import { SVGProps } from 'react'

const IconOptions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth={0}
    viewBox='0 0 512 512'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M64 144h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32zm384 224h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32zm0-128H221.25a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h66.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32z'
      stroke='none'
    />
  </svg>
)

export default IconOptions
