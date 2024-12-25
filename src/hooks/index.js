import { useState, useEffect } from 'react';

const useSmallDevice = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 786);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallDevice;
};

const useLargeDevice = () => {
  const [isLargeDevice, setIsLargeDevice] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeDevice(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isLargeDevice;
};

const useMediumDevice = () => {
  const [isMediumDevice, setIsMediumDevice] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMediumDevice(window.innerWidth >= 786 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMediumDevice;
};

const useHideOnScroll = () => {
  const [isFooterHide, setIsFooterHide] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currPos = window.pageYOffset;
      setIsFooterHide(prevScrollPos < currPos);
      prevScrollPos = currPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return isFooterHide;
};

export { useSmallDevice, useMediumDevice, useLargeDevice, useHideOnScroll };
