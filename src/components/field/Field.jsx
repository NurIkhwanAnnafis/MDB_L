import React from 'react';
import { Input } from 'reactstrap';

export const required = value => (value ? undefined : 'Required');

export const emailValid = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const renderField = ({
  input,
  placeholder,
  type,
  disabled,
  noLabel,
  label,
  requiredStar,
  id,
  maxLength,
  meta: { touched, error, warning }
}) => (
  <div>
    <div className="form-group">
      {!noLabel && (
        <span htmlFor={id}>
          {label}
          {requiredStar === true ? (
            <span className="text-required"> *</span>
          ) : (
            ''
          )}
        </span>
      )}

      <Input
        {...input}
        id={id}
        defaultValue=""
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        disabled={disabled}
      />
      {touched &&
        ((error && <span className="form-error">{error}</span>) ||
          (warning && <span className="form-error">{warning}</span>))}
    </div>
  </div>
);
