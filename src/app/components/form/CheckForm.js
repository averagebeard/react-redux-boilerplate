// @flow

import * as React from 'react';
import { Field, Form, Formik } from 'formik';

import { Checkbox } from './Checkbox';

export const CheckForm = (props) => {
  const { formValues, handleSubmit, initialValues } = props;

  const renderFields = formValues.map((fv) => {
    const { label, value } = fv;
    return (
      <Field component={Checkbox} name={value} label={label} key={value} />
    );
  });

  return (
    <Formik initialValues={initialValues} onSubmit={values => handleSubmit(values)}>
      {() => (
        <Form>
          {renderFields}
          <button type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};
