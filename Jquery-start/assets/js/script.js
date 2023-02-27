$(document).ready(function(){
    // let elem = document.querySelector("h1");

    // let elem = $("h1")
    // console.log(elem.text("sagol"))
    // console.log(elem.html("<span>salam</span>"))

    // console.log(elem.html("salam").text())



    // $("button").click(function(){
    //     $(this).css("background-color", "red")
    // })


    
    // $(".check").click(function(){
    //     $(this).css("background-color", "red")
    // })

    
    // $(".add").click(function(){
    //     $(this).css("background-color", "magenta")
    //     $(this).next().css("background-color", "gray")
    // })


    // $(".content").hide();



    //  $(".hide").click(function(){
    //     $(".content").hide(2000,function(){
    //         console.log("salam")

    //     })
        
    // })


    // $(".show").click(function(){
    //     $(".content").show(2000,function(){
    //         $(this).css("background-color", "red")

    //     })
        
    // })


    // $(".toggle").click(function(){
    //     $(".content").toggle(2000);
    // })


 



    // $(".show").click(function(){
    //     $(".content").slideDown(500,function(){
    //         $(this).css("background-color", "red")

    //     })
        
    // })



    $(".hide").click(function(){
        $(".content").slideUp(500)
           
        
    })

    $(".show").click(function(){
        $(".content").slideDown(500)
        
        
    })

    $(".toggle").click(function(){
        $(".content").slideToggle(500)
        
        
    })













})