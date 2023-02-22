<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>
<%@page import="java.util.Date"%>

<html>
    <head>
    <meta charset='utf-8'>
    </head>
    <body>
        <%
            response.setContentType("text/html;charset=UTF-8");
            request.setCharacterEncoding("UTF-8");
            String nome =request.getParameter("patientName");
            String birthday =request.getParameter("patientBirthday");
            String address =request.getParameter("patientAddress");
            String addressComplement =request.getParameter("patientAddressComplement");
            String addressNumber = request.getParameter("patientAddressNumber");
            String addressCEP = request.getParameter("patientAddressCEP");
            String addressNeighborhood = request.getParameter("patientAddressNeighborhood");
            String addressCity = request.getParameter("patientAddressCity");
            String addressState = request.getParameter("patientAddressState");
            String cpf = request.getParameter("patientAddressCPF");
            String rg = request.getParameter("patientAddressRG");
            String medicalInsurance = request.getParameter("patientMedicalInsurance");


            try{
                Class.forName("com.mysql.jdbc.Driver");  
                Connection con= DriverManager.getConnection ("jdbc:mysql://localhost/e-Consulta?user=root&password=");

                String query = "UPDATE Patient SET nome='"+nome+"', dtaniv= STR_TO_DATE('" + birthday + "', '%y-%m-%d'), endereco='"+address+"', complemento='"+addressComplement+"', numero = '" + addressNumber + "', cep='"+addressCEP+"', bairro='"+addressNeighborhood+"', cidade='"+addressCity+"', uf='"+addressState+"', rg='"+rg+"' and conv='"+medicalInsurance+"' WHERE cpf ='"+cpf+"'";

                Statement st=con.createStatement();
                st.executeUpdate(query);
                st.close();
                con.close();
                response.sendRedirect("alterarpaciente.jsp");
            }

            catch (SQLException e){
                out.println(e.getMessage());
            }

            catch (ClassNotFoundException e){
                out.println(e.getMessage());
            }

            catch (Exception e){
                out.println(e.getMessage());
            }
        %> 
  </body>
</html>