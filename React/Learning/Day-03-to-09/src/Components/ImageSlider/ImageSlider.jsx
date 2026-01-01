import React from 'react'

const ImageSlider = ({handlePrev, currentIndex, visibleImages, handleNext}) => {
    return (
        <div className='flex w-full justify-center items-center gap-4'>
            <div onClick={handlePrev} className={`px-2 sm:px-4 py-2 text-xs sm:text-sm bg-emerald-500 rounded-lg text-amber-100 ${currentIndex <= 0 ? 'cursor-not-allowed' : 'cursor-pointer active:scale-95'}`}>Left</div>
            <div className='flex gap-4 justify-center'>
                {visibleImages.map((img, idx) => (
                    <div className='w-full relative' key={idx}>
                        <h2 className='absolute top-2 left-2 text-amber-200'>{img.id}</h2>
                        <img src={img} alt="" className='w-full object-cover object-center rounded-xl bg-amber-300' />
                    </div>
                ))}
            </div>
            <div onClick={handleNext} className='px-2 sm:px-4 py-2 text-xs sm:text-sm bg-emerald-500 rounded-lg text-amber-100 active:scale-95 cursor-pointer'>Right</div>
        </div>
    )
}

export default ImageSlider
