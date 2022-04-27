$(document).ready(function(){
   //  1st icon
   var one,two,three,four,five;
   $('#one').click(function(){
      five= $('.five').css('display','none');
      two=$('.two').css('display','none');
      three=$('.three').css('display','none');
      four=$('.four').css('display','none');
      one= $('.one').css('display','block');
     $('.showmile').html=one;
  
 
});

   //2nd icon
   $('#two').click(function(){
      one= $('.one').css('display','none');
      five=$('.five').css('display','none');
      three=$('.three').css('display','none');
      four=$('.four').css('display','none');
     two=$('.two').css('display','block');
     $('.showmile').html=two;
 });

//  3rd
$('#three').click(function(){
   one= $('.one').css('display','none');
   two=$('.two').css('display','none');
   five=$('.five').css('display','none');
   four=$('.four').css('display','none');
   three=$('.three').css('display','block');
   $('.showmile').html=three;

});

//  4th
$('#four').click(function(){
   one= $('.one').css('display','none');
   two=$('.two').css('display','none');
   three=$('.three').css('display','none');
   five=$('.five').css('display','none');
   four=$('.four').css('display','block');
   $('.showmile').html=four;

});

//  3rd
$('#five').click(function(){
   one= $('.one').css('display','none');
   two=$('.two').css('display','none');
   three=$('.three').css('display','none');
   four=$('.four').css('display','none');
   five=$('.five').css('display','block');
   $('.showmile').html=five;

});
   })