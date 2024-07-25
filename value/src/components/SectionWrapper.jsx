import React from 'react'

function SectionWrapper(props) {
  const {children,header,title} = props
  return (
    <section className='min-h-screen flex flex-col gap-10'>
      <div className="flex flex-col py-10 gap-4 bg-slate-950 justify-center items-center">
        <p className='uppercase font-medium'>{header}</p>
        <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl'>{title[0]}  <span className='uppercase text-yellow-400'>{title[1]}</span> {title[2]}
        </h2>
      </div>
      <div className='w-full flex flex-col gap-10 max-w-[800px] mx-auto'>{children}</div>
    </section>
  )
}

export default SectionWrapper