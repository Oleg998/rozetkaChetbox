import { useState } from "react";

export const App = () => {
  const [url, setUrl] = useState('');


  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const extractReceiptId = () => {
    const urlWithoutPdf = url.endsWith('/pdf') ? url.slice(0, -4) : url;
    const id = urlWithoutPdf.split('/').filter(Boolean).pop();

    setUrl("");       

    if (id) {
      window.location.href = `https://check.checkbox.ua/${id}`;
    }
  };
  return (
    <div className="App">
      <h1>Просмотр чека</h1>
      <input 
        type="text" 
        placeholder="Введите URL чека" 
        value={url}
        onChange={handleChange}
      />
      <button onClick={extractReceiptId}>Получить ID чека</button>
    </div>
  );
};