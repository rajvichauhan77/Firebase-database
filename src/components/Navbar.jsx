import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/authSlice'
import { showCart } from '../features/cartSlice'

const Navbar = () => {

    const dispatch = useDispatch()

    let cartLength = useSelector(state=> state.cart.cartLength)
    let auth = useSelector(state=> state.auth.auth)


  return (
    <div>
        <div className="shadow p-3">
            <div className="max-w-7xl mx-auto flex justify-between">
                <h1 className="text-2xl font-bold">Showp</h1>
                    <div className='flex gap-3'>

                <button onClick={()=> dispatch(showCart())} className='py-1 px-4 rounded-2xl border hover:bg-slate-50'>Cart: {cartLength} 👜</button>

                {/* <button onClick={()=> dispatch(logout())} className='py-1 px-4 bg-red-600 rounded-2xl border hover:bg-red-700'>logout</button> */}
                <button onClick={()=> dispatch(logout())} className=''>
                    <img className='w-10 rounded-full' src={auth.img} alt="" />
                </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar