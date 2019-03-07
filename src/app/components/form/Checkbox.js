// @flow

import * as React from 'react'

export const Checkbox = (props) => {
  const { field, form, label } = props;
  return (
    <div>
      {label}
      <input type="checkbox" {...field} {...props} checked={field.value} />
    </div>
  );
}
