import React, { Fragment } from 'react'

const Sushi = (props) => {
    const { img_url, name, price } = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>props.purchaseSushi(props.sushi)}>
        { img_url === ""
           ? null
          : <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi