import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Download = () => {
  const params = useParams();
  const [fileCheck, setFileCheck] = React.useState({
    searching: true,
    found: false,
    qr: false,
  });
  console.log(params.fileId);
  const checkQR = async () => {
    const qr = await axios.get("/api/check" + params.fileId);
    if (qr.data?.file) {
      setFileCheck({
        searching: false,
        found: true,
        qr: qr.data.file,
      });
    } else {
      setFileCheck({
        searching: false,
        found: false,
        qr: false,
      });
    }
  };

  const downloadFile = async () => {
    const response = await axios.get("/api/download" + params.fileId, {
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileCheck.qr.originalname); //or any other extension
    document.body.appendChild(link);
    link.click();
  };

  React.useEffect(() => {
    checkQR();
  }, []);

  React.useEffect(() => {
    fileCheck.qr && downloadFile();
  }, [fileCheck.qr]);

  return (
    <div>
      <h1>downloading file</h1>
      <p>{JSON.stringify(fileCheck.qr)}</p>
    </div>
  );
};

export default Download;
