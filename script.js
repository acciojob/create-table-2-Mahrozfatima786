function createTable() {
  const table = document.getElementById('myTable');
  table.innerHTML = '';
  let rows = prompt("Input number of rows");
  rows = parseInt(rows);

  if (isNaN(rows) || rows <= 0) {
    alert("Invalid number of rows. Please enter a positive number.");
    return;
  }
  let cols = prompt("Input number of columns");
  cols = parseInt(cols);

  if (isNaN(cols) || cols <= 0) {
    alert("Invalid number of columns. Please enter a positive number.");
    return;
  }

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
