const header = document.querySelector('.navbar');

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

const form = document.querySelector('.content_form');

function sendMsg(e) {
    e.preventDefault();
 
        const name = document.querySelector('.name'),
              email = document.querySelector('.email'),
               msg = document.querySelector('.msg');

    Email.send({
        SecureToken: "9ECA920BBFCA28F117DF60B7DDC1FA696479",
        To: 'edikaneakpan1996@gmail.com',
        From: email.value,
        Subject: "Contact form",
        Body: msg.value
    }).then(
        message => alert(message)
    );
}


form.addEventListener('submit', sendMsg);