'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Example() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://scrapers-5elj.onrender.com/filter')
      // fetch('http://localhost:8000/filter')
      .then((response) => response.json())
      .then((data) => setProducts(data.df))
      .catch((error) => console.error('Error fetching data: ', error))
  }, [])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Trending products
          </h2>
          <a
            href="#"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
          {products.map((product, index) => (
            <div key={index} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product['Image Link']}
                  alt={product['Product Name']}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product['PDP Link']}>
                  <span className="absolute inset-0" />
                  {product['Product Name']}
                </a>
              </h3>
              <p className="text-sm text-gray-500">Brand: {product['Brand']}</p>
              <p className="text-sm text-gray-500">Sizes: {product['Sizes']}</p>
              <p className="text-sm text-gray-500">
                Gender: {product['gender']}
              </p>
              <p className="text-sm text-gray-500">
                Category: {product['product']}
              </p>
              <p className="mt-1 text-sm text-gray-900">
                Original Price: {product['Original Price']}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Discounted Price: {product['Discounted Price']}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Discount: {product['Discount']}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Ratings: {product['Ratings']} ({product['No of Ratings']}{' '}
                ratings)
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
