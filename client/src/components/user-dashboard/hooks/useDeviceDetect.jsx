import { useEffect, useState } from 'react';

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobile = /Mobi/.test(userAgent);
    setIsMobile(mobile);
  }, []);

  return {
    isMobile
  };
};

export default useDeviceDetect;
