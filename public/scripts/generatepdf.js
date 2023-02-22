let patientName = document.getElementById('patientName');
let patientAge = document.getElementById('patientAge');
let description = document.getElementById('description');
let patientArrived = document.getElementById('patientArrived');
let patientDeparture = document.getElementById('patientDeparture');

const { jsPDF } = jspdf;

function createPrescription() {
    const doc = new jsPDF();
    let imgData = 'data:image/png;base64,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'
    
    doc.addImage(imgData, 'PNG', 10, 10, 48, 16)

    doc.setFont('Helvetica', 'normal', 'bold')
    doc.text(10, 50, 'RECEITUÁRIO')

    doc.setFont('Helvetica', 'normal', '400')
    doc.setFontSize(13)

    doc.text(10, 80, `Paciente: ${patientName.value}`)
    doc.text(10, 90, `Idade: ${patientAge.value > 1 ? patientAge.value + " anos" : patientAge.value + " ano" }`)
    doc.setFontSize(14)
    doc.text(10, 120, `Medicamentos:\n${description.value}`)
    doc.setLineWidth(1)
    doc.text(10, 290, `Documento emitido em: ${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}`)
    doc.line(190, 300, 100, 300)
    doc.save(`receita_${patientName.value}.pdf`);
}

function createSickNote() {
    const doc = new jsPDF();
    let imgData = 'data:image/png;base64,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'
    
    doc.addImage(imgData, 'PNG', 10, 10, 50, 12)

    doc.setFont('Helvetica', 'normal', 'bold')
    doc.text(10, 50, 'ATESTADO MÉDICO')

    doc.setFont('Helvetica', 'normal', '400')
    //doc.setFontSize(13)

    //doc.text(10, 80, `Paciente: ${patientName.value}`)
    //doc.text(10, 90, `Idade: ${patientAge.value > 1 ? patientAge.value + " anos" : patientAge.value + " ano" }`)
    doc.setFontSize(14)
    doc.text(10, 120, `Atesto que o(a) Sr.(a) ${patientName.value} foi atendido na Clínica Médica\ndas ${patientArrived.value} às ${patientDeparture.value}.`)
    doc.setLineWidth(1)
    doc.text(10, 290, `Documento emitido em: ${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}`)
    doc.line(190, 300, 100, 300)
    doc.save(`atestado_${patientName.value}.pdf`);
}