
document.getElementById('converterBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const n = document.getElementById('n').value;
    const base = document.getElementById('roleSelect').value;
    const result = parseInt(n, 10).toString(base);
    document.getElementById('resultTitle').innerText = base === "2" ? "Binário" : base === "16" ? "Hexadecimal" : "Octal";
    document.getElementById('result').innerText = result;

    generateGraphic(n, base);
});

function generateGraphic(n, base) {
    const grafico = document.getElementById('grafico');
    grafico.innerHTML = '';

    if (n == 0 || n === '') {
        grafico.innerHTML = "<h5 class='red'>Não há representações gráficas</h5>";
        return;
    }

    let divisor = [];
    let result = [];
    let soma = 0;
    let parada = 0;

    while (n >= 1) {
        divisor[soma] = n;
        result[soma] = n % base;
        n = Math.floor(n / base);
        soma++;
        parada++;
    }

    let cont = 0;
    let cont2 = 0;
    for (let l = 0; l < parada; l++) {
        let table = document.createElement('table');
        let tr = document.createElement('tr');
        for (let c = 0; c < parada; c++) {
            let td = document.createElement('td');
            if (l == c) {
                if (cont + 1 == parada) {
                    td.className = 'azul';
                    td.innerText = divisor[cont];
                } else {
                    td.innerText = divisor[cont];
                    cont++;
                }
            } else if (c - l == 1) {
                td.id = 'borda';
                td.innerText = base;
            } else if (l - c == 1) {
                td.id = 'result';
                td.innerText = result[cont2];
                cont2++;
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
        grafico.appendChild(table);
    }
}