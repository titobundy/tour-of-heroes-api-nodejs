const rootEl = document.getElementById('root');
const queryParams = new URLSearchParams(document.location.search);
const input = queryParams.get("input");

rootEl.innerHTML = input; // Noncompliant