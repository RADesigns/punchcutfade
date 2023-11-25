import React from 'react'
import LargeHeading from './ui/LargeHeading'

const Footer = () => {
  return (
    <div className='container py-24 max-w-7xl mx-auto w-full flex justify-between items-center'>
        <LargeHeading 
            size='sm'
            className='three-d'>
        {/* {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : title} */} Just a Footer area, I&apos;ll get back to this
        </LargeHeading>
    </div>
)}

export default Footer