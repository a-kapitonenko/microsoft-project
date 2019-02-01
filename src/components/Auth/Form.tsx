import React from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'semantic-ui-react';


type ComponentProps = {};

const Basic: React.SFC<ComponentProps> = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    // validate={values => {
    //   let errors: any = {};

    //   if (!values.email) {
    //     errors.email = 'Required';
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //   ) {
    //     errors.email = 'Invalid email address';
    //   }
    //   return errors;
    // }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
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
            placeholder='Email'
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </Form.Field>
        {errors.email && touched.email && errors.email}
        <Form.Field>
          <label>Password</label>
          <input
            placeholder='Last Name'
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
  </Formik>
);

export default Basic;
