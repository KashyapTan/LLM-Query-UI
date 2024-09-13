import ollama
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/process-query', methods=['POST'])
def process_query():
    data = request.get_json()
    user_query = data.get('user_query')
    system_prompt = data.get('system_prompt')
    response = llama3_response(user_query, system_prompt)
    chatbot_response = response.strip()
    response = {"response": chatbot_response}
    return jsonify(response)

def llama3_response(USER_QUERY, USER_SYSTEM_PROMPT):
    response = ollama.chat(
            model='llama3.1', # You can change the model here to any model you have downloaded.
            messages=[
                {
                    'role': 'system',
                    'content': USER_SYSTEM_PROMPT,
                },
                {
                    'role': 'user',
                    'content': USER_QUERY,
                },  
            ]
        )
    return response['message']['content']

if __name__ == '__main__':
    app.run(port=5000, debug=True)
