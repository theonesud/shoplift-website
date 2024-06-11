'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import starIcon from '../../images/star.png'

export default function Example() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // fetch('http://localhost:8000/filter')
    fetch('https://scrapers-5elj.onrender.com/filter')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.df)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data: ', error)
        setIsLoading(false)
      })
  }, [])

  const renderProductsByGenderAndCategory = (gender) => {
    const filteredProducts = products.filter(
      (product) => product.gender === gender,
    )
    const categories = [
      ...new Set(filteredProducts.map((product) => product.product)),
    ]

    return categories.map((category) => (
      <div key={category}>
        <h3 className="mt-8 text-xl font-bold capitalize tracking-tight text-gray-900">
          {category}
        </h3>
        <a
          href="#"
          className="mt-6 font-medium text-indigo-600 hover:text-indigo-500"
        >
          Download complete {category} trends
          <span aria-hidden="true"> &rarr;</span>
        </a>
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {filteredProducts
            .filter((p) => p.product === category)
            .slice(0, 4)
            .map((product, index) => (
              <div key={index} className="group relative">
                <a
                  href={product['PDP Link']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                    <Image
                      src={product['Image Link']}
                      alt={product['Product Name']}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-0 top-0 bg-black bg-opacity-50 p-2 text-sm text-white">
                      Rank: {product['Rank']}
                    </div>
                    <div className="absolute bottom-0 right-0 flex items-center bg-black bg-opacity-50 px-3 py-2 text-sm text-white">
                      <span style={{ marginRight: '4px' }}>
                        {product['Ratings']}
                      </span>
                      <Image
                        src={starIcon}
                        alt="star"
                        width={16}
                        height={16}
                        className="ml-1"
                      />
                      <span style={{ marginLeft: '4px' }}>
                        ({product['No of Ratings']})
                      </span>
                    </div>
                  </div>
                </a>
                <h4 className="mt-4 text-sm text-gray-900">
                  <a href={product['PDP Link']}>{product['Product Name']}</a>
                </h4>
                <p className="text-sm text-gray-700">
                  Brand: {product['Brand']}
                </p>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-600">
                    Price: {product['Discounted Price']}
                  </p>
                  <p className="text-sm text-gray-500">
                    Discount: {product['Discount']}
                  </p>
                  <p className="text-sm text-gray-500">
                    MRP: {product['Original Price']}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    ))
  }

  return (
    <div className="bg-white">
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <div className="text-xl font-bold">Loading...</div>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              New and Trending Products Today
            </h2>
          </div>
          {renderProductsByGenderAndCategory('men')}
          {renderProductsByGenderAndCategory('women')}
        </div>
      )}
    </div>
  )
}
