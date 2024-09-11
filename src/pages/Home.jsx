import { useState} from 'react'
import '../CSS/home.css'

function Home() {
  const [userQuery, setUserQuery] = useState('')

  const handleSubmit = () => {
    
  }
  return (
    <>
      <div className="container">
        <div className="chat-container">
          <div className="chat-box"></div>
          <div className="input-query-section">
            <form className="chat-form" onSubmit={handleSubmit()}>
              <textarea type="text" id="chat-input" placeholder="Message Model" value={userQuery} onChange={(e) => setUserQuery(e.target.value)}/>
                <div className='google-icon-holder'>
                    <span className="material-symbols-outlined">arrow_upward</span>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home