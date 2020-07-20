import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  // updateDidMount((prevProps, prevState) => {
  //   if (props.sushiIndex != prevProps.sushiIndex) {

  //   }

  // })


  let fourSushis = props.sushis.slice(props.sushiIndex, (props.sushiIndex+4))

  return (
    <Fragment>
      <div className="belt">
        {
         fourSushis.map(thisSushi => <Sushi sushi={thisSushi} purchaseSushi={props.purchaseSushi}/>)
        }
        <MoreButton addSushiToBelt={props.addSushiToBelt}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer