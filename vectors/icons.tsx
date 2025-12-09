import React from 'react'

const FooterIcon = ({...props}: React.SVGProps<SVGSVGElement>) => {
  return (
      <svg  width="367" height="294" viewBox="0 0 367 294" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M36.7 294C26.6075 294 17.9708 290.405 10.7898 283.214C3.60883 276.023 0.0122333 267.368 0 257.25V36.75C0 26.6437 3.5966 17.9952 10.7898 10.8045C17.983 3.61375 26.6197 0.01225 36.7 0H146.8L183.5 36.75H330.3C340.392 36.75 349.035 40.3515 356.229 47.5545C363.422 54.7575 367.012 63.406 367 73.5V257.25C367 267.356 363.409 276.011 356.229 283.214C349.048 290.417 340.405 294.012 330.3 294H36.7Z" fill="url(#paint0_linear_47_3)" />
          <defs>
              <linearGradient id="paint0_linear_47_3" x1="183.5" y1="0" x2="183" y2="352.5" gradientUnits="userSpaceOnUse">
                  <stop className='[stop-color:var(--color-neutral-400)] dark:[stop-color:var(--color-neutral-700)]' />
                  <stop offset="1" className='[stop-color:var(--color-neutral-400)] dark:[stop-color:var(--color-neutral-700)]' stop-opacity="0.01" /> 
              </linearGradient>
          </defs>
      </svg >


  )
}

export default FooterIcon


   
