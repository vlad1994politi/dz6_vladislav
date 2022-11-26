document.getElementById("check").onclick = function() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    if (login == 'vladislav' && password == '201294')
        alert('welcome');
    else if (login == 'vova' && password == '201293')
        alert('welcome');
    else if (login == 'ivan' && password == '201295')
        alert('welcome');
        else alert ('incorrect login or password');
}
