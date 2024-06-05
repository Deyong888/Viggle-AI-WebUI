import React from 'react';

const Workground: React.FC = () => {
  const sentence = "Experience the power of AI at your fingertips.";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center' , fontSize: '4rem'}}>Free Viggle AI Online</h2>
      <p style={{ textAlign: 'center' }}>{sentence}</p>
      <iframe
        src="https://doubiiu-tooncrafter.hf.space/#component-29"
        style={{
          width: '60vw',
          height: '95vh',
          border: 'none',
          display: 'block',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      />
    </div>
  );
};

export default Workground;

