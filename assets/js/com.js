
$(function () {
	var screenMode =  window.innerWidth > 1080 ? 'web' : 'mobile';
	var space = screenMode=='web'? 65 : 46;
	var extra = screenMode=='web'? 0 : 48;

    var isHoverEvent = screenMode == 'web' ? true : false;
	gnbEvent(isHoverEvent);
	
	if($('body').find('.menuContainer').length>0)  hassticky4 = $('.menuContainer').offset().top;
	
	function gnbEvent(str){}
		
		
	var submenu = (function(){
		var tabmenu =null;
		var menuSetting = {
			slidesPerView:'auto',
			navigation: false,
			pagination: false,
		};
		if(screenMode == 'mobile'){
			tabmenu = new Swiper('.tabmenu', menuSetting);
			var $tabmenuEl=$(tabmenu.el);
			tabmenu.on('reachBeginning', function () {
				$tabmenuEl.removeClass('last');
				$tabmenuEl.addClass('first');
			});
			tabmenu.on('reachEnd', function () {
				$tabmenuEl.removeClass('first');
				$tabmenuEl.addClass('last');
			});
			$('.tabmenu').find('li').each(function(i){
				if($(this).hasClass('on')) tabmenu.slideTo(i)
			});
		}else if( tabmenu != null){
			tabmenu.destroy(true);
			tabmenu =null;
		}
		return tabmenu;
	})();
    

	
});











