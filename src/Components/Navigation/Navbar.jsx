import React from 'react'
import Icon from '../../images/level.png'
import '../../App.css'

const navbar = () => {
  return (
    <div>
      <nav className='bg-slate-500'>
        {/* Desktop Nav begin */}
        <div>
          <img src={Icon} alt="icon" className='hidden sm:w-[35px]'/>
        </div>
        {/* Desktop Nav End */}
        <div>This is nav test</div>
      </nav>

    </div>
  )
}

export default navbar
