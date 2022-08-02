import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'select';
  placeholder?: string;
  inputClasses?: string;
  errorClasses?: string;
  labelClasses?: string;
  [x: string]: any;
}

const Input: React.FC<Props> = ({ label, type = 'text', ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name} className={props.labelClasses}>
        {label}
      </label>
      {type !== 'select' && (
        <input
          type={props.type}
          id={props.id}
          className={props.inputClasses}
          {...field}
        />
      )}
      {type === 'select' && (
        <select
          id={props.id}
          className={props.inputClasses}
					{...field}
					{...props}
        />
      )}
      {meta.touched && meta.error && (
        <span className={props.errorClasses}>{meta.error}</span>
      )}
    </>
  );
};

export default Input;
