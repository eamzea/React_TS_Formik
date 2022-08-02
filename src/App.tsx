import Basic from './components/Basic';
import DynamicForm from './components/DynamicForm';
import FormikAbstract from './components/FormikAbstract';
import FormikComponents from './components/FormikComponents';
import Yup from './components/Yup';

function App() {
  return (
    <main className="container mx-auto bg-slate-100 py-10">
      <h1 className="text-4xl mb-5">Formik Form</h1>
      <section className="max-w-screen-lg mx-auto grid grid-flow-row gap-y-10">
        <Basic />
        <Yup />
        <FormikComponents />
        <FormikAbstract />
        <DynamicForm/>
      </section>
    </main>
  );
}

export default App;
