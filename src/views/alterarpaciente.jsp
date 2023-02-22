<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

    <!DOCTYPE html>
    <html lang="pt-br">

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="public/assets/favicon.svg" type="image/x-icon">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
        <link rel="stylesheet" href="public/styles/main/main.css">
        <title>Alterar Paciente | e-Consulta</title>
    </head>

    <body>
        <%@ include file="public/parts/header.jsp" %>
            <main>
                <%@ include file="public/parts/sidebar_sec.jsp" %>
                    <section class="content">
                        <h1>Alterar Paciente</h1>
                        <small class="content-subtitle">Preencha os campos a seguir para alterar paciente com base no CPF.</small>
                        <div class="content-appointment">
                            <div class="appointment-input" style="width: 50%;">
                                <label for="patientAddressCPF">CPF</label>
                                <input type="text" name="patientAddressCPF" id="patientAddressCPF"
                                    placeholder="Insira o CPF" required>
                            </div>
                            <form action="alt_paciente.jsp" method="post">
                                <div class="form-input-group">
                                    <div class="appointment-input">
                                        <label for="patientName">Nome do Paciente</label>
                                        <input type="text" name="patientName" id="patientName"
                                            placeholder="Insira o nome do paciente" autofocus required>
                                    </div>
                                    <div class="appointment-input">
                                        <label for="patientBirthday">Data de Nascimento</label>
                                        <input type="date" name="patientBirthday" id="patientBirthday" required
                                            name="patientBirthday" id="patientBirthday" required></input>
                                    </div>
                                    <div class="appointment-input">
                                        <label for="patientAddress">Logradouro</label>
                                        <input type="text" name="patientAddress" id="patientAddress"
                                            placeholder="Insira o logradouro" required>
                                    </div>
                                    <div class="appointment-input">
                                        <label for="patientAddressComplement">Complemento</label>
                                        <input type="text" name="patientAddressComplement" id="patientAddressComplement"
                                            placeholder="Insira o complemento" required>
                                    </div>
                                    <div class="appointment-input">
                                        <label for="patientAddressNumber">Número</label>
                                        <input type="number" name="patientAddressNumber" id="patientAddressNumber"
                                            placeholder="Insira o número" required>
                                    </div>
                                    <div class="appointment-input">
                                        <label for="patientAddressCEP">CEP</label>
                                        <input type="text" name="patientAddressCEP" id="patientAddressCEP"
                                            placeholder="Insira o CEP" maxlength="9" required>
                                    </div>
                                    <div class="appointment-input">
                                        <label for="patientAddressNeighborhood">Bairro</label>
                                        <input type="text" name="patientAddressNeighborhood"
                                            id="patientAddressNeighborhood" placeholder="Insira o bairro" required>
                                    </div>
                                    <div class="appointment-input">
                                        <label for="patientAddressState">UF</label>
                                        <select name="patientAddressState" id="patientAddressState"
                                            onclick="populate(this.id,'patientAddressCity')" required>
                                            <option value="">Selecione sua UF</option>
                                            <option value="AC">AC</option>
                                            <option value="AL">AL</option>
                                            <option value="AM">AM</option>
                                            <option value="AP">AP</option>
                                            <option value="BA">BA</option>
                                            <option value="CE">CE</option>
                                            <option value="DF">DF</option>
                                            <option value="ES">ES</option>
                                            <option value="GO">GO</option>
                                            <option value="MA">MA</option>
                                            <option value="MG">MG</option>
                                            <option value="MS">MS</option>
                                            <option value="MT">MT</option>
                                            <option value="PA">PA</option>
                                            <option value="PB">PB</option>
                                            <option value="PE">PE</option>
                                            <option value="PI">PI</option>
                                            <option value="PR">PR</option>
                                            <option value="RJ">RJ</option>
                                            <option value="RN">RN</option>
                                            <option value="RO">RO</option>
                                            <option value="RS">RS</option>
                                            <option value="RR">RR</option>
                                            <option value="SC">SC</option>
                                            <option value="SE">SE</option>
                                            <option value="SP">SP</option>
                                            <option value="TO">TO</option>
                                        </select>
                                    </div>
                                    <div class="appointment-input">
                                        <label for="patientAddressCity">Cidade</label>
                                        <input type="text" name="patientAddressCity" id="patientAddressCity"
                                            maxlength="40" placeholder="Insira a cidade" required>
                                    </div>
                                    <div class="appointment-input">
                                        <label for="patientAddressRG">RG</label>
                                        <input type="text" name="patientAddressRG" id="patientAddressRG"
                                            placeholder="Insira o seu RG" required>
                                    </div>
                                    <div class="appointment-input">
                                        <label for="patientMedicalInsurance">Convênio Médico</label>
                                        <input list="medicalInsurance" type="text" name="patientMedicalInsurance"
                                            id="patientMedicalInsurance" placeholder="Escolha o Convênio Médico"
                                            required>
                                        <datalist id="medicalInsurance">
                                            <option value="-">Não Possui</option>
                                            <option value="Amil">Amil</option>
                                            <bption value="Bradesco">Bradesco</optio|Bradesco">Bradesco</option>
                                                <option value="NotreDame">NotreDame Intermédica</option>
                                                <option value="Sulamerica">Sulamerica</option>
                                        </datalist>
                                    </div>
                                </div>
                                <button type="submit" id="scheduleMedAppointment" onclick="getHourAndData()">
                                    Cadastrar Paciente
                                </button>
                                <button type="reset">
                                    Limpar
                                </button>
                            </form>
                        </div>
                    </section>
            </main>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
                integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"
                integrity="sha512-pHVGpX7F/27yZ0ISY+VVjyULApbDlD0/X0rgGbTqCE7WFW5MezNTWG/dnhtbBuICzsd0WQPgpE4REBLv+UqChw=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <script src="public/scripts/mask.js"></script>
            <script src="public/scripts/sec.js"></script>
    </body>

    </html>