export default function currentDate() {
    const fecha = new Date();
    const año = fecha.getFullYear();
    let mes = (fecha.getMonth() + 1).toString();
    let dia = fecha.getDate().toString();
    mes = mes.padStart(2, '0');
    dia = dia.padStart(2, '0');
    return `${año}${mes}${dia}`;
}