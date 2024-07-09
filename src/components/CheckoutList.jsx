import ProdColors from "./ProdColors"

const CheckoutList = ({img, name, price, available, colors, isNew, qty}) => {
  return (
    <div className="flex gap-6">
      <div className="relative w-1/3 lg:border border-[#BAE2E1] rounded-[32px] lg:p-4">
        <img src={img} alt={img.split('/').pop().replace('.png', '')} />
        {isNew && <img className="absolute -top-2 -left-2" src={new_img} alt='new product'/>}
      </div>
      <div className="w-2/3">
        <div className="">
          <div className="text-red-600 pb-2.5">
            <p>{name}</p>
            <p className='text-sm'>Qty: {qty}</p>
          </div>
          <ProdColors colors={colors} className='max-lg:hidden' />
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default CheckoutList