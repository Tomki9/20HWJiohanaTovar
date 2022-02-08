console.log("This is a test."); 
$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
               $('#imagemodal').modal('show');   

                      

    });		
});

