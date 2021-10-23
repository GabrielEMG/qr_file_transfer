import React from "react";
import axios from "axios";
import QRCode from "qrcode.react";

function Home() {
  const [file, setFile] = React.useState("");
  const [url, setUrl] = React.useState("");
  const send = async () => {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    let fd = new FormData();
    fd.append("file", file);
    const response = await axios.post("/api/send", fd, config);
    console.log(response?.data);
    setUrl("/api/download" + response.data?.qr.filename);
  };

  return (
    <div>
      <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={send}>send</button>
        {url && <QRCode value={url} />}
      </div>
    </div>
  );
}

export default Home;
