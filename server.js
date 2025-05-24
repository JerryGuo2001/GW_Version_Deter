// 1. Download the CSV
const res = await fetch('/api/participant_runsheet');
const csvText = await res.text();

// 2. Parse and modify the CSV (e.g. using PapaParse)

// 3. Send it back
await fetch('/api/participant_runsheet', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain'
  },
  body: updatedCsvString
});
