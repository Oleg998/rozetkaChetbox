import { useState } from "react";

export const App = () => {
  const [url, setUrl] = useState('');
  const [receiptId, setReceiptId] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const extractReceiptId = () => {
    // Удаляем последний фрагмент, если это '/pdf'
    const urlWithoutPdf = url.endsWith('/pdf') ? url.slice(0, -4) : url;
    const id = urlWithoutPdf.split('/').filter(Boolean).pop();
    setReceiptId(id);
    setUrl("");       

    // Переход по ссылке
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