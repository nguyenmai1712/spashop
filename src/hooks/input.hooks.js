import React, { useEffect, useState, } from 'react';
import Resizer from "react-image-file-resizer";

export const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      90,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue(''),
    onChange: (event) => {
      setValue(event.target.value);
    },
  };
};

export const useCheckbox = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue(false),
    onChange: (event) => {
      setValue(event.target.checked);
    },
  };
};

export const useAvatar = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    onChange: async (event) => {
      try {
        const file = event.target.files[0];
        const image = await resizeFile(file);
        setValue(image);
        console.log(image);
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", handleResize)
  }, []);
  return size;
};

export const useScrollWindow = () => {
  const [screenHeight, setScreenHeight] = React.useState({ screenHeight: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScreenHeight({ screenHeight: window.pageYOffset });
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return screenHeight;
}

export default useInput;
