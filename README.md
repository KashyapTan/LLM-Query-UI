
# UI to query any Ollama model using local models 


## Prerequisites

Download Ollama: [ollama.com/download](https://ollama.com/download)

Download a Model: [ollama.com/library](https://ollama.com/library)

After downloading, run the model locally:

```bash
  ollama run [model_name_here]
```

**Note: This project uses llama3.1. If you want to use a different model, you need to change the model in `server.py`**


## Set Up

Clone the project

```bash
  git clone https://github.com/KashyapTan/LLM-Query-UI.git
```

Install React dependencies

```bash
  npm install
```

Install Server requirements

```bash
  pip install -r requirements.txt
```

Start local host

```bash
  npm run dev
```

Start python server

```bash
  python server.py
```

