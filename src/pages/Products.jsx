import { useState } from 'react';
import { BreadCrumb, Card, Category, Hero, Pagination } from '..';
import { CartState } from '../data/Context';

const Products = () => {
	const { state: { products } } = CartState()

	const itemsPerPage = 16;
  const [pageNo, setPageNo] = useState(1);
  const startIndex = (pageNo - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
	const paginatedProducts = products.slice(startIndex, endIndex);
	const maxPageNo = Math.ceil(products.length / itemsPerPage);

	return (
		<>
			<BreadCrumb name="Products" search={true} />
			<Hero />
			<div className="container pb-32">
				<Category />
				<div className="grid grid-cols-1 max-sm:justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 lg:grid-cols-4">
					{paginatedProducts.map(product => (
						<Card key={product.name} {...product} />
					))}
					{maxPageNo > 1 && (
						<Pagination
							key={pageNo}
							maxPageNo={maxPageNo}
							pageNo={pageNo}
							setPageNo={setPageNo}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Products;
