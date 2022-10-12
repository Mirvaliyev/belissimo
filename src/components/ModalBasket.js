import { faClose, faMinus, faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ModalBasket = ({
    handleClose,
    basketDetails,
    showModal,
    quantity,
    description,
    plusBasket,
    minusBasket,
    handleSubmit,
    changeHandler,
    totalPrice,
    deleteOrder
}) => {
    return (
        <div>
            {
                showModal
                    ?
                    <div className=' fixed w-full h-full top-0 left-0 flex items-start justify-center pt-5 z-50 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm'>
                        <div className='w-[350px] p-3 bg-white shadow-xl rounded-sm relative'>
                            <div className=' mb-3'>
                                {
                                    basketDetails.product.name + " - "
                                }
                                <strong>
                                    (
                                    {
                                        basketDetails.product.price
                                    }
                                    .so'm
                                    )
                                </strong>
                            </div>
                            <div className=' border-[1px] border-[rgb(210,210,210)] p-[10px]'>
                                <h2 className=' border-b-[1px] border-gray-300'>
                                    Jami to'lov :
                                    <br/>
                                    <strong className='text-sm'>
                                        {
                                            " " + totalPrice
                                        }
                                        .so'm
                                    </strong>
                                </h2>
                                <form className='mt-3' onSubmit={handleSubmit}>
                                    <div className='border-b-[1px] border-gray-300 pb-[10px]'>
                                        <label>Miqdori :</label>
                                        <br />
                                        <button onClick={minusBasket} type='button' className='bg-[#0c32b1] px-1 rounded-sm text-white mr-2'>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <strong>{quantity}</strong>
                                        <button onClick={plusBasket} type='button' className='mt-3 bg-[#0c32b1] px-1 rounded-sm text-white ml-2'>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                    <div className='mt-3'>
                                        <label>Kalit so'z :</label>
                                        <textarea
                                            placeholder="Kalit so'zlar"
                                            className="p-1 text-sm tracking-[1px] outline-none placeholder:text-sm mt-2 w-full border-[1px] border-gray-300 rounded-sm"
                                            value={description}
                                            onChange={(event)=>changeHandler(event)}
                                        ></textarea>
                                        <button className='bg-[rgb(6,64,100)] p-1 px-3 rounded-sm text-white mt-2 text-sm'>
                                            <FontAwesomeIcon icon={faSave} className='mr-1' /> Saqlash
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className='pt-3 flex justify-end'>
                                <button className='text-sm p-1 px-3 rounded-sm bg-orange-500' onClick={()=>deleteOrder(basketDetails.id)}>
                                    <FontAwesomeIcon icon={faTrash} />  O'chirish
                                </button>
                            </div>
                            <button className=' absolute right-0 top-0 bg-[rgb(200,200,200)] p-1 px-3 rounded-sm' onClick={handleClose}>
                                <FontAwesomeIcon icon={faClose} className=' text-sm' />
                            </button>
                        </div>
                    </div>
                    :
                    ""
            }
        </div>
    )
}

export default ModalBasket;