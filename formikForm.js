// src/components/formikForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  // Initial values for the form fields
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Submit handler
  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    alert('Registration Successful!');
    resetForm(); // Reset the form after submission
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2>Registration Form (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '10px' }}>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
              />
              <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '12px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '12px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '12px' }} />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ padding: '10px 20px', backgroundColor: '#282c34', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
