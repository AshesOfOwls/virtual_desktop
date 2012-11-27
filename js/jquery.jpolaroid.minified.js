/**
 * jPolaroid
 *   http://steveram.info/jPolaroid/
 *
 * Copyright (c) 2009 Steven Ramkumar (http://steveram.info)
 * Licensed under GPL (GPL-LICENSE.txt).
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the author of nogoodatcoding.com
 *   http://nogoodatcoding.com/
 */

jQuery.fn.polaroid=function(options){var options=jQuery.extend({tape:true,shadow:"left-bottom",bottom:"33px",top:"22px",left:"27px",right:"27px",shadowPos:"bottom-right",shadowColor:"#CCCCCC",backgroundColor:"#FDFDFD"},options);return this.each(function(){$(this).addClass('polaroid-pic');$(this).wrap('<div class="polaroid-container"></div>');$(this).wrap('<div class="polaroid-shadow"></div>');$(this).wrap('<div class="polaroid"></div>');$(this).wrap('<div class="polaroid-content-container"></div>');$(this).parent().attr("style","margin:"+options.top+" "+options.right+" "+options.bottom+" "+options.left);switch(options.shadowPos){case"bottom-right":$(this).parent().parent().attr("style","top: -3px; left:-3px; background-color:"+options.backgroundColor);break;case"bottom-left":$(this).parent().parent().attr("style","top: -3px; left:3px; background-color:"+options.backgroundColor);break;case"top-left":$(this).parent().parent().attr("style","top: 3px; left:3px; background-color:"+options.backgroundColor);break;case"top-right":$(this).parent().parent().attr("style","top: 3px; left:-3px; background-color:"+options.backgroundColor);break;default:$(this).parent().parent().attr("style","top: -3px; left:-3px; background-color:"+options.backgroundColor)}$(this).parent().parent().parent().attr("style","background-color:"+options.shadowColor);if(options.tape===true){$(this).parent().parent().parent().parent().append('<span class="tape top-left">&nbsp;</span>');$(this).parent().parent().parent().parent().append('<span class="tape top-right">&nbsp;</span>')}})};