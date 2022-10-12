import React, { Component } from 'react'
import ModalBasket from './ModalBasket'
import TotalSalary from './TotalSalary'
import axios from 'axios'
import { API_URL } from '../utils/constant'
import swal from 'sweetalert'
class Hasil extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            basketDetails: false,
            quantity: 0,
            description: '',
            totalPrice: 0
        }
    }
    handleShow = (menubasket) => {
        this.setState({
            showModal: true,
            basketDetails: menubasket,
            quantity: menubasket.quantity,
            totalPrice: menubasket.total_price,
            description: menubasket.description,
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    plusBasket = () => {
        this.setState({
            quantity: this.state.quantity + 1,
            totalPrice: this.state.basketDetails.product.price * (this.state.quantity + 1)
        })
    }

    minusBasket = () => {
        if (this.state.quantity !== 1) {
            this.setState({
                quantity: this.state.quantity - 1,
                totalPrice: this.state.basketDetails.product.price * (this.state.quantity - 1)
            })
        }
    }

    changeHandler = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.handleClose()
        const data = {
            quantity: this.state.quantity,
            total_price: this.state.totalPrice,
            product: this.state.basketDetails.product,
            description: this.state.description
        }
        axios
            .put(API_URL + "basket/" + this.state.basketDetails.id, data)
            .then(res => {
                swal({
                    title: "Yangilash Bajarildi!",
                    text: data.product.name + " buyurtmasi yangilandi!",
                    icon: "success",
                    button: false,
                    timer: 3000,
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    deleteOrder = (id) => {
        this.handleClose()
        axios
            .delete(API_URL + "basket/" + id)
            .then(res => {
                swal({
                    title: "Buyurtma olib tashlandi!",
                    text: "Ushbu buyurtma savatdan olib tashlandi!",
                    icon: "error",
                    button: false,
                    timer: 3000,
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { basket } = this.props
        return (
            <div className=' w-1/4 p-[30px]'>
                <h4 className=' font-bold text-black'>Natijalar</h4>
                <hr />
                <ul className='w-full'>
                    {
                        basket.map((menubasket) => (
                            <li onClick={() => this.handleShow(menubasket)} className=' border-b-[1px] border-gray-300 cursor-pointer p-[10px] flex items-center justify-between hover:bg-gray-200'>
                                <div className='flex items-center'>
                                    <span className=' rounded-full bg-[#0f4] w-[30px] aspect-square flex items-center justify-center'>
                                        {menubasket.quantity}
                                    </span>
                                    <h4 className='pl-[15px]'>
                                        {menubasket.product.name}
                                        <br />
                                        <strong className=' text-[13px]'>{menubasket.product.price}.so'm</strong>
                                    </h4>
                                </div>
                                <div className=''>
                                    <strong className=' text-[16px]'>{menubasket.total_price}.so'm</strong>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <ModalBasket
                    {...this.state}
                    handleClose={this.handleClose}
                    plusBasket={this.plusBasket}
                    minusBasket={this.minusBasket}
                    changeHandler={this.changeHandler}
                    handleSubmit={this.handleSubmit}
                    deleteOrder={this.deleteOrder}
                />
                <TotalSalary basket={basket} {...this.props} />
            </div>
        )
    }
}
export default Hasil