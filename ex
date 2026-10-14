curl http://localhost:11434/api/generate   -H 'Content-Type: application/json'   -d '{
    "model": "qwen3:4b",
    "stream": false,
    "temperature": 0,
    "prompt": "You are a Mars documentation system. Given a material detected on Mars, explain what it is and why it matters for Mars exploration and scientific research. Material: basalt. Return only a JSON object matching the provided schema.",
    "format": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "description": "A concise title for the material"
        },
        "summary": {
          "type": "string",
          "description": "A one- or two-sentence scientific summary" 
        },
        "description": {
          "type": "string",
          "description": "Explain why this material matters for Mars exploration and research"
        }
      },
      "required": ["title", "summary", "description"]
    }
  }'
