import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { API_URL } from '../utils/constant'
import axios from 'axios'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class TotalSalary extends Component {
  submitTotalSalary = (total_salary) => {
    const order = {
      total_salary: total_salary,
      menus: this.props.basket
    }
    axios
      .post(API_URL + "orders", order)
      .then((res) => {
        this.props.history.push('/success')
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    const total_salary = this.props.basket.reduce(function (result, item) {
      return result + item.total_price
    }, 0)
    return (
      <div className=' fixed bottom-0 right-0 bg-white shadow-[0px_0px_15px_5px_rgba(0,0,0,0.2)] px-[20px] py-[10px] rounded-t-md flex flex-col'>
        <h2 className='text-[#222]'>
          Jami to'lov <span className='font-bold ml-[30px]'>{total_salary}</span> so'm
        </h2>
        <Link to={'/success'} className=' bg-[#2266A8] rounded-sm text-white p-1 mt-2' onClick={() => this.submitTotalSalary(total_salary)}>
          <FontAwesomeIcon icon={faShoppingCart} className='mr-2' /> Xarid qilish
        </Link>
      </div>
    )
  }
}
