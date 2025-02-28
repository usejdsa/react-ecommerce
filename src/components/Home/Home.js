import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar';
import { Link, useParams } from 'react-router-dom';


function Home({ products, categories, searchQuery }) {
    const { categoryId } = useParams();

    const searchProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).filter(p => !categoryId || p.categoryId == categoryId ||
        categories.some(c => c.id == p.categoryId && c.parent == categoryId));

    const [currentPage, setCurrentPage] = useState(1);

    const pageItems = 8;
    const totalPages = Math.ceil(searchProducts.length / pageItems);

    const indexOfLastProduct = currentPage * pageItems;
    const indexOfFirstProduct = indexOfLastProduct - pageItems;

    const currentProducts = searchProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    function next() {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    function prev() {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };


    return (<div className="h-screen flex flex-col">

        <div className="flex">
            <div className="h-3/4 bg-gray-100 sticky top-0 bottom-0 hidden md:block xl:block ">
                <Sidebar categories={categories} />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-rows-2 gap-10 p-8 min-h-screen '>
                {currentProducts.map((p) => (
                    <Link to={`/products/${p.id}`} key={p.id} className='border rounded-sm overflow-hidden shadow-lg hover:shadow-2xl w-full' >
                        <div className='p-6 flex flex-col gap-4 h-full'>
                            <img src={`/react-ecommerce/images/${p.imageUrl}`} className='w-full h-60 object-contain ' />
                            <div className='flex flex-row justify-between items-center'>
                                <></>
                                <p className='text-green-800 font-bold rounded'>{p.price}$</p>
                            </div>
                            <p className='font-bold text-gray-900'>{p.name}</p>

                        </div>
                    </Link>

                ))}
            </div>
        </div>


        {/* PAGINATION */}

        <div className="mt-6 flex justify-center items-center space-x-2 pb-10">
            <button onClick={prev}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded-sm text-gray-700 hover:bg-gray-300 disabled:opacity-50">Prev</button>

            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 rounded-sm ${currentPage === index + 1
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}>
                    {index + 1}
                </button>
            ))}

            <button
                onClick={next}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded-sm text-gray-700 hover:bg-gray-300 disabled:opacity-50">
                Next
            </button>
        </div>

    </div >
    )
}

export default Home