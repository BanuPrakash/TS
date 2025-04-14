import React from 'react'
type AppProps = {
    src: string,
    alt:string
}
export default function Image({src, alt}: AppProps) {
  return (
    <div>
        <img src={src} alt = {alt} />
    </div>
  )
}
