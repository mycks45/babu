$.validator.addMethod("alpha", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
}, "Letters only");


$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
           fname:{
            alpha: true
           },
           emailAdderss:{
               email: true
           },
           Mobile:{
               Number: true,
               minlength:10
           },
           place:{
               maxlength:20
           }


        }
    })
})
// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })