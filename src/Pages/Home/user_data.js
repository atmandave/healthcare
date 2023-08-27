import React, { useState } from 'react';

function TextEditor() {
  const [content, setContent] = useState('');

  async function handleSave() {
    try {
      await fetch('http://localhost:5000/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
      alert('Text saved successfully');
      setContent(''); // Clear the content after saving
    } catch (error) {
      console.error('Error saving text:', error);
      alert('An error occurred while saving text');
    }
  }

  return (
    <div>
      <h2>Text Editor</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={handleSave}>Save Text</button>
    </div>
  );
}

export default TextEditor;