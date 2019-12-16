function loginAndRegUser() {
  if ( localStorage.getItem('userName') && localStorage.getItem ('password') ){
    let name = prompt ('Данный пользователь есть,введите логин');
    let pass = prompt ('Введите пароль');
    if ( localStorage.getItem('userName') == name && localStorage.getItem('password') == pass ) {
      document.getElementById('login').style.display = 'block'
    }else{
      document.getElementById('error').style.display = 'block'
    }
  }else{
    document.getElementById('reg').style.display = 'block'
    let name = prompt ('Введите логин',);
	  localStorage.setItem ('userName' , name);
  	let pass = prompt ('Введите пароль',);
	  localStorage.setItem ('password', pass);
  }
}

loginAndRegUser();