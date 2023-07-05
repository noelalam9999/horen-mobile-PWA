import React from 'react'
import PointsAcquired from './PointsAcquired'
import HonkingBehaviour from './HonkingBehaviour'
import HornsPerKm from './HornsPerKm'
import Percentile from './Percentile'

function Stats() {
  return (
    <div className='stats-container'>
      <div className="points-acquired">
        <PointsAcquired/>
      </div>
      <div className='flex' >
        <div className='honking-behaviour'>
          <HonkingBehaviour/>
        </div>
        <div className='flex-column'>
          <div className='honks-per-km'>
            <HornsPerKm/>
          </div>
          <div className='percentile'>
            <Percentile/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Stats