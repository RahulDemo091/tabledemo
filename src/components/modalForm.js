import React, { useEffect, useState } from 'react';
import { UserContext } from './headerContext';

const containerStylePopup = {
    'position': 'relative',
    'display': 'block',
    'padding-top': '42px',
    'padding-left': '1.25rem',
}

function ModalForm(props) {
  const {dataHeaders , setDataHeaders} = React.useContext(UserContext);  
  const [inputValue, setInputValue] = useState(props.headerRow.lebel);
  const [toggle1, setToggle1] = useState(props.headerRow.searching);
  const [toggle2, setToggle2] = useState(props.headerRow.sorting);

  useEffect(() => {
    console.log("skdcbskjdbckjsdbckjsbdckjsbdckjsbdckjscsdcbsjkbdc" , dataHeaders )
   // setHeaderDetails(headers)
  }, []);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleToggle1Change = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2Change = () => {
    setToggle2(!toggle2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted' , props.indexOFHeader);
    dataHeaders[props.indexOFHeader].lebel = inputValue
    dataHeaders[props.indexOFHeader].searching = toggle1
    dataHeaders[props.indexOFHeader].sorting = toggle2
    
    console.log('Form submitted' , dataHeaders);
    setDataHeaders([...dataHeaders])
    props.onModalClose();
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-auto">
        <label htmlFor="inputField" className="col-form-label">Header Label:</label>
        <input
          type="text"
          className="form-control"
          id="inputField"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-auto">
        <div style={containerStylePopup}>            
          <input
            type="checkbox"
            className="form-check-input"
            id="toggle1"
            checked={toggle1}
            onChange={handleToggle1Change}
          />
          <label className="form-check-label" htmlFor="toggle1">Searching</label>
        </div>
      </div>
      <div className="col-auto">
        <div style={containerStylePopup}>
          <input
            type="checkbox"
            className="form-check-input"
            id="toggle2"
            checked={toggle2}
            onChange={handleToggle2Change}
          />
          <label className="form-check-label" htmlFor="toggle2">Sorting</label>
        </div>
      </div>
      <div className="col-auto" style={containerStylePopup}>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}


export default ModalForm;
