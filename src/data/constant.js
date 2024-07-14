import { prod_img_1, prod_img_2, prod_img_3, prod_img_4, prod_img_5, prod_img_19,
	prod_img_6, prod_img_7, prod_img_8, prod_img_9, prod_img_10, prod_img_11, prod_img_12,
  prod_img_13, prod_img_14, prod_img_15, prod_img_16, prod_img_17, prod_img_18,
} from '../assets';

export const navLinks = [
  {name: 'Home', to: '/'},
  {name: 'Products', to: '/products'},
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
  { id: 1, img: prod_img_1, price: 450.00, name: 'Standard pedestal bowl', available: 55, colors: ['#F5F5F5', '#0E605B', '#FFE27B'], isNew: true},
  { id: 2, img: prod_img_2, price: 250.00, name: '3-piece Calmaria set', available: 12, colors: ['#F5F5F5', '#771F96'], isNew: false},
  { id: 3, img: prod_img_3, price: 50.00, name: 'Flat clay barry', available: 55, colors: ['#F5F5F5', '#0E605B', '#FFE27B'], isNew: false},
  { id: 4, img: prod_img_4, price: 80.00, name: 'Deep cantu bowl', available: 5, colors: ['#150707', '#D75252', '#D7FCFC'], isNew: false},
  { id: 5, img: prod_img_5, price: 100.00, name: 'Piecer bowl', available: 7, colors: ['#AE6FFF', '#746AED', '#A14E11'], isNew: false},
  { id: 6, img: prod_img_6, price: 250.00, name: 'Tender petals', available: 32, colors: ['#F5F5F5', '#0E605B', '#A91688'], isNew: true},
  { id: 7, img: prod_img_7, price: 60.00, name: 'Sensei ceramic', available: 35, colors: ['#0E605B', '#CD651A'], isNew: false},
  { id: 8, img: prod_img_8, price: 75.00, name: 'Melon candy', available: 75, colors: ['#150707', '#D75252', '#D7FCFC'], isNew: false},
	{ id: 9, img: prod_img_9, price: 250.0, name: 'Vased bowl', available: 55, colors: ["#F5F5F5", "#0E605B", "#61A6F8"], isNew: false,},
	{ id: 10, img: prod_img_10, price: 50.0, name: 'Artistic vale', available: 13, colors: ["#F5F5F5", "#0E605B", "#FFE27B"], isNew: true,},
	{ id: 11, img: prod_img_11, price: 20.00, name: 'Rabaun case', available: 5, colors: ["#C68181", "#4528F1", "#7BE7FF"], isNew: true,},
	{ id: 12, img: prod_img_12, price: 70.0, name: 'Flowered cantu', available: 9, colors: ["#150707", "#D75252", "#D7FCFC"], isNew: false,},
	{ id: 13, img: prod_img_13, price: 120.0, name: 'Laniel anged', available: 7, colors: ["#AE6FFF", "#746AED", "#A14E11"], isNew: false,},
	{ id: 14, img: prod_img_14, price: 35.0, name: '3-piece petals', available: 32, colors: ["#F5F5F5", "#0E605B", "#A91688"], isNew: true,},
	{ id: 15, img: prod_img_15, price: 75.0, name: 'Lux Sensei ceramic', available: 15, colors: ["#0E605B", "#CD651A"], isNew: false,},
	{ id: 16, img: prod_img_16, price: 175.0, name: 'Mariane', available: 12, colors: ["#150707", "#D75252", "#D7FCFC"], isNew: false,},
	{ id: 17, img: prod_img_17, price: 25.0, name: 'Tender petals', available: 32, colors: ["#F5F5F5", "#0E605B", "#A91688"], isNew: false,},
	{ id: 18, img: prod_img_18, price: 450.0, name: 'Vase de la vase', available: 15, colors: ["#F5F5F5"], isNew: false,},
	{ id: 19, img: prod_img_19, price: 15.0, name: 'Koncafe earrings', available: 55, colors: ["#F5F5F5", "#FFE27B"], isNew: false,}
]