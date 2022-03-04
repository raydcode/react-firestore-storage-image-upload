import React, { useState } from 'react';
import { Image, Title, UploadForm, Modal } from './components';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm selectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Image />
    </div>
  );
}

export default App;
