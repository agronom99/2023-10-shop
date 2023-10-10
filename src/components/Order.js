import React, { Component } from 'react'
import { FaWindowClose } from "react-icons/fa";


export class Order extends Component {
  render() {
    return (
      <div className='item'>
         <img src={"./img/"+ this.props.item.img} alt="" />
        <h2>{this.props.item.title}</h2>
        {/* <p>{this.props.item.desc}</p> */}
        <b>{this.props.item.price}$</b>
        <FaWindowClose className='delete-icon' onClick={()=>this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order