function sendMessage(message, callback) {
    console.log(message);
    callback(message);
    
}

function sendWhatsappMessage(message) {
    console.log(message);
}

function sendEmail(message) {
    console.log(message);
}

function sendSms(message) {
    console.log(message);
}

sendMessage("Hello", sendWhatsappMessage);

sendMessage("Hello", sendEmail);

sendMessage("Hello", sendSms);