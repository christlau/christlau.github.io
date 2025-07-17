import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Toggle = styled.button`
  margin-left: 10px;
  padding: 6px 8px;
  font-size: 14px;
  border-radius: 4px;
  background: none;
  color: inherit;
  border: 1px solid currentColor;
  cursor: pointer;
`;

const DarkModeToggle = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('prefers-light') === 'true';
    setLight(saved);
    document.body.classList.toggle('light', saved);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.body.classList.toggle('light', next);
    window.localStorage.setItem('prefers-light', next);
  };

  return <Toggle onClick={toggle}>{light ? 'Dark' : 'Light'} Mode</Toggle>;
};

export default DarkModeToggle;
