$(document).ready(function(){
    $("#signup-form").validate({
       rules:{
           fname:{
            required:true,
            minlength:4
                 },
           sname:{
            required:true,
            minlength:4
                 },
           emailAddress:{
            required:true,
            email:true
                 },
           sname:{
            required:true,
            Number:true
                 },
           password:{
            required:true,
            minlength:8,
            maxlength:16
                 },


       }
        
    })
})