$(document).ready(() => {
    $("#patientSearch").on("keyup", () => {
        handlePatientSearch($("#patientSearch").val())
    });
});

/*Sorting - Alphabetical Order*/
const sortPatient = (first, others) => first.name.toLowerCase().localeCompare(others.name.toLowerCase())

let modal = document.querySelector('.modal-box'),
    handleResults = document.getElementById('filterBtn'),
    /*Setting filter by amount values*/
    getHealthInsuranceAmil = (value) => { return value.healthInsurance == "Amil"; },
    getHealthInsuranceGNDI = (value) => { return value.healthInsurance == "NotreDame Intermédica" },
    getHealthInsuranceSula = (value) => { return value.healthInsurance == "Sulamerica" },
    getHealthInsuranceBra = (value) => { return value.healthInsurance == "Bradesco" },
    getHealthInsuranceTras = (value) => { return value.healthInsurance == "Trasmontano" },
    getAllHealthInsurance = (value) => {
        return value.healthInsurance == "Amil" || value.healthInsurance == "Bradesco" || value.healthInsurance == "NotreDame Intermédica" || value.healthInsurance == "Sulamerica" || value.healthInsurance == "Trasmontano"
    };
//getProductId = (value) => { return value.id == location.pathname.substring(9, 11); },
//getProductById = () => { return productList.filter(getProductId); };

async function handlePatientSearch(filterValue) {
    filterValue = filterValue.toLowerCase();
    const url = "http://127.0.0.1:8085/user";
    const response = await fetch(url);
    const data = await response.json();
    const handlingData = data
        .sort(sortPatient)
        .map((data) => {
            if (data.name.toLowerCase().indexOf(filterValue) !== -1) {
                return setFilteredContent(data);
            }
        });
    setContentIntoHTML(handlingData);
}

const setContentIntoHTML = (result) => {
    $('.content').find('.patient-group').html(result);

    let resultList = document.querySelector('.patient-group').childElementCount,
        resultAmount = `<small>A busca retornou ` + resultList,
        handleResults = (resultList > 1) ? resultAmount + `  resultados</small>` : resultAmount + ` resultado</small>`;

    $('.results-items-amount').find('.results-item-amount-description').html(handleResults);
}

const setFilteredContent = (patient) => {
    return `
<div class="patient" data-patient="${patient.id}">
<small class="patient-last-seen" name="patient-last-seen">Última consulta: ${patient.lastSeen}</small>
<h3 class="patient-name" name="patient-name">${patient.name}</h3>
<small class="patient-health-insurance">${patient.healthInsurance}</small>
<form action="patient.jsp" method="POST">
<input type="submit" value="Ver Prontuário"></input>
</form>
</div>
`
}

const handlePatientRedirect = (patient) => {
    let url = location.protocol + "//" + location.host + "/FAM/PI/"
    let patientID = patient.getAttribute("data-patient");
    location.assign(`${url}patient.jsp`);
}

let selectInput = document.getElementById('options-filter')

async function handleSelectedItem() {
    const selectedItem = selectInput.options[selectInput.selectedIndex].value
    const url = "http://127.0.0.1:8085/user";
    const response = await fetch(url);
    const data = await response.json();

    switch (selectedItem) {
        case 'Amil':
            let patientListAmil = data.filter(getHealthInsuranceAmil),
                patientListAmilFiltered = patientListAmil
                    .sort(sortPatient)
                    .map((data) => {
                        return setFilteredContent(data);
                    });
            setContentIntoHTML(patientListAmilFiltered);
            break;
        case 'Bradesco':
            let patientListBradesco = data.filter(getHealthInsuranceBra),
                patientListBradescoFiltered = patientListBradesco
                    .sort(sortPatient)
                    .map((data) => {
                        return setFilteredContent(data);
                    });
            setContentIntoHTML(patientListBradescoFiltered);
            break;
        case 'NotreDame':
            let patientListGNDI = data.filter(getHealthInsuranceGNDI),
                patientListGNDIFiltered = patientListGNDI
                    .sort(sortPatient)
                    .map((data) => {
                        return setFilteredContent(data);
                    });
            setContentIntoHTML(patientListGNDIFiltered);
            break;
        case 'Sulamerica':
            let patientListSulamerica = data.filter(getHealthInsuranceSula),
                patientListSulamericaFiltered = patientListSulamerica
                    .sort(sortPatient)
                    .map((data) => {
                        return setFilteredContent(data);
                    });
            setContentIntoHTML(patientListSulamericaFiltered);
            break;
        case 'Transmontano':
            let patientListTransmontano = data.filter(getHealthInsuranceTras),
                patientListTransmontanoFiltered = patientListTransmontano
                    .sort(sortPatient)
                    .map((data) => {
                        return setFilteredContent(data);
                    });
            setContentIntoHTML(patientListTransmontanoFiltered);
            break;
        case '':
            let patientList = data.filter(getAllHealthInsurance),
                patientListFiltered = patientList
                    .sort(sortPatient)
                    .map((data) => {
                        return setFilteredContent(data);
                    });
            setContentIntoHTML(patientListFiltered);
            break;

        default:
            return;
    }
}

selectInput.addEventListener('change', handleSelectedItem);

const text = 'Gab123456.';
console.log(sha256(text));