import { BreadCrumb, CartSummary, CheckoutList } from ".."
import { cartProds } from '../constant'

const Checkout = () => {
  return (<>
    <BreadCrumb />
    <div className="container pb-36">
      <div className="lg:grid grid-cols-2">
        <div className="rounded-[2rem] shadow-lg max-lg:p-2.5 max-lg:pb-8">
          <div className="grid gap-6 bg-green-200 p-5 max-lg:rounded-2xl">
            <h2 className="lg:text-2xl text-center text-xl text-green-400">Order summary</h2>
            {cartProds.map(prod => <CheckoutList key={prod.name} {...prod} />)}
          </div>
          <CartSummary className="justify-center py-9" />
          <p className="text-red-400 text-center">You enjoyed the free shipping bonus for this order</p>
        </div>
      </div>
      <div className=""></div>
    </div>
  </>
  )
}

export default Checkout