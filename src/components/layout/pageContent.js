import React from 'react';

const PageLayout = (props) => {
    return (
        <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          minHeight: '65vh',
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {props.children}  
        </div>
    )
}

export default PageLayout