const fecha = new Date(1998, 7, 15).toLocaleDateString(`es-AR`);
const libro = { 
    titulo: "La interpretacion de los sueños",
    autor: "Sigmund Freud",
    anio: 1900,
    url: "https://www.google.com.ar/books/edition/La_interpretaci%C3%B3n_de_los_sue%C3%B1os/FUIiAgAAQBAJ?hl=es&gbpv=1&printsec=frontcover"
 };
const lista = ["Maria del Rosario", 24, false, fecha, libro];

console.log(lista);