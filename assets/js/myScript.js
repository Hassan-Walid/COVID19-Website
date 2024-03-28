


body = document.getElementsByTagName('body')[0];
header = document.getElementById('headder');
nav = document.getElementById('nav_bar');
btn_menu = document.getElementById('menu');
list_menu = document.getElementById('list_of_menu');


sec_1 = document.getElementById('sec_1');
text_main_content = document.getElementById('text_main_content');
first_btn_main_content =  document.getElementById('first_btn_main_content'); 
second_btn_main_content =  document.getElementById('second_btn_main_content'); 
record_world = document.getElementById('record_world');
record_death = document.getElementById('record_death');
record_recovrid = document.getElementById('record_recovrid');
date = document.getElementById('date');


sec_2 = document.getElementById('sec_2');
phase_3_second_content =  document.getElementsByClassName('phase_3_second_content')[0];
title_list_second_content = document.getElementsByClassName('title_list_second_content')[0];


sec_3 = document.getElementById('sec_3');
phase_3_third_content =  document.getElementsByClassName('phase_3_third_content')[0];
box_1_third_content = document.getElementsByClassName('box_1_third_content')[0];
box_2_third_content = document.getElementsByClassName('box_2_third_content')[0];
box_3_third_content = document.getElementsByClassName('box_3_third_content')[0];
p_box_1_third_content = document.getElementsByClassName('p_box_1_third_content')[0];
p_box_2_third_content = document.getElementsByClassName('p_box_2_third_content')[0];
p_box_3_third_content = document.getElementsByClassName('p_box_3_third_content')[0];



// Start dark mode




    ch_dark=0;
    ch_light=0;
 $(window).on('dblclick' , function () {

   

    if (ch_dark==0){
        d_m =confirm("Are you sure convert to Dark mode..?");
        //console.log(x);
        if(x==true)
        ch_dark++;
    }
    console.log(x);
   
if (d_m==true){

        body.classList.toggle("bg_night");
        header.classList.toggle("bg_night");
        btn_menu.classList.toggle("bg_night");
        $('#sec_1').toggleClass("bg_night");
        $('#sec_2').toggleClass("bg_night");
        $('sec_3').toggleClass("bg_night"); 
        $('#sec_4').toggleClass("bg_night");
        $('#sec_5').toggleClass("bg_night");
        $('#sec_6').toggleClass("bg_night");
        $('#sec_7').toggleClass("bg_night");
        $('#sec_8').toggleClass("bg_night");
        $('#sec_9').toggleClass("bg_night");
        $('footer').toggleClass("bg_night");
       
         text_main_content.classList.toggle("text_white");
         first_btn_main_content.classList.toggle("text_white");
         second_btn_main_content.classList.toggle("bg_night");
          $('.btn_third_content').toggleClass('text_white');
         sec_2.classList.toggle("bg_night");
        phase_3_second_content.classList.toggle("text_white");
        title_list_second_content.classList.toggle("text_white");


        sec_3.classList.toggle("bg_night");
        phase_3_third_content.classList.toggle("text_white");
        
        
       // $('#photo_2_forth_content').toggleClass("bg_night");
        // $("#photo_2_forth_content").toggleClass("bg_night");
        // $("#photo_3_forth_content").toggleClass("bg_night");
        box_1_third_content.classList.toggle("bg_night");
        box_2_third_content.classList.toggle("bg_night");
        box_3_third_content.classList.toggle("bg_night");
        p_box_1_third_content.classList.toggle("text_wheat");
        p_box_2_third_content.classList.toggle("text_wheat");
        p_box_3_third_content.classList.toggle("text_wheat");
        
        photo =document.querySelectorAll("img");
        for(x=0;x<photo.length;x++){
            photo[x].classList.toggle("bg_night");
        }

        para=document.querySelectorAll("p");
        for(x=0;x<para.length;x++){
            para[x].classList.toggle("text_blue");
        }

        $(".box_1_forth_content").toggleClass("bg_night");
        $(".box_2_forth_content").toggleClass("bg_night");
        $(".box_3_forth_content").toggleClass("bg_night");
        $(".btn_forth_content").toggleClass("text_white");
        $(".first_btn_fifth_content").toggleClass("text_white");
        $(".title_accordion").toggleClass("bg_night");
        $(".title_accordion").toggleClass("text_wheat");
        $(".li_list_eighth_content").toggleClass("text_white");
        $(".content_accordion").toggleClass("text_white");
        $(".box_1_ninth_content").toggleClass("bg_night");
        $(".box_2_ninth_content").toggleClass("bg_night");
        $(".box_3_ninth_content").toggleClass("bg_night");

       


         ch_dark++;
    }

    
  
});

