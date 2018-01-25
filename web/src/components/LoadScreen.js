import React from 'react'

const LoadScreen = (props) => {
  return <div className="loadscreen">
      {/* <h1>Loading...</h1> */}
      <div class="spinner">
        <div class="bounce1" />
        <div class="bounce2" />
        <div class="bounce3" />
      </div>
    </div>;
}

export default LoadScreen;