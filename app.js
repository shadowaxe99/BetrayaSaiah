const ws = new WebSocket('ws://localhost:30054');

ws.onmessage = (event) => {
  document.getElementById('response').textContent = event.data;
};

document.getElementById('request-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const url = document.getElementById('url').value;
  ws.send(JSON.stringify({ method: 'GET', url }));
});