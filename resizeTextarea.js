(function( $ ){
  $.fn.textareaResize = function() {

    return this.each(function() {

			var $this = $(this);
		
			function setPaddleCoords() {
							$('textarea').each(function(index) {
								var textarea_position = $(this).position();
								var paddle_left = $(this).width() + textarea_position.left - 10;
								var paddle_top = $(this).height() + textarea_position.top - 11;
								if ($.browser.webkit) { 
									var paddle_left = $(this).width() + textarea_position.left - 3; 
									var paddle_top = $(this).height() + textarea_position.top - 4;
								}
								
								if ($(this).next().hasClass('paddle')) {
									$(this).next()
										.css('left',paddle_left)
										.css('top',paddle_top);
								}
							});
			}
			$this.each(function(index) {
				$(this).after('<div class="paddle '+index+'"></div>').css('resize','none').parent().css('position','relative');
				var textarea_position = $(this).position();
				setPaddleCoords();
				$(this).next()
					.css('position','absolute')
					.css('cursor','se-resize')
					.css('width','6px')
					.css('height','6px')
					.css('background','black');
			}); 

			$('.paddle').draggable({
	    	drag: function(event,ui) {
					setPaddleCoords();
					var this_textarea = $(this).prev('textarea'),
			 	 			this_paddle = $(this),
	         		new_width = ui.position.left - parseInt(this_paddle.css('left')) + this_textarea.width(),
	         		new_height = ui.position.top - parseInt(this_paddle.css('top')) + this_textarea.height();
	        this_textarea.width(new_width);
	        this_textarea.height(new_height);
		 		}
			});
		
		});

	};
})( jQuery );