import React from 'react';

const DarkTheme = () => {
  return (
    <style jsx global>
      {`
        :root {
          --background-color: rgb(22, 22, 22);
          --link-color: orange;
          --text-color: white;
        }
      `}
    </style>
  );
};

export default DarkTheme;
