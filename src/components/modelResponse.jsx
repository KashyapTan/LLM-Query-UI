import '../CSS/modelResponse.css'
import ReactMarkdown from 'react-markdown';

function modelResponse({response}) {
  return (
    <>
        <div className="container-2">
            <div className="header-2">
                <img className='ollama-image' src="/ollama-picture.png" alt="Ollama" />
            </div>
            <div className="model-response-content">
                <ReactMarkdown>{response}</ReactMarkdown>
            </div>
        </div>
    
    </>
  )
}

export default modelResponse