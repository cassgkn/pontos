let dataInicio = document.querySelector('#dataInicio');
let dataFim = document.querySelector('#dataFim');

let diaInicial = dataInicio.value;
let diaFinal = dataFim.value;

diaInicial = diaInicial.substring(8,10);

let tableContent = document.querySelector("#tableContent");

const teste = () =>{
    let i = 0;
        
    while (i < 3) {
        let newTr = document.createElement('tr');
        let dtData = document.createElement('td');
        let dtChegada = document.createElement('td');
        let dtSaida = document.createElement('td');
        let btnDelete = document.createElement('button')
       
        newTr.setAttribute('id', 'newTr');
        btnDelete.setAttribute('id', 'deleteBtn');
        btnDelete.setAttribute('onclick', 'deletar(this)');
        btnDelete.style.width = "100px";     
                             
        dtData.textContent = `${i}`;
        dtChegada.textContent = `${i}`;
        dtSaida.textContent = `${i}`;

        newTr.appendChild(dtData);
        newTr.appendChild(dtChegada);
        newTr.appendChild(dtSaida);
        newTr.appendChild(btnDelete);

        tableContent.appendChild(newTr);
        i++;
    };   
};

const deletar = () => {
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
};
