import { FormikErrors, useFormik } from 'formik';

interface FormikValues {
  firstName: string;
  lastName: string;
  email: string;
}

const Basic = () => {
  const validate = ({ firstName, lastName, email }: FormikValues) => {
    const errors: FormikErrors<FormikValues> = {};

    !firstName && (errors.firstName = 'Required');
    firstName.length > 10 && (errors.firstName = 'Must contain 1 to 9 letters');
    !lastName && (errors.lastName = 'Required');
    lastName.length > 10 && (errors.lastName = 'Must contain 1 to 9 letters');
    !email && (errors.email = 'Required');
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
      (errors.email = 'Invalid email');

    return errors;
  };

  const { handleChange, values, handleSubmit, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: () => {
        console.log('');
      },
      validate,
    });

  return (
    <>
      <h2 className="text-3xl mb-5">Basic Form</h2>
      <form
        className="flex flex-col border p-5"
        noValidate
        onSubmit={handleSubmit}
      >
        <label htmlFor="firstName" className="text-lg mb-3 mt-5">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={values.firstName}
          className="border p-3 rounded-sm mb-5"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && (
          <span className='text-xs font-semibold text-red-600'>{errors.firstName}</span>
        )}
        <label htmlFor="lastName" className="text-lg mb-3 mt-5">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          className="border p-3 rounded-sm mb-5"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span className='text-xs font-semibold text-red-600'>{errors.lastName}</span>}
        <label htmlFor="email" className="text-lg mb-3 mt-5">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={values.email}
          className="border p-3 rounded-sm mb-5"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span className='text-xs font-semibold text-red-600'>{errors.email}</span>}
        <div className='mt-10'>
          <button
            type="submit"
            className="bg-slate-600 text-white py-5 px-10 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Basic;
