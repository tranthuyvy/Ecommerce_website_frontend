import React from 'react'
import MainCarosel from '../../component/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../component/HomeSectionCarosel/HomeSectionCarosel'
import { self_help } from '../../../Data/self_help'

const HomePage = () => {
  return (
    <div>
        <MainCarosel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={self_help} sectionName={""}/>
            <HomeSectionCarosel data={self_help} sectionName={""}/>
            <HomeSectionCarosel data={self_help} sectionName={""}/>
            <HomeSectionCarosel data={self_help} sectionName={""}/>
            <HomeSectionCarosel data={self_help} sectionName={""}/>
        </div>
    </div>
  )
}

export default HomePage