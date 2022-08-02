import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as YUP from 'yup';

const FormikComponents = () => {
  const { handleSubmit, touched, errors, getFieldProps } = useFormik({
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
      email: YUP.string().required('Required').email(),
    }),
  });

  return (
    <>
      <h2 className="text-3xl mb-5">Formik Components</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
					email: '',
					terms: false,
					jobType: ''

        }}
        onSubmit={() => {
          console.log('');
        }}
        validationSchema={YUP.object({
          firstName: YUP.string()
            .max(15, 'Must contain 1 to 9 letters')
            .required('Required'),
          lastName: YUP.string()
            .max(15, 'Must contain 1 to 9 letters')
            .required('Required'),
          email: YUP.string().required('Required').email(),
					terms: YUP.boolean().oneOf([true], 'Terms should be accepted'),
					jobType: YUP.string().required('Required')
        })}
      >
        {formik => (
          <Form className="flex flex-col border p-5">
            <label htmlFor="firstName" className="text-lg mb-3 mt-5">
              First Name
            </label>
            <Field name="firstName" type="text" className="border p-3 rounded-sm mb-5"/>
            <ErrorMessage name="firstName" component='span' className='text-xs font-semibold text-red-600'/>
            <label htmlFor="lastName" className="text-lg mb-3 mt-5">
              Last Name
            </label>
            <Field name="lastName" type="text" className="border p-3 rounded-sm mb-5"/>
            <ErrorMessage name="lastName" component='span' className='text-xs font-semibold text-red-600'/>
            <label htmlFor="email" className="text-lg mb-3 mt-5">
              Email
            </label>
            <Field name="email" type="text" className="border p-3 rounded-sm mb-5"/>
            <ErrorMessage name="email" component='span' className='text-xs font-semibold text-red-600'/>
            <label className="text-lg mb-3 mt-5">
            	<Field name="terms" type="checkbox" className="border p-3 rounded-sm mb-5"/>
              Terms
            </label>
            <ErrorMessage name="terms" component='span' className='text-xs font-semibold text-red-600'/>
            <label className="text-lg mb-3 mt-5">
              Job Type
            </label>
						<Field name="jobType" type="text" as="select" className="border p-3 rounded-sm mb-5">
							<option value="">Select one</option>
							<option value="Front End Developer">Front End Developer</option>
							<option value="Back End Developer">Back End Developer</option>
							<option value="PM">PM</option>
							<option value="Scrum Master">Scrum Master</option>
							<option value="QA">QA</option>
							</Field>
            <ErrorMessage name="jobType" component='span' className='text-xs font-semibold text-red-600'/>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-slate-600 text-white py-5 px-10 rounded-lg"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormikComponents;
