import { MdAddAlert } from "react-icons/md";
import Alert from "./Components/alert/Alert";
import { CgAdidas, CgBolt, CgCoffee } from "react-icons/cg";

export default function App() {
  return (
    <div className="app">
    <Alert type="alert-danger" header="danger-header" title="Something went wrong!">
      <MdAddAlert />
    </Alert>
  
    <Alert type="alert-success" header="success-header" title="Operation successful!">
      <CgAdidas />
    </Alert>
  
    <Alert type="alert-info" header="info-header" title="Here’s a quick tip!">
      <CgBolt />
    </Alert>
  
    <Alert type="alert-warning" header="warning-header" title="Heads up!">
      <CgCoffee />
    </Alert>
  </div>
  
  
  )
}
