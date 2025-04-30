import Link from 'next/link';

export const NavLogo = () => {
  return (
    <Link href="/" className=''>
      <h1 
        className='px-4 py-2 w-fit flex items-center group
                   text-3xl text-primary border border-transparent
                  hover:border-accent hover:text-current'
      >
        <span className='group-hover:text-primary'>Buy</span>
        <span className='text-accent'>&</span>
        <span className='group-hover:text-primary'>Ride</span>
      </h1>
    </Link>
  )
}
