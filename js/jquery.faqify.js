(function( $ ) {

    $.fn.faqify = function( options ) {

    	var settings = $.extend({
            // default options
            showFirst 	: true,
            iconClosed 	: "+",
            iconOpen 	: "-",
            iconWidth	: 30,
        }, options );

    	//check setting datatype
    	if (typeof(settings.showFirst) != 'boolean')
    	console.error('showFirst expects a Boolean.');

    	if (typeof(settings.iconClosed) != 'string')
    	console.error('iconClosed expects a string.');

    	if (typeof(settings.iconOpen) != 'string')
    	console.error('iconOpen expects a string.');

    	if (typeof(settings.iconWidth) != 'number')
    	console.error('iconWidth expects a pixel integer.');

    	//Begin faqify
        $(this).each(function(){
        	$(this).addClass("faqify");

        	
        	//Apply Options
        	if(settings.showFirst) {
        		$("dt:first", this).addClass("open").next().show();
        	}

        	$("dt", this).attr("data-icon-closed", settings.iconClosed);
        	$("dt", this).attr("data-icon-open", settings.iconOpen);
        	$('<style />', {text: '.faqify dt::before {width:' + settings.iconWidth + 'px;} .faqify dd {margin-left:' + settings.iconWidth + 'px;}'}).appendTo('head');
        	//End Options
   			
        });

        //Hide/Show Faqs
        $("dt").click(function(){
        	$parent = $(this).parent();
			$("dd", $parent).slideUp();
			$("dt", $parent).removeClass("open");
			if($(this).next().css("display") == "none"){
				$(this).next().slideDown();
				$(this).addClass("open");
			} else {
				$(this).next().slideUp();
				$(this).removeClass("open");
			}
        });
        
    };
}( jQuery ));
