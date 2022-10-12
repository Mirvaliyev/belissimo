import React, { Component } from 'react'
import { API_URL } from '../utils/constant';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils, faCheese } from '@fortawesome/free-solid-svg-icons';
const Icon = ({ name }) => {
  if (name === 'Milliy taomlar') return <FontAwesomeIcon icon={faUtensils} className=" mr-2" />
  if (name === 'Fast Food') return <FontAwesomeIcon icon={faCheese} className=" mr-2" />
  if (name === 'Ichimliklar') return <FontAwesomeIcon icon={faCoffee} className=" mr-2" />
  return <FontAwesomeIcon icon={faUtensils} className=" mr-2" />
}
export default class ListCategories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then(res => {
        const categories = res.data
        this.setState({ categories })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { categories } = this.state
    const { categoryChange, currentcategory } = this.props
    return (
      <div className=' w-1/4 p-[30px]'>
        <h4 className=' font-bold text-black'>Kategoriyalar ro'yxati</h4>
        <hr />
        <ul className='w-full rounded-sm border-[#b0b0b0] border-[1px] border-b-0 mt-[20px]'>
          {
            categories.map((category) => (
              <li
                onClick={() => categoryChange(category.name)}
                className={`${currentcategory == category.name ? "category-active" : ""}` + " cursor-pointer border-b-[1px] border-[#b0b0b0] p-[10px] flex items-center"}
              >
                <Icon name={category.name} /><h4>{category.name}</h4>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
