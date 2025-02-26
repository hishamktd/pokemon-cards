'use client';

import React, { useState } from 'react';

import { KeyActionEnum } from '@/enum/key-actions';
import { AppButton } from '@core/components/app-button';

const Buttons = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <AppButton variant="contained" disabled>
        contained disabled
      </AppButton>
      <AppButton variant="outlined" disabled>
        outlined disabled
      </AppButton>
      <AppButton variant="text" disabled>
        text disabled
      </AppButton>
      <AppButton
        variant="contained"
        onClick={() => setLoading((prev) => !prev)}
        loading={loading}
        keyFor={KeyActionEnum.CREATE}
      >
        contained loading
      </AppButton>
      <AppButton variant="outlined">outlined</AppButton>
      <AppButton variant="text">text</AppButton>
      <AppButton variant="contained" color="secondary">
        contained secondary
      </AppButton>
      <AppButton variant="outlined" color="secondary">
        outlined secondary
      </AppButton>
      <AppButton variant="text" color="secondary">
        text secondary
      </AppButton>
      <AppButton
        variant="contained"
        color="error"
        onClick={() => setLoading((prev) => !prev)}
        loading
      >
        contained error loading
      </AppButton>
      <AppButton variant="outlined" color="error">
        outlined error
      </AppButton>
      <AppButton variant="text" color="error">
        text error
      </AppButton>
      <AppButton variant="contained" color="info">
        contained info
      </AppButton>
      <AppButton variant="outlined" color="info">
        outlined info
      </AppButton>
      <AppButton variant="text" color="info">
        text info
      </AppButton>
      <AppButton variant="contained" color="success">
        contained success
      </AppButton>
      <AppButton variant="outlined" color="success">
        outlined success
      </AppButton>
      <AppButton variant="text" color="success">
        text success
      </AppButton>
      <AppButton variant="contained" color="warning">
        contained warning
      </AppButton>
      <AppButton variant="outlined" color="warning">
        outlined warning
      </AppButton>
      <AppButton variant="text" color="warning">
        text warning
      </AppButton>
      <AppButton
        variant="contained"
        color="inherit"
        onClick={() => setLoading(false)}
      >
        contained inherit
      </AppButton>
      <AppButton variant="outlined" color="inherit">
        outlined inherit
      </AppButton>
      <AppButton variant="text" color="inherit">
        text inherit
      </AppButton>
      {/* // ** This is a loading button */}
      <AppButton
        variant="contained"
        disabled
        onClick={() => setLoading((prev) => !prev)}
        loading={loading}
      >
        contained loading disabled
      </AppButton>
      <AppButton
        variant="outlined"
        onClick={() => setLoading(false)}
        loading={loading}
        disabled
      >
        outlined loading disabled
      </AppButton>
      <AppButton
        variant="text"
        disabled
        onClick={() => setLoading((prev) => !prev)}
        loading
      >
        text loading disabled
      </AppButton>
      <AppButton
        variant="contained"
        onClick={() => setLoading((prev) => !prev)}
        loading
      >
        contained loading
      </AppButton>
      <AppButton variant="outlined" loading>
        outlined loading
      </AppButton>
      <AppButton variant="text" loading>
        text loading
      </AppButton>
      <AppButton variant="contained" color="secondary" loading>
        contained secondary loading
      </AppButton>
      <AppButton variant="outlined" color="secondary" loading>
        outlined secondary loading
      </AppButton>
      <AppButton variant="text" color="secondary" loading>
        text secondary loading
      </AppButton>
      <AppButton variant="contained" color="error" loading>
        contained error loading
      </AppButton>
      <AppButton variant="outlined" color="error" loading>
        outlined error loading
      </AppButton>
      <AppButton variant="text" color="error" loading>
        text error loading
      </AppButton>
      <AppButton variant="contained" color="info" loading>
        contained info loading
      </AppButton>
      <AppButton variant="outlined" color="info" loading>
        Log out
      </AppButton>
      <AppButton variant="text" color="info" loading>
        Log out
      </AppButton>
      <AppButton variant="contained" color="success" loading>
        Log out
      </AppButton>
      <AppButton variant="outlined" color="success" loading>
        Log out
      </AppButton>
      <AppButton variant="text" color="success" loading>
        Log out
      </AppButton>
      <AppButton variant="contained" color="warning" loading>
        Log out
      </AppButton>
      <AppButton variant="outlined" color="warning" loading>
        Log out
      </AppButton>
      <AppButton variant="text" color="warning" loading>
        Log out
      </AppButton>
      <AppButton variant="contained" color="inherit" size="large" loading>
        Log out
      </AppButton>
      <AppButton variant="outlined" color="inherit" loading>
        Log out
      </AppButton>
      <AppButton variant="text" color="inherit" size="large" loading>
        Log out
      </AppButton>
    </div>
  );
};

export default Buttons;
