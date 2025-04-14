'use client';

import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

import { AppDataGrid } from '@core/components/app-table';

const Tables = () => {
  const rows = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 35,
      city: 'New York',
      salary: 85000,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      age: 28,
      city: 'Los Angeles',
      salary: 92000,
    },
    {
      id: 3,
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 42,
      city: 'Chicago',
      salary: 78000,
    },
    {
      id: 4,
      firstName: 'Alice',
      lastName: 'Williams',
      age: 31,
      city: 'Houston',
      salary: 88000,
    },
    {
      id: 5,
      firstName: 'Charlie',
      lastName: 'Brown',
      age: 39,
      city: 'Phoenix',
      salary: 95000,
    },
  ];

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 130,
      editable: true,
    },
    { field: 'lastName', headerName: 'Last Name', width: 130, editable: true },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
      editable: true,
    },
    { field: 'city', headerName: 'City', width: 130, editable: true },
    {
      field: 'salary',
      headerName: 'Salary',
      type: 'number',
      width: 130,
      editable: true,
    },
  ];

  return (
    <AppDataGrid
      rows={rows}
      columns={columns}
      pageSizeOptions={[10]}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 10 },
        },
      }}
    />
  );
};

export default Tables;
