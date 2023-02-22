<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="public/assets/favicon.svg" type="image/x-icon">
    <meta http-equiv="refresh" content="5; url=/menu/sec">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>Redirecionando</title>
    <style>
        *{
            font-family: 'Poppins', sans-serif;
        }
        body{
            height: 95vh;
        }
        .logo-anim{
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            align-items: center;
            justify-content: center;
        }
        
        .logo-anim> img{
            animation: identifier 7s;
        }
        @keyframes identifier {
            0%{
                transform: scale(.5);
            }
            50%{
                transform: scale(.75);
            }
            100%{
                transform: scale(.5);
            }
        }
    </style>
</head>
<body>
    <%@include file="public/parts/redirect.jsp" %>
</body>
</html>