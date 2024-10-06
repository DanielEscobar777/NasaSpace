import React from 'react';

const Slide5 = () => {
  return (
    <div className="flex flex-col items-center p-4" style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#2980b9' }}>
        Información Sensores
      </h2>
      <iframe
        src="https://dz7nzl1k-5173.brs.devtunnels.ms/"
        title="Contenido Interactivo"
        style={{
          width: '100%',
          height: '600px',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      ></iframe>
    </div>
  );
};

export default Slide5;
