
function modelResponse({response}) {
    var timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  return (
    <>
        <div className="container">
            <div className="header">
                Model
            </div>
            <div className="model-response-content">
                {response}
            </div>
            <div className="time-stamp">
                {timestamp}
            </div>
        </div>
    
    </>
  )
}

export default modelResponse