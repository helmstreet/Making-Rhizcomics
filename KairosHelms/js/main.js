$(document).ready(function(){
  
  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');




  // toggle menu 
  $header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
      
  });

$("html").click(function(e) {
  if(!$(e.target).closest('header').length) {
    $header_top.removeClass('open-menu');
  }
});
    
    $('h1, #menu li a').click(function(){
  $header_top.removeClass('open-menu');
});

  // fullpage customization
  $('#fullpage').fullpage({
    sectionsColor: [
//intro    
'#00A7AC', '#16A085', 
//timeline
'#6C7A89', '#95A5A6', '#6C7A89', 
'#95A5A6', '#6C7A89', '#95A5A6', '#6C7A89', '#95A5A6', 
//practice
'#317589', '#044F67', '#317589', '#044F67', '#317589', 
//genRec
'#9B59B6', 
//conc
'#D24D57', 
//cite
'#00A7AC', 
'#00A7AC', '#B8B89F',],
    anchors: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
    sectionSelector: '.section',
    slideSelector: '.slide',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    slidesNavPosition: 'top',
    loopHorizontal: false,
    scrollingSpeed: 700,
    paddingTop: '60px',
    css3: true,
    menu: '#menu',
    scrollOverflow: true,
    scrollOverflowOptions: { disablePointer: true, }
  }); 
});

