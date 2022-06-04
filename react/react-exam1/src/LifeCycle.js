import React, { useEffect, useState } from 'react';

const UmmountTest = () => {
  useEffect(() => {
    console.log('Mount!');

    return () => {
      // Unmount 시점에 실행되게 됨
      console.log('Unmount!');
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ paddig: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UmmountTest />}
    </div>
  );
};

export default LifeCycle;
