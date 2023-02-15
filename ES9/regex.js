const regex = /(\d{4})-(\d{2})-(\d{2})/;

const match = regex.exec("2018-12-21");

console.table(match);