import React from 'react';

function SearchBox() {
  return (
    <div className="container">

      <div className="input-group">

        <span className="input-group-text bg-white">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>

        <input
          type="text"
          className='form-control py-3'
          placeholder='Eg: How do I open my account, How do i activate F&O...'
        />

      </div>
    </div>
  );
}

export default SearchBox;