import React from 'react'
import WrapperChat from './wrapperChat'
import LeftBarSearch from './search'

import './leftbar.scss'

function LeftBar() {

  return (
    <div className="leftbar">
        <LeftBarSearch/>
        <WrapperChat/>
    </div>
  )
}
export default React.memo(LeftBar)