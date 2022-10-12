import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../utils/constant'
export default class Success extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "basket")
      .then((res) => {
        const basket = res.data
        basket.map(function (item) {
          return (axios
            .delete(API_URL + "basket/" + item.id)
            .then((res) => {})
            .catch((error) => console.log(error))
          )
        })
          .catch((error) => console.log(error))
      })
  }
  render() {
    return (
      <div className='flex flex-col items-center'>
        <img src='assets/image/Success.png' width={300} />
        <h2 className='text-xl font-bold text-[#2266A8]'>Muvaffaqiyatli Bajarildi</h2>
        <h4 className='font-semibold'>Buyutma berganingiz uchun raxmat!</h4>
        <Link to={'/'} className=' bg-[#2266A8] text-white py-[5px] px-[10px] rounded-md mt-2'>Qaytish</Link>
      </div>
    )
  }
}

