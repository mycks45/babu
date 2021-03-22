$.validator.addMethod("alpha", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
}, "Letters only");


$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
           fname:{
            required: true,
            alpha: true
            
           },
           emailAdderss:{
               email: true,
               required:true
           },
           Mobile:{
               Number: true,
               minlength:10,
               required:true
           },
           place:{
               maxlength:20,
               required:true
           }


        }
    })
    $("submit-form").submit(function(e){
        alert('submit intercepted');
        e.preventDefault(e);
    });
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