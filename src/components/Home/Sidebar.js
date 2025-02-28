import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ categories }) {

    const mainCategories = categories.filter(category => category.parent === null);

    function getSubcategories(parentId) {
        return categories.filter(category => category.parent === parentId);
    };

    return (
        <aside className="h-screen w-full sm:w-64 p-4 bg-gray-200 sticky top-0 sm:h-screen overflow-hidden ">
            <h2 className="font-bold text-xl mb-4">Product Categories</h2>
            <ul>
                {mainCategories.map(category => {
                    const subcategories = getSubcategories(category.id);
                    return (
                        <li key={category.id} className="my-2">
                            <Link
                                to={`/category/${category.id}`}
                                className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-indigo-600"
                            >
                                {category.name}
                            </Link>
                            {subcategories.length > 0 && (
                                <ul className="ml-4">
                                    {subcategories.map(subcategory => (
                                        <li key={subcategory.id} className="my-2">
                                            <Link
                                                to={`/category/${subcategory.id}`}
                                                className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-indigo-600" >
                                                {subcategory.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </aside>
    )
}

export default Sidebar