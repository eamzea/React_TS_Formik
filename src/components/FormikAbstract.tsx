import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as YUP from 'yup';
import Input from './Input';

const FormikAbstract = () => {
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
      <h2 className="text-3xl mb-5">Abstract Components</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
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
          jobType: YUP.string().required('Required'),
        })}
      >
        {() => (
          <Form className="flex flex-col border p-5">
            <Input
              label="First Name"
              name="firstName"
              labelClasses="text-lg mb-3 mt-5"
              inputClasses="border p-3 rounded-sm mb-5"
              errorClasses="text-xs font-semibold text-red-600"
            />
            <Input
              label="Last Name"
              name="lastName"
              labelClasses="text-lg mb-3 mt-5"
              inputClasses="border p-3 rounded-sm mb-5"
              errorClasses="text-xs font-semibold text-red-600"
            />
            <Input
              label="email"
              name="Email"
              labelClasses="text-lg mb-3 mt-5"
              inputClasses="border p-3 rounded-sm mb-5"
              errorClasses="text-xs font-semibold text-red-600"
            />
            <label className="text-lg mb-3 mt-5">
              <Field
                name="terms"
                type="checkbox"
                className="border p-3 rounded-sm mb-5"
              />
              Terms
            </label>
            <ErrorMessage
              name="terms"
              component="span"
              className="text-xs font-semibold text-red-600"
            />
            <Input
              name="jobType"
              label="Job Type"
              labelClasses="text-lg mb-3 mt-5"
              inputClasses="border p-3 rounded-sm mb-5"
              errorClasses="text-xs font-semibold text-red-600"
              type="select"
            >
              <option value="">Select one</option>
              <option value="Front End Developer">Front End Developer</option>
              <option value="Back End Developer">Back End Developer</option>
              <option value="PM">PM</option>
              <option value="Scrum Master">Scrum Master</option>
              <option value="QA">QA</option>
            </Input>
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

export default FormikAbstract;
