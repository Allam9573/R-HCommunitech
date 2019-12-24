function validateText12() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    var btnSend = document.getElementById('btnSend');
    if (name.value.length === 0 || email.value.length === 0 || msg.value.length === 0) {
        btnSend.disabled = true;
    } else {
        btnSend.disabled = false;
    }
    
  
}