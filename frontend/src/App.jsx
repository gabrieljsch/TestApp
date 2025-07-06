
import { useEffect, useState } from 'react';
import { getMessage } from './api';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    getMessage().then(res => setMsg(res.data.message));
  }, []);

  return (
    <div>
      <h1>Fullstack Render App</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;