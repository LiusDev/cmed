import React from 'react'
import { Trans } from '../common'

interface CardProps {
    title?: string,
    content?: string
}

const ReasonCard = ({ title, content }: CardProps) => {
  return (
    <div className='relative'>
        <div className='absolute shadow-custom rounded-full w-24 h-24 left-0 right-0 mx-auto -top-12 bg-secondary flex justify-center items-center'>
          <img src="/service/detail/tick-icon.png" alt="" />
        </div>
        <div className='z-10 px-8 pb-8 pt-20 shadow-custom rounded flex flex-col items-center space-y-5'>
            <h2 className='text-base font-bold w-4/5 text-center'><Trans text={title} /></h2>
            <p className='text-[14px] font-medium text-justify'><Trans text={content} /></p>
        </div>
    </div>
  )
}

export default ReasonCard