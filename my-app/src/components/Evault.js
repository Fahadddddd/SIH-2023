import React from 'react'

const Evault = () => {
  document.addEventListener('DOMContentLoaded', function () {
  const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  //dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input");
 button.onclick = () => {
   input.click();
  };

input.addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  let filedata = `
    <form action="" method="post">
    <div class="form">
    <h4>${fileName}</h4>
    <input type="email" placeholder="Enter email upload file">
    <button class="btn">Upload</button>
    </div>
    </form>`;
  dropArea.innerHTML = filedata;
});
});
  return (
    <>
        <div className="containervault">
          <h5 style={{color: 'teal',fontfamily: '-webkit-body'}}>Upload Your Documents</h5>
        <div className="cardvault">
        <h3>Upload Files</h3>
            <div className="drop_box">
      <header>
        <h4>Select File here</h4>
      </header>
      <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
      <input type="file" hidden accept=".doc,.docx,.pdf" id="fileID" style={{display:'none'}}/>
      <button class="btnvault">Choose File</button>
    </div>
  </div>
</div>
    </>
  )
};

export default Evault;