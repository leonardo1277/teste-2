<!doctype html>
<html>
    <head>
       <title>camilateamo</title> 
       <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> 
       <link rel="stylesheet" href="estilos.css">
    </head>

    <body>
        <header>
            <nav id="nav_bar">
                <ul>
                    <li><a href="https://gmail.com">gmail</a></li>
                    <li><a href="https://images.app.goo.gl/7mie53F8X2GopDNf9">imagens</a></li>
                    <li id="entrar"><a href="https://www.tiktok.com/@chagzz.7/video/7351814315835493637?is_from_webapp=1&sender_device=pc">entrar</a></li>
                </ul>
            </nav>
        </header>
        <div id="amor">
            <img src="amor.png.jpg"/>
        </div>
        <div>
            <form>
                <input type="text">
            </form>
        </div>
        <div id="acionamento">
            <input type="submit" value="pesquisa google"/>
            <input type="submit" value="estou com sorte"/>
        </div>
        <div>

            <footer>
                <ul id="footer_esquerdo">
                    <li><a href="#">publicidade</a></li>
                    <li><a href="#">negócios</a></li>
                    <li><a href="#">sobre</a></li>
                    <li><a href="#">como funciona a pesquisa</a></li>
                </ul>

                <ul id="footer_direito">
                    <li><a href="#">privacidade</a></li>
                    <li><a href="#">termos</a></li>
                    <li><a href="#">configuração</a></li>
                </ul>
                </footer>
        </div>
    </body>
</html> 
html {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
}

body {
    margin: 0;
    padding: 0; 
}
ul {list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    text-decoration: underline;
}

#nav_bar {

    float: right;
}

#nav_bar li {
    display: inline-block;
    margin: 8px;
}

#nav_bar #entrar {
    background-color: #4887ef;
    margin-right: 25px;
    padding: 7px 15px;
    border-radius: 3px;
    font-weight: bold; 
    color: white
}

#amor img {
    display: block;
    margin: auto;
    clear: both;
    padding-top: 120px;
    padding-bottom: 20px
}

#form {
    text-align: center;
}

#acionamento {
    width: 450px;
    line-height: 30px;
}

footer {
    background-color: #f2f2f2;
    border-top: solid 2px #e4e4e4;
    position: fixed;
    bottom: 0;
    width: 100%   
}
footer ul li {
    display: inline;
    color: #666666;
    font-size: 14px;
    padding: 12px;
}
#footer_esquerdo {
    float: left;
}
#footer_direito {
    float: right
}
