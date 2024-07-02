import React from 'react'
//check new
export default function Ourservices() {
  return (
    <div>
    <div className=' justify-between bg-zinc-900 h-96'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-orange-700 text-3xl font-normal'>
            Our Services
          </h1>
          <h2 className='text-3xl font-bold text-white'>
            We produce the best raw chicken for you

          </h2>
          <p className='text-gray-400 text-sm font-serif'>
            We deliver the best quality, fresh perfectly chilled raw chicken at your doorstep
          </p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvYzUVwF9XN-sU_Yzz30A8P6IJ8uxyjAjUw&s" className="rounded-s-3xl" alt="raw chicken" />

          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">



            <div className="flex items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCV7W57fekF1y7gvJo3TFtxY0TWYSAwNAuCXDnX22cT6DnGNPPUfctp8sl7u5-THNs7qs&usqp=CAU" alt="Image 1" className="w-12 h-12 rounded-full mr-2" />
              <span className='text-white'>No Exchanges</span>
            </div>
            <div className="flex items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahsOUpyGc8i7u31Xpo1VWozQdSCCmvS6upg&s" alt="Image 2" className="w-12 h-12 rounded-full mr-2" />
              <span className='text-white'>No Refunds</span>
            </div>
            <div className="flex items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzA-8GxsvbtDw5d8jCKA4T4qsIiYVFDEN_w&s" alt="Image 1" className="w-12 h-12 mr-2 rounded-full" />
              <span className='text-white'>Free Shipping</span>
            </div>
            <div className="flex items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4cGcXpJ_WyPWoXfhp5xYJ_lUXXF7ar2wtg&s" alt="Image 2" className="w-12 h-12 mr-2 rounded-full" />
              <span className='text-white'>Fast delivery</span>
            </div>

          </div>


        </div>


      </div>
      </div>
      )
}
