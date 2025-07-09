import React from 'react'
import FileUpload from '../src/components/fileUpload'

function App() {

  // const handleFileSelect = (file) => {
  //   console.log("Selected PDF===>:", file);
  // };

  // const handleFileRemove = (props) => {
  //   console.log("PDF removed===>.",props);
  // };

const HandleDataFiles = (data) => {
console.log("ALL files : ", data);

}

const HandleSingleDataFile = (data) => {
  console.log("single file : ", data);
  
}

  return (
    <div>
      <FileUpload
        isMultiple={true}
        getDataFile={HandleDataFiles}
        label= "MULTIPLE FILES UPLOADER"
      />
      <br />
      <br />
      <br />
      <br />
<hr />

      <FileUpload
        getDataFile={HandleSingleDataFile}
      />
    </div>
  )
}

export default App
