import { BreadCrumb, CheckoutList } from ".."
import { cartProds } from '../constant'

const Checkout = () => {
  return (<>
    <BreadCrumb />
    <div className="container">
      <div className="lg:grid grid-cols-2">
        <div className="grid gap-6 bg-green-200 p-5 rounded-2xl shadow">
          <h2 className="lg:text-xl text-center text-lg text-green-400">Order summary</h2>
          {cartProds.map(prod => <CheckoutList key={prod.name} {...prod} />)}
        </div>
      </div>
      <div className=""></div>
    </div>
  </>
  )
}

export default Checkout