// End dark mode



$(function () {

    

// start acoredion

$("#choice_1_list_eighth_content").on("click" , function () {
    $(this).addClass("active_list_eighth_content");
    $("#choice_2_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_3_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_4_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_5_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_6_list_eighth_content").removeClass("active_list_eighth_content");
    console.log("ch_1");
    $("#accordion_1").show();
    $("#accordion_2").hide();
    $("#accordion_3").hide();
    $("#accordion_4").hide();
    $("#accordion_5").hide();
    $("#accordion_6").hide();
});

$("#choice_2_list_eighth_content").on("click" , function () {
    $(this).addClass("active_list_eighth_content");
    $("#choice_1_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_3_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_4_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_5_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_6_list_eighth_content").removeClass("active_list_eighth_content");
    console.log("ch_2");  
    $("#accordion_2").show();
    $("#accordion_1").hide();
    $("#accordion_3").hide();
    $("#accordion_4").hide();
    $("#accordion_5").hide();
    $("#accordion_6").hide();
});

$("#choice_3_list_eighth_content").on("click" , function () {
    $(this).addClass("active_list_eighth_content");
    $("#choice_1_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_2_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_4_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_5_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_6_list_eighth_content").removeClass("active_list_eighth_content");
    console.log("ch_3"); 
    $("#accordion_1").hide();
    $("#accordion_2").hide();
    $("#accordion_3").show();
    $("#accordion_4").hide();
    $("#accordion_5").hide();
    $("#accordion_6").hide(); 
   
});
$("#choice_4_list_eighth_content").on("click" , function () {
    $(this).addClass("active_list_eighth_content");
    $("#choice_1_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_2_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_3_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_5_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_6_list_eighth_content").removeClass("active_list_eighth_content");
    console.log("ch_4"); 
    $("#accordion_1").hide();
    $("#accordion_2").hide();
    $("#accordion_3").hide();
    $("#accordion_4").show();
    $("#accordion_5").hide();
    $("#accordion_6").hide(); 
   
});

$("#choice_5_list_eighth_content").on("click" , function () {
    $(this).addClass("active_list_eighth_content");
    $("#choice_1_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_2_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_3_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_4_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_6_list_eighth_content").removeClass("active_list_eighth_content");
    console.log("ch_5"); 
    $("#accordion_1").hide();
    $("#accordion_2").hide();
    $("#accordion_3").hide();
    $("#accordion_4").hide();
    $("#accordion_5").show();
    $("#accordion_6").hide(); 
   
});

$("#choice_6_list_eighth_content").on("click" , function () {
    $(this).addClass("active_list_eighth_content");
    $("#choice_1_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_2_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_3_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_4_list_eighth_content").removeClass("active_list_eighth_content");
    $("#choice_5_list_eighth_content").removeClass("active_list_eighth_content");
    console.log("ch_6"); 
    $("#accordion_1").hide();
    $("#accordion_2").hide();
    $("#accordion_3").hide();
    $("#accordion_4").hide();
    $("#accordion_5").hide();
    $("#accordion_6").show(); 
   
});




let old_id; 
let old;
old_style = 'display: none;';
$(".accordion").on("click", ".title_accordion", function() {
    
    new_id= $(this).next().attr('id');  //acc_1
    neww = $(this);
  
   
    $(this).find(".icon_accordion_plus").toggle();
     $(this).find(".icon_accordion_minus").toggle();
        
        

    if (old_id !=new_id){
        // console.log(old);
        aa=$(old).find(".icon_accordion_minus").attr("style");
        if (old_style != aa){
        $(old).find(".icon_accordion_minus").toggle();
        $(old).find(".icon_accordion_plus").toggle();
            console.log("ssaasasasaass");
        }
        console.log(aa);

        

        
        
        $(".content_accordion").hide();


        $(this).next().slideToggle();
        // $(this).find(".icon_accordion_plus").toggle();
        // $(this).find(".icon_accordion_minus").toggle();

        // $(".icon_accordion_plus").toggle();
        // $(".icon_accordion_minus").toggle();
       old_id =new_id;
       old =neww;
       
        
    }
    else{

        // $(this).find(".icon_accordion_plus").toggle();
        // $(this).find(".icon_accordion_minus").toggle();
        $(this).next().slideToggle();
       
    }
    });

// end acoredion





    $(btn_menu).on("click" , function () {
        // $(list_menu).css("display" , "block");
        $(list_menu).fadeIn(500);
        console.log("open");
    } );
    $("#close_list").on("click" , function () {
        // $(list_menu).css("display" , "none");
        $(list_menu).fadeOut(500);
        console.log("close");
    });
    

    $(window).on("scroll", function() {
        
        let position = $(".maincontent").offset();
        let position_height = $(".maincontent").outerHeight();
        let pos_2= $(".second_content").offset();
        let pos_2_height = $(".second_content").outerHeight();
        let sec_3_height = $(".section_3").outerHeight()+pos_2_height+position_height;
        let sec_3 = $(".section_3").offset();
        let pos_3_height = $(".symptoms").outerHeight()+sec_3_height;
         let pos_4_height = $(".section_5").outerHeight()+pos_3_height;
        let pos_5_height = $(".section_6").outerHeight()+pos_4_height;
         let pos_6_height = $(".section_7").outerHeight()+pos_5_height;
         let pos_7_height = $(".section_8").outerHeight()+pos_6_height;
         let pos_8_height = $(".section_9").outerHeight()+pos_7_height;
        // console.log( "p = " + position);
        // console.log($(window).scrollTop());
        console.log("scrol ="+ $(window).scrollTop());
       console.log("ss ="+ sec_3_height);
        if ($(window).scrollTop() > position.top) {

            
            $(header).addClass("active_nav");
            
            // console.log('I am here!');
        } else {
            $(header).removeClass("active_nav");
        };

        
       
        
        

         if ($(window).scrollTop() >pos_2.top){
         //console.log('hahhahhaha');
         $(".arrow_btn").show(100);
        }

        if($(window).scrollTop()  == position.top) {
            $(".arrow_btn").hide(100);
        }

        if($(window).scrollTop() < position_height-200){
          
         $("#home_id").addClass("active_link");
         $("#aboutCorona_id").removeClass("active_link");
         $("#symptoms_id").removeClass("active_link");
         $("#treatment_id").removeClass("active_link");
         $("#prevention_id").removeClass("active_link");
         $("#faq_id").removeClass("active_link");
         $("#news_id").removeClass("active_link");
         $("#do_dont_id").removeClass("active_link_do");


         
            
        }
        if( $(window).scrollTop() >=position_height-200){
            //console.log("heheh");
            $("#home_id").removeClass("active_link");
            $("#aboutCorona_id").addClass("active_link");
            $("#symptoms_id").removeClass("active_link");
            $("#treatment_id").removeClass("active_link");
            $("#prevention_id").removeClass("active_link");
            $("#faq_id").removeClass("active_link");
            $("#news_id").removeClass("active_link");
            $("#do_dont_id").removeClass("active_link_do");
           
        }
        if($(window).scrollTop() >=sec_3_height-200){
           // console.log("heheh");
           
            $("#home_id").removeClass("active_link");
            $("#aboutCorona_id").removeClass("active_link");
            $("#symptoms_id").addClass("active_link");
            $("#treatment_id").removeClass("active_link");
            $("#prevention_id").removeClass("active_link");
            $("#faq_id").removeClass("active_link");
            $("#news_id").removeClass("active_link");
            $("#do_dont_id").removeClass("active_link_do");
        }
       if($(window).scrollTop() >=pos_3_height-200){
            //console.log("heheh");
            $("#home_id").removeClass("active_link");
            $("#aboutCorona_id").removeClass("active_link");
            $("#symptoms_id").removeClass("active_link");
            $("#treatment_id").removeClass("active_link");
            $("#prevention_id").addClass("active_link");
            $("#faq_id").removeClass("active_link");
            $("#news_id").removeClass("active_link");
            $("#do_dont_id").removeClass("active_link_do");
        }
        if($(window).scrollTop() >=pos_4_height-200){
            //console.log("heheh");
            $("#home_id").removeClass("active_link");
            $("#aboutCorona_id").removeClass("active_link");
            $("#symptoms_id").removeClass("active_link");
            $("#treatment_id").addClass("active_link");
            $("#prevention_id").removeClass("active_link");
            $("#faq_id").removeClass("active_link");
            $("#news_id").removeClass("active_link");
            $("#do_dont_id").removeClass("active_link_do");
        }

        if($(window).scrollTop() >=pos_5_height-200){
            //console.log("heheh");
            $("#home_id").removeClass("active_link");
            $("#aboutCorona_id").removeClass("active_link");
            $("#symptoms_id").removeClass("active_link");
            $("#treatment_id").removeClass("active_link");
            $("#prevention_id").removeClass("active_link");
            $("#faq_id").removeClass("active_link");
            $("#news_id").removeClass("active_link");
            $("#do_dont_id").addClass("active_link_do");
        }

       if($(window).scrollTop() >=pos_6_height-200){
            //console.log("heheh");
            $("#faq_id").addClass("active_link");
            $("#home_id").removeClass("active_link");
            $("#aboutCorona_id").removeClass("active_link");
            $("#symptoms_id").removeClass("active_link");
            $("#treatment_id").removeClass("active_link");
            $("#prevention_id").removeClass("active_link");   
            $("#news_id").removeClass("active_link");
            $("#do_dont_id").removeClass("active_link_do");
            
        }
        if($(window).scrollTop() >=pos_7_height && $(window).scrollTop()<=pos_8_height ){
            //console.log("heheh");
            $("#home_id").removeClass("active_link");
            $("#aboutCorona_id").removeClass("active_link");
            $("#symptoms_id").removeClass("active_link");
            $("#treatment_id").removeClass("active_link");
            $("#prevention_id").removeClass("active_link");
            $("#faq_id").removeClass("active_link");
            $("#news_id").addClass("active_link");
            $("#do_dont_id").removeClass("active_link_do");
        }
        
      
        if($(window).scrollTop()>pos_8_height ){
            $("#home_id").removeClass("active_link");
            $("#aboutCorona_id").removeClass("active_link");
            $("#symptoms_id").removeClass("active_link");
            $("#treatment_id").removeClass("active_link");
            $("#prevention_id").removeClass("active_link");
            $("#faq_id").removeClass("active_link");
            $("#news_id").removeClass("active_link");
            $("#do_dont_id").removeClass("active_link_do");
        }
        

    
    });

    


    
    // ch_scroll=0;
    // if (ch_scroll ==0 ){
    //     alert("you can convert to Dark mode by double click"); 
    //     ch_scroll++;
    // }
   
    
   







    i=1;
    x=setInterval(function () {
        if(i>8949671){
            stop(x);
        }
        record_world.innerHTML = Math.ceil(i).toLocaleString("en");
        i = i+35455;
        
    } , 0.111);

    

    ii=1;
    y = setInterval(function () {
        if(ii>467432){
            stop(y);
        }
        record_death.innerHTML = Math.ceil(ii).toLocaleString("en");
        ii = ii+3545;

    } , 0.111);
    
    function stop(y) {
        clearInterval(y);
    }

    iii=1;
    z = setInterval(function () {
        if(iii>4556091){
            stop(z);
        }
        record_recovrid.innerHTML = Math.ceil(iii).toLocaleString("en");
        iii = iii+35455;

    } , 0.111);
    
    function stop(t) {
        clearInterval(t);
    }



    /*for(i=1;i<10000 ; i++){
        record_world.innerHTML = i;
    }*/
        
    let tim = new Date();
   let c = tim.toLocaleString();
    date.innerHTML = c;



    


});


