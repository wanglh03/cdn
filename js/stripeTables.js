function stripeTables() {
  let tables = document.getElementsByTagName("table");
  for (let i = 0; i < tables.length; i++) {
    let odd = false;
    let rows = tables[i].getElementsByTagName("tr");
    for (let j = 0; j < rows.length; j++) {
      if (odd == true) {
        addClass(rows[j], "table-odd");
        odd = false;
      } else {
        odd = true;
      }
    }
  }
}

addLoadEvent(stripeTables);