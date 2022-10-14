import React, { Component } from 'react'
import { Hasil, ListCategories, NavbarComponent, Menus } from '../components/index'
import { API_URL } from '../utils/constant';
import axios from 'axios';
import swal from 'sweetalert';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      currentcategory: 'Milliy taomlar',
      basket: []
    }
  }
  componentDidMount() {
    axios
      .get(API_URL + "products?category.name=" + this.state.currentcategory)
      .then(res => {
        const menus = res.data
        this.setState({ menus })
      })
      .catch(error => {
        console.log(error)
      })

    axios
      .get(API_URL + "basket")
      .then(res => {
        const basket = res.data
        this.setState({ basket })
      })
      .catch(error => {
        console.log(error)
      })
  }
  // componentDidUpdate(prevState) {
  //   if (this.state.basket !== prevState.basket) {
  //     axios
  //       .get(API_URL + "basket")
  //       .then(res => {
  //         const basket = res.data
  //         this.setState({ basket })
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  // }

  getListBasket = () => {
    axios
      .get(API_URL + "basket")
      .then(res => {
        const basket = res.data
        this.setState({ basket })
      })
      .catch(error => {
        console.log(error)
      })
  }

  categoryChange = (value) => {
    this.setState({
      currentcategory: value,
      menu: []
    })
    axios
      .get(API_URL + "products?category.name=" + value)
      .then(res => {
        const menus = res.data
        this.setState({ menus })
      })
      .catch(error => {
        console.log(error)
      })
  }

  basketAdd = (value) => {
    axios
      .get(API_URL + "basket?product.id=" + value.id)
      .then(res => {
        if (res.data.length === 0) {
          const basket = {
            quantity: 1,
            total_price: value.price,
            product: value,
            description: ""
          }
          axios
            .post(API_URL + "basket", basket)
            .then(res => {
              this.getListBasket()
              swal({
                title: "Buyruq bajarildi!",
                text: basket.product.name + " savatga qo'shildi",
                icon: "success",
                button: false,
                timer: 3000,
              });
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          const basket = {
            quantity: res.data[0].quantity + 1,
            total_price: res.data[0].total_price + value.price,
            product: value,
            description: res.data[0].description
          }
          axios
            .put(API_URL + "basket/" + res.data[0].id, basket)
            .then(res => {
              this.getListBasket()
              swal({
                title: "Buyruq bajarildi!",
                text: basket.product.name + " savatga qo'shildi",
                icon: "success",
                button: false,
                timer: 3000,
              });
            })
            .catch(error => {
              console.log(error)
            })

        }
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    const { menus, currentcategory, basket } = this.state
    return (
      <div className="">
        <main className='w-full md:flex px-[10px]'>
          <ListCategories categoryChange={this.categoryChange} currentcategory={currentcategory} />
          <div className='md:w-[55%] w-full p-[10px]'>
            <h4 className='text-black font-bold'>Mahsulotlar</h4>
            <hr />
            <div className='w-full grid gap-[20px] lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-[20px]'>
              {
                menus.map((menu) =>
                  <Menus
                    key={menu.id}
                    menu={menu}
                    basketAdd={this.basketAdd}
                  />
                )
              }
            </div>
          </div>
          <Hasil basket={basket} {...this.props} getListBasket={this.getListBasket}/>
        </main>
      </div>
    )
  }
}


