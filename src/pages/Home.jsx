import '../CSS/home.css'

function Home() {
  return (
    <>
      <div className="container">
        <div className="chat-container">
          <div className="chat-box"></div>
          <div className="input-query-section">
            <form className="chat-form">
              <textarea type="text" id="chat-input" placeholder="Message Model"/>
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