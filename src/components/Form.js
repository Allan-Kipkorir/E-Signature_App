import { useState } from "react";
import "./Form.css";

const Form = () => {
  //signature change state
  const [signature, setSignature] = useState(
    "Your Signature will Appear here:"
  );
  if (signature === "") {
    setSignature("Your Signature will Appear here");
  }
  const signatureChangeHandler = (events) => {
    setSignature(events.target.value);
  };
  //Date change State
  const [date, setDate] = useState("Date:");
  const dateChangeHandler = (events) => {
    console.log(events.target.value);
    setDate(events.target.value);
  };
  return (
    <div>
      <h2 className="signature">{signature} </h2>
      <h3 className="date">{date}</h3>
      <form>
        <label>Date:</label>
        <input type="date" id="date" name="date" onChange={dateChangeHandler} />
        <br />
        <br />

        <label>Signature:</label>
        <input
          type="text"
          id="signature"
          name="signature"
          placeholder={signature}
          onChange={signatureChangeHandler}
        />
        <br />
        <br />

        <button type="submit">Refresh</button>
      </form>
    </div>
  );
};
export default Form;
