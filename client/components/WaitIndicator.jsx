import React from 'react'
import {connect} from 'react-redux'

const WaitIndicator = (props) => {
  return (
    <div className='error'>

    {/* if props.waiting is true, then load this image. if false, not load */}
      {props.waiting && <img src='/animated-circle.gif' />}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(WaitIndicator)
