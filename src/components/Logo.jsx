import { logo } from "../assets"

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className=""><img src={logo} alt="logo" /></div>
      <span className="text-lg md:text-xl lg:text-2xl text-green-600">MivaMart</span>
    </div>
  )
}

export default Logo