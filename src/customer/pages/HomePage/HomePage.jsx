import React from 'react'
import MainCarosel from '../../component/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../component/HomeSectionCarosel/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
        <MainCarosel/>
        <div>
            <HomeSectionCarosel/>
        </div>
    </div>
  )
}

export default HomePage