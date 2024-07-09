import { Btn } from "./Buttons"

const CartSummary = ({ btn = false, className="justify-end", subTotal = '$4,500.00', total = '$4,050.00', discountAmt = '$450.00'}) => {
  return (
    <div className={`grid ${className}`}>
      <div className="flex gap-20 text-green-600">
        <div className="grid gap-y-3 text-lg lg:text-xl">
          <p>Sub-total</p>
          <p>Discount</p>
          <p>Total amount</p>
        </div>
        <div className="grid gap-y-3 text-xl lg:text-2xl">
          <h3>{subTotal}</h3>
          <h3>{discountAmt}</h3>
          <h3>{total}</h3>
        </div>
      </div>
      {btn && <div className="pt-14 text-center"><Btn name='Checkout' to='/checkout' /></div>}
    </div>
  )
}

export default CartSummary