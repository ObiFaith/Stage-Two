import { Link } from "react-router-dom"
import { cart, current, wishlist } from "../assets"

const Card = ({img, name, price, available, colors, status}) => {
  return (
    <div className="border grid gap-6 border-[#BAE2E1] rounded-[32px] p-4">
      <div className=""><img src={img} alt={img.split('/').pop().replace('.png', '')} /></div>
      <div className="grid gap-1">
        <h1 className="lg:text-xl text-lg text-green-500">${price}</h1>
        <div className="text-red-600">
          <div className="flex justify-between items-center">
            <p>{name}</p>
            <img src={wishlist} alt="add to wishlist" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img src={current} alt="current" />
              <p>{available} pieces available</p>
            </div>
            <Link to='/cart'><img src={cart} alt="add to cart" /></Link>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {colors.map(color => (
          <div style={{backgroundColor: `${color}`}} key={color} className='p-2.5 shadow rounded-full'></div>))}
      </div>
    </div>
  )
}

export default Card