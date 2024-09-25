import React, { useState } from 'react';
import ReplyModal from './components/ReplyModal';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleIconClick = () => {
    setModalOpen(true);
  };

  const handleInsert = (text: string) => {
    // Logic to insert the generated text into LinkedIn's input field
    console.log(text);
    setModalOpen(false);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="LinkedIn Message"
        onFocus={handleIconClick} // Show icon on focus
        className="border p-2 w-full"
      />
      {isModalOpen && <ReplyModal onClose={() => setModalOpen(false)} onInsert={handleInsert} />}
    </div>
  );
};

export default App;
