// // 
// import React, { useState } from 'react';
// import './Loginform.scss'; // Create this CSS file for styling

// const Loginform = ({ isOpen, onClose }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You can perform login validation here
//     onClose();
//   };

//   const handleClose = () => {
//     setUsername(''); // Clear input fields when closing
//     setPassword('');
//     onClose();
//   };

//   return (
//     <div className={`modal ${isOpen ? 'open' : ''}`}>
//       <div className="modal-content">
//         <button className="close-button" onClick={handleClose}>X</button>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name={username}
//             onChange={handleUsernameChange}
//             required
//           />
//           <br />
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//           <br />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Loginform;
import React, { useState } from 'react';

function App() {
  const [htmlContent, setHtmlContent] = useState('');

  const loadExternalHtml = async () => {
    const response = await fetch('/external.html'); // Fetch the external HTML file
    const html = await response.text();
    setHtmlContent(html);
  };

  return (
    <div>
      <h1>React HTML Integration</h1>
      <button onClick={loadExternalHtml}>Load External HTML</button>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default App;