import DataTable from "./components/datatable/DataTable";
import data from "./assets/SampleData.json";
import Modal from "./components/modal";
import React, { useEffect, useState } from "react";
import ModalForm from "./components/modalForm";
import { HeaderProvider, UserContext } from "./components/headerContext";

function App() {
  const [isModalOpen, setModalOpen] = useState(false); 
  const headers = [
    {
      render: (item) => item?.id,
      lebel: "ID",
      key: "id",
      searching : false,
      sorting : false
    },
    {
      render: (item) => item?.first_name,
      lebel: "First Name",
      key: "first_name",
      searching : true,
      sorting : true
    },
    {
      render: (item) => item?.last_name,
      lebel: "Last Name",
      key: "last_name",
      searching : false,
      sorting : true
    },
    {
      render: (item) => item?.email,
      lebel: "Email",
      key: "email",
      searching : false,
      sorting : true
    },
    {
      render: (item) => item?.gender,
      lebel: "Gender",
      key: "gender",
      searching : true,
      sorting : true
    },
    {
      render: (item) => item?.mobile,
      lebel: "Mobile",
      key: "mobile",
      searching : true,
      sorting : true
    }
  ];
  
  const [dataHeaders , setDataHeaders] = useState(headers)
  
  return (
    <div className="App" style={{'margin' : '10px'}}>
      <UserContext.Provider value={{dataHeaders , setDataHeaders}}>

      <button className="btn btn-primary" style={{'margin-top' : '10px'}} onClick={() => setModalOpen(true)}>Update Table Configuration</button>

      {isModalOpen && dataHeaders.length>0 && (
        <Modal onClose={() => setModalOpen(false)}>
          <h2>Update Table Configuration</h2>
          <br></br>
          {dataHeaders.map((item ,index) => (
            <ModalForm headerRow = {item} indexOFHeader = {index} onModalClose= {() => setModalOpen(false)} ></ModalForm>
          ))}
        </Modal>
      )}
   
     {dataHeaders.length>0 && ( 
         <DataTable row={data} headers={dataHeaders} />
     )} 

</UserContext.Provider>
    </div>
  );
}

export default App;
