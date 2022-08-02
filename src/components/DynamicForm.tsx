import { Form, Formik } from 'formik';
import * as YUP from 'yup';
import formJson from '../data/custom-form.json';
import Input from './Input';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = YUP.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }

    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 2,
        `Mínimo de ${(rule as any).value || 2} caracteres`
      );
    }

    if (rule.type === 'email') {
      schema = schema.email(`Revise el formato del email`);
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = YUP.object({ ...requiredFields });

const DynamicForm = () => {
  return (
    <div>
      <h2 className="text-3xl mb-5">Dynamic Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {formik => (
          <Form noValidate className="flex flex-col border p-5">
            {formJson.map(({ type, name, placeholder, label, options }) => (
              <Input
                labelClasses="text-lg mb-3 mt-5"
                inputClasses="border p-3 rounded-sm mb-5"
                errorClasses="text-xs font-semibold text-red-600"
                label={label}
                type={type as 'text' | 'email' | 'password' | 'select'}
                name={name}
                placeholder={placeholder}
              />
            ))}

            <button
              type="submit"
              className="bg-slate-600 text-white py-5 px-10 rounded-lg"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
