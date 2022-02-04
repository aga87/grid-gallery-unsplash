import React from 'react';
import Masonry from 'react-masonry-css';

const MasonryGrid: React.FC = ({ children }) => {
  const breakpointColumns = {
    default: 6,
    2000: 6,
    1700: 5,
    1400: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className='masonry-grid'
      columnClassName='masonry-grid__column'
    >
      {/* Assign a class to each child (grid item) to avoid reliance on a specific child tag selector for styling */}
      {React.Children.map(children, child => (
        <div className='masonry-grid__item'>{child}</div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;
