import React from 'react'
import SectionWrapper from './SectionWrapper'
import  {legoThemes} from '../utils/legoTheme'
import {newLego} from '../utils/newlego'

function Generator() {
  function Header (props){
    const {index ,title,description} = props
    return (
      <div className='flex flex-col gap-4'>
        <div className='gap-2 item-center justify-center flex'>
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-500'>{index}</p>
          <h4 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{title}</h4>
        </div>
        <p className='mx-auto text-sm md:text-base'>{description}</p>
      </div>
    )
  }
  return (
    <SectionWrapper header={"Construct Your Adventure"} title={['It\'s','BUILD','o\'clock']}>
     <Header index={'01'} title={'Pick your Poison'} description={'Select a LEGO of your choice'}/>

     <div className="grid grid-cols-2 sm:grid-cols-4  gap-4 ">
      {Object.entries(legoThemes).map(([key, set]) => (
        <div key={key} className="flex flex-col items-center blueShadow duration-200">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
            <img src={set.img} alt={set.theme} className="w-full h-full object-cover" />
          </div>
          <p className="text-center text-sm font-semibold">{set.theme}</p>
        </div>
      ))}
    </div>
    
    <Header index={'02'} title={'Unveil the World of LEGO®'} description={'DISCOVER AMAZING SETS FROM THE WORLD OF LEGO'}/>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-auto">
  {Object.entries(newLego).map(([key, set]) => (
    <div key={key} className="flex flex-col items-center blueShadow duration-200  transform transition-transform">
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden mb-2">
        <img src={set.imgURL} alt={set.name} className="w-full h-full object-cover" />
      </div>
      <p className="text-center text-base font-semibold">{set.name}</p>
      <p className="text-center text-sm font-light">{set.desc}</p>
    </div>
  ))}
</div>

    </SectionWrapper>

  )
}

export default Generator