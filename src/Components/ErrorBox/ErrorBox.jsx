import React from 'react'

export default function ErrorBox({errorText}) {
  return (
    <div className='w-full text-center mt-4 py-3 bg-rose-500 font-bold sm:text-2xl text-rose-50 dark:text-neutral-800'>
        <h1>{errorText}</h1>
    </div>
  )
}
