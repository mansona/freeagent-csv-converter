import Papa from 'papaparse';

export default async function convertFile(file) {
  const newName = `${file.name}-converted.csv`;

  const fileContents = await file.text();

  const parsed = Papa.parse(fileContents, { header: true });

  const newData = parsed.data.map((row) => [
    row[' Posted Transactions Date'],
    row[' Debit Amount']
      ? -1 * row[' Debit Amount'].replace(/,/g, '')
      : row[' Credit Amount'].replace(/,/g, ''),
    row[' Description1'].replace(/^\*/, ''),
  ]);

  const csv = Papa.unparse(newData);

  save(newName, csv);
}

function save(filename, data) {
  const blob = new Blob([data], { type: 'text/csv' });

  const elem = window.document.createElement('a');
  elem.href = window.URL.createObjectURL(blob);
  elem.download = filename;
  document.body.appendChild(elem);
  elem.click();
  document.body.removeChild(elem);
}
