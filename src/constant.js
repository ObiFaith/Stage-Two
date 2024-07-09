import { prod_img_1, prod_img_2, prod_img_3, prod_img_4, prod_img_5, prod_img_6, prod_img_7, prod_img_8,
  cart_img_1, cart_img_2, cart_img_3, cart_img_4, prod_img_9,
  prod_img_10, prod_img_11, prod_img_12, prod_img_13, prod_img_14, prod_img_15, prod_img_16
} from './assets'

export const navLinks = [
  {name: 'Home', to: '/home'},
  {name: 'Products', to: '/'},
  {name: 'Best Sellers', to: '/sellers'},
  {name: 'Catalog', to: '/catalog'},
  {name: 'Contact Us', to: '/contact'},
]

export const footerLinks = [
  {name: 'Company', links: ['Our Story', 'Products', 'Terms and Conditions', 'Privacy Policy']},
  {name: 'Social media', links: ['Facebook', 'Instagram', 'X (Twitter)']},
  {name: 'Support', links: ['Live chat', 'Contact us']},
]

export const categories = ['Dinnerware', 'Mugs & Teapots', 'Home Decor', 'Vases', 'Jewelry', 'Platters', 'Lanterns']

export const products = [
  {img: prod_img_1, price: 450.00, name: 'Standard pedestal bowl', available: 55, colors: ['#F5F5F5', '#0E605B', '#FFE27B'], isNew: true},
  {img: prod_img_2, price: 250.00, name: '3-piece Calmaria set', available: 12, colors: ['#F5F5F5', '#771F96'], isNew: false},
  {img: prod_img_3, price: 50.00, name: 'Flat clay barry', available: 55, colors: ['#F5F5F5', '#0E605B', '#FFE27B'], isNew: false},
  {img: prod_img_4, price: 80.00, name: 'Deep cantu bowl', available: 5, colors: ['#150707', '#D75252', '#D7FCFC'], isNew: false},
  {img: prod_img_5, price: 100.00, name: 'Piecer bowl', available: 7, colors: ['#AE6FFF', '#746AED', '#A14E11'], isNew: false},
  {img: prod_img_6, price: 250.00, name: 'Tender petals', available: 32, colors: ['#F5F5F5', '#0E605B', '#A91688'], isNew: true},
  {img: prod_img_7, price: 60.00, name: 'Sensei ceramic', available: 35, colors: ['#0E605B', '#CD651A'], isNew: false},
  {img: prod_img_8, price: 75.00, name: 'Melon candy', available: 75, colors: ['#150707', '#D75252', '#D7FCFC'], isNew: false},
]

export const cartProds = [
  {img: cart_img_1, price: 60.00, name: 'Sensei ceramic', available: 35, colors: ['#0E605B'], isNew: false, qty: 2},
  {img: cart_img_2, price: 15.00, name: 'Koncafe earrings', available: 55, colors: ['#F5F5F5', '#FFE27B'], isNew: false, qty: 2},
  {img: cart_img_3, price: 450.00, name: 'Vase de la vase', available: 15, colors: ['#F5F5F5'], isNew: false, qty: 1},
  {img: cart_img_4, price: 250.00, name: 'Tender petals', available: 32, colors: ['#F5F5F5', '#0E605B', '#A91688'], isNew: false, qty: 1},
]