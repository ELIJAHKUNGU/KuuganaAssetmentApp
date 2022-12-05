import "./App.css";
import Banner from "./components/banner/banner";
import FormsInputs from "./components/formsInput/forminputs";
export default function App() {
 

  return (
    <div className="App">
      <Banner/>
      <div className="form-details">
       <FormsInputs/>
      </div>
     
    </div>
  );
}
