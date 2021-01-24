import React from 'react';

const SearchBox = ({Searchfield,SearchChange}) => {

    return (
        <div className='pa2'>
            <input
            className=' pa2 bd3 b--green tc bg-light-green'
                type="search"
                placeholder="Search Robots"
             onChange= {SearchChange}
            />

        </div>

    );

}

export default SearchBox;

