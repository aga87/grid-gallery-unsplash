import React from 'react';

type ResponsiveImagePlaceholderProps = {
  width: number;
  height: number;
};
const ResponsiveImagePlaceholder = ({
  width,
  height
}: ResponsiveImagePlaceholderProps) => {
  const aspectRatioPercentage = `${(height / width) * 100}%`;

  return (
    <div
      style={{
        width: '100%',
        paddingBottom: aspectRatioPercentage,
        backgroundColor: '#cfd1d3'
      }}
    />
  );
};

export default ResponsiveImagePlaceholder;
