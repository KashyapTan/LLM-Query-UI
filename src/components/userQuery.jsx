import '../CSS/userQuery.css'

function userQuery({query}) {
  return (
    <>
        <div className="container-3">
            <div className="header">
                You
            </div>
            <div className="user-query-content">
                {query}
            </div>
        </div>
    </>
  )
}

export default userQuery