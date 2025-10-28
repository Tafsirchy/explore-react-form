import "./App.css";
import ControlledField from "./Components/ControlledField/ControlledField";
import HookForm from "./Components/ControlledField/HookForm/HookForm";
import FormAction from "./Components/FormAction/FormAction";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import UnControlledField from "./Components/UnControlledField/UnControlledField";

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlledField></UnControlledField> */}
      <HookForm></HookForm>
    </>
  );
}

export default App;
