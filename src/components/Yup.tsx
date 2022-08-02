import { useFormik } from 'formik';
import * as YUP from 'yup';

const Yup = () => {
  const { handleSubmit, touched, errors, getFieldProps } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: () => {
        console.log('');
      },
      validationSchema: YUP.object({
        firstName: YUP.string()
          .max(15, 'Must contain 1 to 9 letters')
          .required('Required'),
        lastName: YUP.string()
          .max(15, 'Must contain 1 to 9 letters')
          .required('Required'),
        email: YUP.string().required('Required').email()
      }),
		});
	
  return (
    <>
      <h2 className="text-3xl mb-5">YUP Validation Form</h2>
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
          className="border p-3 rounded-sm mb-5"
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && (
          <span className="text-xs font-semibold text-red-600">
            {errors.firstName}
          </span>
        )}
        <label htmlFor="lastName" className="text-lg mb-3 mt-5">
          Last Name
        </label>
        <input
          type="text"
          className="border p-3 rounded-sm mb-5"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && (
          <span className="text-xs font-semibold text-red-600">
            {errors.lastName}
          </span>
        )}
        <label htmlFor="email" className="text-lg mb-3 mt-5">
          Email
        </label>
        <input
          type="text"
          className="border p-3 rounded-sm mb-5"
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && (
          <span className="text-xs font-semibold text-red-600">
            {errors.email}
          </span>
        )}
        <div className="mt-10">
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

export default Yup;
