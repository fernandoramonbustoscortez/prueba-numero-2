document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Evento de submit detectado'); // Agregado

    // Validación de Campos
    let camposCompletos = true;
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        if (input.value === '') {
            camposCompletos = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (!camposCompletos) {
        console.log('Campos incompletos. No se puede continuar.'); // Agregado
        return;
    }

    // Valores
let nota_a = parseFloat(document.getElementById('nota_a').value);
let nota_b = parseFloat(document.getElementById('nota_b').value);
let nota_c = parseFloat(document.getElementById('nota_c').value);
let nota_d = parseFloat(document.getElementById('nota_d').value);
let nota_e = parseFloat(document.getElementById('nota_e').value);
let nota_f = parseFloat(document.getElementById('nota_f').value);

if (nota_a < 0 || nota_a > 7 || isNaN(nota_a)) {
    alert('La nota de la Unidad 1 debe estar entre 0 y 7.');
    event.preventDefault(); // Detiene el envío del formulario
    return;
}
if (nota_b < 0 || nota_b > 7 || isNaN(nota_b)) {
    alert('La nota de la Unidad 1 debe estar entre 0 y 7.');
    event.preventDefault();
    return;
}
if (nota_c < 0 || nota_c > 7 || isNaN(nota_c)) {
    alert('La nota de la Unidad 1 debe estar entre 0 y 7.');
    event.preventDefault(); 
    return;
}
if (nota_d < 0 || nota_d > 7 || isNaN(nota_d)) {
    alert('La nota de la Unidad 1 debe estar entre 0 y 7.');
    event.preventDefault(); 
    return;
}
if (nota_e < 0 || nota_e > 7 || isNaN(nota_e)) {
    alert('La nota de la Unidad 1 debe estar entre 0 y 7.');
    event.preventDefault(); 
    return;
}
if (nota_f < 0 || nota_f > 7 || isNaN(nota_f)) {
    alert('La nota de la Unidad 1 debe estar entre 0 y 7.');
    event.preventDefault(); 
    return;
}


    // Calculo
    let ponderacion1 = nota_a * 0.12;
    let ponderacion2 = nota_b * 0.21;
    let ponderacion3 = nota_c * 0.12;
    let ponderacion4 = nota_d * 0.21;
    let ponderacion5 = nota_e * 0.13;
    let ponderacion6 = nota_f * 0.21;

    // Promedio
    let promedio = (ponderacion1 + ponderacion2 + ponderacion3 + ponderacion4 + ponderacion5 + ponderacion6).toFixed(2);

    // Resultados
    let resultados = `
        <h2>Resultados</h2>
        <p>Nombre del estudiante: ${document.getElementById('nombre').value}</p>
        <p>Asignatura: ${document.getElementById('asignatura').value}</p>
        <table class="table">
            <thead>
                <tr>
                    <th>Unidad</th>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Ponderación de Notas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Unidad 1</td>
                    <td>${nota_a}</td>
                    <td>${nota_b}</td>
                    <td>${ponderacion1 + ponderacion2}</td>
                </tr>
                <tr>
                    <td>Unidad 2</td>
                    <td>${nota_c}</td>
                    <td>${nota_d}</td>
                    <td>${ponderacion3 + ponderacion4}</td>
                </tr>
                <tr>
                    <td>Unidad 3</td>
                    <td>${nota_e}</td>
                    <td>${nota_f}</td>
                    <td>${ponderacion5 + ponderacion6}</td>
                </tr>
            </tbody>
        </table>
        <h3>Promedio Final: ${promedio}</h3>
        ${promedio >= 4.0 ? '<h1>¡Has aprobado la asignatura!</h1>' : ''}
    `;
    console.log('Cálculos y resultados realizados con éxito'); 
    document.body.innerHTML += resultados;
});
