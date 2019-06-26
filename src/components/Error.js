import React from 'react';

const Error = () => {
  return (
    <div>
      <iframe
        src="https://giphy.com/embed/6uGhT1O4sxpi8"
        title="pulp fiction"
        width="480"
        height="240"
        frameBorder="0"
        class="giphy-embed"
      />
      <h2 style={{ fontSize: '5rem', color: 'red' }}>404 Error</h2>
      <p style={{ fontSize: '1.75rem' }}>
        The page you are looking for is not found
      </p>
    </div>
  );
};

export default Error;
