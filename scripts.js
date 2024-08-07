function sortTable(tableId, colIndex) {
    const table = document.getElementById(tableId);
    const rows = Array.from(table.getElementsByTagName('tr')).slice(1); // Exclude header row

    rows.sort((rowA, rowB) => {
        const cellA = rowA.getElementsByTagName('td')[colIndex].innerText.toLowerCase();
        const cellB = rowB.getElementsByTagName('td')[colIndex].innerText.toLowerCase();

        return cellA.localeCompare(cellB);
    });

    rows.forEach(row => table.appendChild(row));
}
