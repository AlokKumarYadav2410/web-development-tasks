import React from 'react'

const SearchBar = ({handleSearch, search, getData}) => {
    return (
        <div className='flex gap-4'>
            <input
                type="text"
                placeholder='search name'
                className='p-2 text-xl border rounded-lg w-full bg-amber-50 outline-emerald-200 active:outline-emerald-600 transition-all duration-200'
                onChange={handleSearch}
                value={search}
            />

            <button onClick={getData} className='px-4 py-2 w-fit bg-emerald-400 rounded-md active:scale-95 cursor-pointer'>Search</button>
        </div>
    )
}

export default SearchBar
