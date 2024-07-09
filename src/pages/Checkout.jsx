import { BreadCrumb, Btn, CartSummary, CheckoutList } from ".."
import { cartProds } from '../constant'

const Checkout = () => {
  return (<>
    <BreadCrumb name='Checkout page' back={true} />
    <div className="container pb-36">
      <div className="lg:grid grid-cols-2">
        <div className="rounded-[2rem] shadow-lg p-8 max-lg:p-2.5 max-lg:pt-2.5">
          <div className="grid gap-6 bg-green-200 p-5 rounded-2xl">
            <h2 className="lg:text-2xl text-center text-xl text-green-400">Order summary</h2>
            {cartProds.map(prod => <CheckoutList key={prod.name} {...prod} />)}
          </div>
          <CartSummary className="justify-center py-9" />
          <p className="text-red-400 text-center">You enjoyed the free shipping bonus for this order</p>
        </div>
        <div className="">
          <div className="text-center">
            <div className=""> <Btn name='Pay with' /> </div>
            <div className="py-8"> <Btn name='Pay with' /> </div>
            <div className="flex gap-3">
              <div className="underline"></div>
              <div className="underline"></div>
              <div className="underline"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Checkout