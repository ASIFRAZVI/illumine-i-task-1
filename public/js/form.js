document.getElementById('customerName').addEventListener('change', function() {
    var yardValue = document.getElementById('yard').value;
    var customerNameValue = this.value; 

    var agentSelect = document.getElementById('agent');
    
    if (yardValue === 'HK' && customerNameValue === 'JACK') {
       // agentSelect.value ='Not Applicable';
        agentSelect.disabled = true;
    } else {
       // agentSelect.value = ''; 
        agentSelect.disabled = false;
    }
});

//active cheakbox
document.getElementById('active').addEventListener('change', function() {
if (!this.checked) {
    alert('Please check the "Active" checkbox.');
}
});

//amount conditions
var amountField = document.getElementById('amount');
var paymentTypeField = document.getElementById('paymentType');

amountField.addEventListener('input', function() {
if (parseFloat(amountField.value) === 0) {
    paymentTypeField.disabled = true;
} else {
    paymentTypeField.disabled = false;
}
});

//usage alphanumeric field
var usageField = document.getElementById('usage');

usageField.addEventListener('input', function() {

var alphanumeric = /^[a-zA-Z0-9]*$/;

if (!alphanumeric.test(usageField.value)) {
alert('Please enter only alphanumeric characters for the "Usage" field.');

usageField.value = ''; 
}
});


//Type alphanumeric
var typeField = document.getElementById('type');

typeField.addEventListener('input', function() {

var alphanumeric = /^[a-zA-Z0-9]*$/;

if (!alphanumeric.test(typeField.value)) {
alert('Please enter only alphanumeric characters for the "Type" field.');

typeField.value = ''; 
}
});



