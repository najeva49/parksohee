$(document).ready(function () {


   $('.btngroup a').click(function(e){
       e.preventDefault();

       var aHref = $(this).attr('href');
       console.log(aHref);

       //선택된 탭메뉴 디자인 변경
       $(this).addClass('on').siblings().removeClass('on');

       //내용변경

       $(aHref).addClass('on').siblings().removeClass('on');
   }); 

   
});
