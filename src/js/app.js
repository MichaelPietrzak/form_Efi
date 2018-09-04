// jQuery.validator.setDefaults({
//     debug: true,
//     success: "valid"
//   });
//   $( "#registration" ).validate({
//     rules: {
//         username: {
//             required: true,
//             lowercasesymbols: true, 
//             nowhitespace: true
//         },
//       email: {
//         required: true,
//         email: true
//       },
//       pin: {
//           required: true,
//           number: true,
//           maxlength: 8
//       },
//       amount: {
//           required: true,
//           range: [0, 100]
//       },
//       checkbox: {
//             required: true
//           },
//     },

//     messages: {
//         username: {
//             required: "Lowercase letters with no space required",
//         },
//         email: {
//             required: "email address required"
//         }
//     }
    
//   });

// $.validator.addMethod('lowercasesymbols', function(value) {
//     return value.match(/^[a-z\[!@# $%&*\/?=_.,:;\\\]"-]+$/);
// }, 'Use only lowercase letters with no space');

// $.validator.addMethod("nowhitespace", function(value, element) {
// 	return this.optional(element) || /^\S+$/i.test(value);
// }, "No white space please");

// $.validator.addMethod('email', function(value) {
// return value.match(/^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
// }, 'Proper email with @ symbol');

// $.validator.addMethod("integer", function(value, element) {
// 	return this.optional(element) || /^-?\d+$/.test(value);
// }, "Only number characters please");

// ===========================================================


$(document).ready(function() {

	//walidacja nazwy uzytkownika
	$('#username').on('blur', function() {
		var input = $(this);
        var pattern = /^[a-z\[!@# $%&*\/?=_.,:;\\\]"-]+$/ && /^\S*$/;
        var username = pattern.test(input.val());
		if(username){
			input.removeClass("invalid").addClass("valid");
			input.next('.komunikat').text("Wprowadzono poprawną nazwę.").removeClass("blad").addClass("ok");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('.komunikat').text("tylko małe litery i bez spacji").removeClass("ok").addClass("blad");
		}
	});
		
	//walidacja email
	$('#email').on('blur', function() {
		var input = $(this);
        var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var is_email = pattern.test(input.val());
		if(is_email){
			input.removeClass("invalid").addClass("valid");
			input.next('.komunikat').text("Wprowadzono poprawny email.").removeClass("blad").addClass("ok");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('.komunikat').text("Wprowadź poprawny email!").removeClass("ok").addClass("blad");
		}
    });	

    //walidacja kwota
    $('#amount').on('blur', function() {
		var input = $(this);
		var amount_length = input.val().length;
		if(amount_length >= 0 && amount_length <= 100){
			input.removeClass("invalid").addClass("valid");
			input.next('.komunikat').text("Wprowadzono poprawną kwote.").removeClass("blad").addClass("ok");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('.komunikat').text("kwota musi byc miedzy (; 100> ").removeClass("ok").addClass("blad");
		}
	});
	
	//Po próbie wysłania formularza
		$('#submit').click(function(event){
			var name = $('#name');
			var email = $('#email');
			
			if(name.hasClass('valid') && email.hasClass('valid') ){
				alert("Pomyślnie wysłano formularz.");	
			}
			else {
				event.preventDefault();
				alert("Uzupełnij wszystkie pola!");	
			}
		});
});