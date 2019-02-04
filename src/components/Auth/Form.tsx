import React from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'semantic-ui-react';

type ComponentProps = {
  submittingError: string;
  onSubmit: any;
};

const Basic: React.SFC<ComponentProps> = ({ submittingError, onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input
                required
                placeholder='Email Address'
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Form.Field>
            {(errors.email && touched.email && errors.email) || submittingError}
            <Form.Field>
              <label>Password</label>
              <input
                placeholder='Password'
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Form.Field>
            {errors.password && touched.password && errors.password}
            <Button type='submit' disabled={isSubmitting}>Submit</Button>
          </Form>
        )}
    </Formik >
  );
};

export default Basic;
