import { BreadCrumb } from '..'

const Cart = () => {
  return (<>
    <BreadCrumb name='Your Cart' search={true} />
    <div>
      <div className='grid justify-items-center pb-16'>
        <div className="bg-[#DEF1F0] inline-block rounded-2xl text-green-800 py-2.5 px-10 text-lg lg:text-xl text-center">
          <h3>Enjoy Free Shipping on Orders Over $50</h3>
          <h3>You have a 10% discount. Checkout now to redeem it.</h3>
        </div>
      </div>
    </div>
    </>)
}

export default Cart