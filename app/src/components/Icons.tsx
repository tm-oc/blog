import { SVGAttributes } from 'react'

type Props = {
  className?: SVGAttributes<SVGSVGElement>['className']
}

export const ChevronLeftIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className={className}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M15 19l-7-7 7-7'
      />
    </svg>
  )
}

export const ChevronRightIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className={className}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M9 5l7 7-7 7'
      />
    </svg>
  )
}

export const CalenderIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
      />
    </svg>
  )
}

export const UpdateIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
      />
    </svg>
  )
}

export const MenuIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Menu</title>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 6h16M4 12h16M4 18h7'
      ></path>
    </svg>
  )
}

export const CloseIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      stroke='currentColor'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Close</title>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M6 18L18 6M6 6l12 12'
      ></path>
    </svg>
  )
}

export const CircleRightIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
}

export const Logo = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='59'
      height='15'
      viewBox='0 0 59 15'
    >
      <path
        fill='#111827'
        d='M11.94 6.96Q13.14 7.34 13.82 8.23Q14.50 9.12 14.50 10.42L14.50 10.42Q14.50 12.26 13.07 13.25Q11.64 14.24 8.90 14.24L8.90 14.24L1.66 14.24L1.66 0.24L8.50 0.24Q11.06 0.24 12.43 1.22Q13.80 2.20 13.80 3.88L13.80 3.88Q13.80 4.90 13.31 5.70Q12.82 6.50 11.94 6.96L11.94 6.96ZM8.10 2.68L4.88 2.68L4.88 5.98L8.10 5.98Q9.30 5.98 9.92 5.56Q10.54 5.14 10.54 4.32L10.54 4.32Q10.54 3.50 9.92 3.09Q9.30 2.68 8.10 2.68L8.10 2.68ZM8.66 11.80Q9.94 11.80 10.59 11.38Q11.24 10.96 11.24 10.08L11.24 10.08Q11.24 8.34 8.66 8.34L8.66 8.34L4.88 8.34L4.88 11.80L8.66 11.80ZM16.96 14.24L16.96 0.24L20.20 0.24L20.20 11.60L27.22 11.60L27.22 14.24L16.96 14.24ZM35.58 14.48Q33.40 14.48 31.65 13.54Q29.90 12.60 28.91 10.95Q27.92 9.30 27.92 7.24L27.92 7.24Q27.92 5.18 28.91 3.53Q29.90 1.88 31.65 0.94Q33.40-0.00 35.58-0.00L35.58-0.00Q37.76-0.00 39.50 0.94Q41.24 1.88 42.24 3.53Q43.24 5.18 43.24 7.24L43.24 7.24Q43.24 9.30 42.24 10.95Q41.24 12.60 39.50 13.54Q37.76 14.48 35.58 14.48L35.58 14.48ZM35.58 11.72Q36.82 11.72 37.82 11.15Q38.82 10.58 39.39 9.56Q39.96 8.54 39.96 7.24L39.96 7.24Q39.96 5.94 39.39 4.92Q38.82 3.90 37.82 3.33Q36.82 2.76 35.58 2.76L35.58 2.76Q34.34 2.76 33.34 3.33Q32.34 3.90 31.77 4.92Q31.20 5.94 31.20 7.24L31.20 7.24Q31.20 8.54 31.77 9.56Q32.34 10.58 33.34 11.15Q34.34 11.72 35.58 11.72L35.58 11.72ZM55.14 11.12L55.14 7.02L58.10 7.02L58.10 12.70Q56.96 13.56 55.46 14.02Q53.96 14.48 52.44 14.48L52.44 14.48Q50.26 14.48 48.52 13.55Q46.78 12.62 45.79 10.97Q44.80 9.32 44.80 7.24L44.80 7.24Q44.80 5.16 45.79 3.51Q46.78 1.86 48.54 0.93Q50.30-0.00 52.50-0.00L52.50-0.00Q54.34-0.00 55.84 0.62Q57.34 1.24 58.36 2.42L58.36 2.42L56.28 4.34Q54.78 2.76 52.66 2.76L52.66 2.76Q51.32 2.76 50.28 3.32Q49.24 3.88 48.66 4.90Q48.08 5.92 48.08 7.24L48.08 7.24Q48.08 8.54 48.66 9.56Q49.24 10.58 50.27 11.15Q51.30 11.72 52.62 11.72L52.62 11.72Q54.02 11.72 55.14 11.12L55.14 11.12Z'
      ></path>
    </svg>
  )
}
