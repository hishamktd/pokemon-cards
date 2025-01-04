'use client';

import React, { useState } from 'react';

import { KeyActionEnum } from '@/enum/key-actions';
import { Button } from '@core/components/app-button';


const Buttons = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Button variant="contained" disabled>
        contained disabled
      </Button>
      <Button variant="outlined" disabled>
        outlined disabled
      </Button>
      <Button variant="text" disabled>
        text disabled
      </Button>
      <Button
        variant="contained"
        onClick={() => setLoading((prev) => !prev)}
        loading={loading}
        keyFor={KeyActionEnum.CREATE}
      >
        contained loading
      </Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="text">text</Button>
      <Button variant="contained" color="secondary">
        contained secondary
      </Button>
      <Button variant="outlined" color="secondary">
        outlined secondary
      </Button>
      <Button variant="text" color="secondary">
        text secondary
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => setLoading((prev) => !prev)}
        loading
      >
        contained error loading
      </Button>
      <Button variant="outlined" color="error">
        outlined error
      </Button>
      <Button variant="text" color="error">
        text error
      </Button>
      <Button variant="contained" color="info">
        contained info
      </Button>
      <Button variant="outlined" color="info">
        outlined info
      </Button>
      <Button variant="text" color="info">
        text info
      </Button>
      <Button variant="contained" color="success">
        contained success
      </Button>
      <Button variant="outlined" color="success">
        outlined success
      </Button>
      <Button variant="text" color="success">
        text success
      </Button>
      <Button variant="contained" color="warning">
        contained warning
      </Button>
      <Button variant="outlined" color="warning">
        outlined warning
      </Button>
      <Button variant="text" color="warning">
        text warning
      </Button>
      <Button
        variant="contained"
        color="inherit"
        onClick={() => setLoading(false)}
      >
        contained inherit
      </Button>
      <Button variant="outlined" color="inherit">
        outlined inherit
      </Button>
      <Button variant="text" color="inherit">
        text inherit
      </Button>
      {/* // ** This is a loading button */}
      <Button
        variant="contained"
        disabled
        onClick={() => setLoading((prev) => !prev)}
        loading={loading}
      >
        contained loading disabled
      </Button>
      <Button
        variant="outlined"
        onClick={() => setLoading(false)}
        loading={loading}
        disabled
      >
        outlined loading disabled
      </Button>
      <Button
        variant="text"
        disabled
        onClick={() => setLoading((prev) => !prev)}
        loading
      >
        text loading disabled
      </Button>
      <Button
        variant="contained"
        onClick={() => setLoading((prev) => !prev)}
        loading
      >
        contained loading
      </Button>
      <Button variant="outlined" loading>
        outlined loading
      </Button>
      <Button variant="text" loading>
        text loading
      </Button>
      <Button variant="contained" color="secondary" loading>
        contained secondary loading
      </Button>
      <Button variant="outlined" color="secondary" loading>
        outlined secondary loading
      </Button>
      <Button variant="text" color="secondary" loading>
        text secondary loading
      </Button>
      <Button variant="contained" color="error" loading>
        contained error loading
      </Button>
      <Button variant="outlined" color="error" loading>
        outlined error loading
      </Button>
      <Button variant="text" color="error" loading>
        text error loading
      </Button>
      <Button variant="contained" color="info" loading>
        contained info loading
      </Button>
      <Button variant="outlined" color="info" loading>
        Log out
      </Button>
      <Button variant="text" color="info" loading>
        Log out
      </Button>
      <Button variant="contained" color="success" loading>
        Log out
      </Button>
      <Button variant="outlined" color="success" loading>
        Log out
      </Button>
      <Button variant="text" color="success" loading>
        Log out
      </Button>
      <Button variant="contained" color="warning" loading>
        Log out
      </Button>
      <Button variant="outlined" color="warning" loading>
        Log out
      </Button>
      <Button variant="text" color="warning" loading>
        Log out
      </Button>
      <Button variant="contained" color="inherit" size="large" loading>
        Log out
      </Button>
      <Button variant="outlined" color="inherit" loading>
        Log out
      </Button>
      <Button variant="text" color="inherit" size="large" loading>
        Log out
      </Button>
    </div>
  );
};

export default Buttons;
