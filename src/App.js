import 'bootstrap/dist/css/bootstrap.min.css';
import FormList from './component/FormList';
import FormListButton from './component/FormListButton';
import FormListInput from './component/FormListInput';
import FormListList from './component/FormListList';
import LoginComponent from './component/LoginComponent';

export default function App() {


  return (
    <>
      <FormList/>
      <FormListButton/>
      <FormListInput/>
      <FormListList/>
    </>
  );
}