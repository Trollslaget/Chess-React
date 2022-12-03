import React, {FC, useEffect, useRef, useState } from 'react';
export 	const useComponentDidMount = () => {
    const ref = useRef<any>();
    useEffect(() => {
      ref.current = true;
    }, []);
    return ref.current;
  };

