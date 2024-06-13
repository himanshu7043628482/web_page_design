$(document).ready(function () {
    console.log("I am in a new file now");
    // $(function()){}
    // Your jQuery code here

    console.log("We are using jQuery");
    // jQuery Syntax looks like this-->
    // $('selector').action()

    // click on all the p elements. This is an example of element selector
    // $('p').click(); //click on p
    $('p').click(function () {
        console.log('you clicked on p', this);
        // $('p').hide();
        // $(this).hide();
        // $('#id').hide();
        // $('.class').hide();

    }); //do this when we click on p

    // $('p').dblclick(function () {
    //     console.log('you double clicked on p',this);
    // });

    // $('p').mouseenter(function () {
    //     console.log('mouse enter',this);
    // });

    // $('p').hover(function () {
    //     console.log('you hover on',this);
    // });

    // there are three main types of selector in jQouery
    // 1. element selector
    // 2. id selector
    // 3. class selector

    // 1. Element selector - This  is an example of element selector which click on all p
    // $('p').click();

    // 2. ID selector - this is an example if id selector
    // $('#id').click();

    // 3. class selector - this is an example of class selector
    // $('.class').click(); 

    // other selectors--->
    // $('*').click(); //click on all the elements
    // $('p.class').click(); //click on all the class elements
    // $('p:first').click(); //click on first elements 

    // Events in jQuery--->
    // Mouse events = click, double click,mouse enter, mouse leave
    // KeyboaredEvent = keypress,keydown,Mediakeystatusmap
    // form Event = submit,change,focus,blure
    // document/window Event = load,resize,scroll,unload

    // demoing the on method--->
    $('p').on({
        click: function () {
            console.log("thanks for clicking", this);
        },
        mouseleave: function () {
            console.log("mouseleave");
        }
    });
    // $('#lorem').hide(1000,function(){
    //     console.log('hidden');
    // });
    // $('#lorem').show(1000,function(){
    //     console.log('show');
    // });

    // $('#btn').click(function(){
    //     $('#lorem').toggle(1000);
    // });

    // Slide method - speed and callback parameter method are optional --->
    // $('#lorem').slideUp(1000, function(){
    //     console.log('Done');
    // });
    // $('#lorem').slideDown(1000);
    // $('#lorem').slideToggle(1000);

    // Animate function in jQuery--->
    // $('#lorem').animate({
    //     opacity: 0.3,
    //     height: '150px',
    //     width: '350px'
    // },1000)
    // $('#lorem').animate({opacity:0.2},4000);
    // $('#lorem').animate({opacity:0.9},1000);
    // $('#lorem').animate({width:'350px'},10000);

    // $('#tex').val('setting it to himanshu');
    // $('#tex').html('setting it to himanshu');
    // $('#inp').val('setting it to himanshu');
    // $('#inp').html('setting it to himanshu');
    // $('#tex').empty();
    // $('#inp').empty();
    // $('#lorem').remove();
    // $('#lorem').text('you are good');

});