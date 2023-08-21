import React from 'react'
import MainCarosel from '../../component/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../component/HomeSectionCarosel/HomeSectionCarosel'
import { self_help } from '../../../Data/self_help'

const HomePage = () => {
  return (
    <div>
        <MainCarosel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={self_help} sectionName={"Sách Kỹ Năng Sống"}/>
            <HomeSectionCarosel data={self_help} sectionName={"Sách Trinh Thám"}/>
            <HomeSectionCarosel data={self_help} sectionName={"Sách IT"}/>
            <HomeSectionCarosel data={self_help} sectionName={"Sách Tâm Lý - Tâm Linh - Tôn Giáo"}/>
            <HomeSectionCarosel data={self_help} sectionName={"Truyện Tranh"}/>
        </div>
    </div>
  )
}

export default HomePage