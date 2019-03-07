// @flow

import * as React from 'react';
import styled from 'styled-components';

import { CheckForm } from '../components/form/CheckForm';

import {
  dummy, columns, filters, formValues, initialValues,
} from './data';

const Main = () => {
  const [form, setForm] = React.useState(initialValues);

  const currentHeaders = columns.filter((c) => {
    if (form[c.value]) {
      return c;
    }
    return null;
  });

  const tableHeaders = currentHeaders.map(c => <th key={c.label}>{c.label}</th>);

  const formEntries = Object.entries(form);

  const currentData = dummy.map((data) => {
    const dataEntries = Object.entries(data);
    return dataEntries.filter((d, i) => (formEntries[i][1]));
  });

  const tableData = currentData.map((data, i) => {
    return (
      <tr key={i}>
        {data.map(d => <td key={d[0]}>{d[1]}</td>)}
      </tr>
    );
  });

  const handleSubmit = values => setForm(values);

  React.useEffect(() => console.log(form));

  return (
    <>
      <CheckForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        formValues={formValues}
      />
      <table>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </>
  );
};

export default Main;
