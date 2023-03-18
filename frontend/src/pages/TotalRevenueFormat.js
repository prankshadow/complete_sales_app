import React from 'react';

const TotalFormat = (props) => {
  const totalRevenue = props.postData.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div>
      <h2>TODAY'S TOTAL REVENUE IS {totalRevenue}</h2>
    </div>
  );
}

export default TotalFormat;

