
function userQuery({query}) {
    var timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  return (
    <>
        <div className="container">
            <div className="header">
                You
            </div>
            <div className="user-query-content">
                {query}
            </div>
            <div className="time-stamp">
                {timestamp}
            </div>
        </div>
    
    </>
  )
}

export default userQuery