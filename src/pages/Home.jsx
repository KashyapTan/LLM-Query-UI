import { useState } from 'react';
import '../CSS/home.css';
import UserQuery from '../components/userQuery';
import ModelResponse from '../components/modelResponse';

function Home() {
  const [systemPrompt, setSystemPrompt] = useState('');
  const [userQuery, setUserQuery] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userQuery.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', message: userQuery }
    ]);

    fetch('http://localhost:5000/process-query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_query: userQuery,
        system_prompt: systemPrompt,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'model', message: data.response}
        ]);

        setUserQuery('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="chat-container">
          <div className="chat-box">
            {messages.map((message, index) => (
              <div key={index} className={message.sender === 'user' ? 'user-message' : 'model-message'}>
                {message.sender === 'user' ? (
                  <UserQuery query={message.message} />
                ) : (
                  <ModelResponse response={message.message}/>
                )}
              </div>
            ))}
          </div>

          <div className="input-query-section">
            <form className="chat-form" onSubmit={handleSubmit}>
              <textarea
                type="text"
                id="system-prompt-input"
                placeholder="System Prompt"
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
              />
              <div className="google-icon-holder-1" onClick={handleSubmit}>
                <span className="material-symbols-outlined">arrow_upward</span>
              </div>
            </form>
          </div>

          <div className="input-query-section">
            <form className="chat-form" onSubmit={handleSubmit}>
              <textarea
                type="text"
                id="chat-input"
                placeholder="Message Model"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
              />
              <div className="google-icon-holder" onClick={handleSubmit}>
                <span className="material-symbols-outlined">arrow_upward</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
