var zindexCount = 2002;
function Desktop() {
	var self = this;
	
	this.object = $('<div id="desktop"><div id="desktopText">Virtual Desktop</div></div>');
	
	this.object.appendTo('body');
	
	var cpButton = $('<div id="cpButton"><p>Control Panel</p></div>');
	
	var cpPanel = $('<div id="cpPanel" class="ui-draggable"><h1>Control Panel:</h1></div>');
	
	var cpForm = $('<br /><label for="backgroundUrl">Background Image:</label><br /><br /><input size="80" id="backgroundImage" />');
	var save = $('<div id="save"><p>Save</p></div>');
	
	var taskbar = $('<div id="taskbar"><div id="taskbarLeft"></div><div id="taskbarItems"></div><div id="taskbarRight"></div></div>');
	
	var addItem = $('<div id="addItem"><div id="itemTypeDiv"><label for="itemType">Item Type:</label><select id="addItemDropdown"><option>External Link</option><option>Internal Link</option><option>Picture</option></select></div><h1>Add Taskbar Item:</h1><div id="addItemForm">Name: <input value="" id="itemName" size="60" /><br /><br />URL: <input value="" id="itemUrl" size="79" /><div id="itemIcon">Item Icons:<ul><li><img src="img/icons/google_48.png" /><br /><input name="iconSelect" type="radio" value="google" /></li><li><img src="img/icons/flickr_48.png" /><br /><input type="radio" name="iconSelect" value="flickr" /></li><li><img src="img/icons/blinklist_48.png" /><br /><input type="radio" name="iconSelect" value="blinklist" /></li><li><img src="img/icons/book_48.png" /><br /><input type="radio" name="iconSelect" value="book" /></li><li><img src="img/icons/camera_48.png" /><br /><input type="radio" name="iconSelect" value="camera" /></li><li><img src="img/icons/coffee_mug_48.png" /><br /><input type="radio" name="iconSelect" value="coffee_mug" /></li><li><img src="img/icons/comment_48.png" /><br /><input type="radio" name="iconSelect" value="comment" /></li><li><img src="img/icons/delicious_48.png" /><br /><input type="radio" name="iconSelect" value="delicious" /></li><li><img src="img/icons/designfloat_48.png" /><br /><input type="radio" name="iconSelect" value="designfloat" /></li><li><img src="img/icons/feedburner_48.png" /><br /><input type="radio" name="iconSelect" value="feedburner" /></li><li><img src="img/icons/folder_48.png" /><br /><input type="radio" name="iconSelect" value="folder" /></li><li><img src="img/icons/furl_48.png" /><br /><input type="radio" name="iconSelect" value="furl" /></li><li><img src="img/icons/globe_48.png" /><br /><input type="radio" name="iconSelect" value="globe" /></li><li><img src="img/icons/home_48.png" /><br /><input type="radio" name="iconSelect" value="home" /></li><li><img src="img/icons/image_48.png" /><br /><input type="radio" name="iconSelect" value="image" /></li><li><img src="img/icons/mail_48.png" /><br /><input type="radio" name="iconSelect" value="mail" /></li><li><img src="img/icons/mixx_48.png" /><br /><input type="radio" name="iconSelect" value="mixx" /></li><li><img src="img/icons/newspaper_48.png" /><br /><input type="radio" name="iconSelect" value="newspaper" /></li><li><img src="img/icons/paper&pencil_48.png" /><br /><input type="radio" name="iconSelect" value="paper&pencil" /></li><li><img src="img/icons/reddit_48.png" /><br /><input type="radio" name="iconSelect" value="reddit" /></li><li><img src="img/icons/rss_48.png" /><br /><input type="radio" name="iconSelect" value="rss" /></li><li><img src="img/icons/search_48.png" /><br /><input type="radio" name="iconSelect" value="search" /></li><li><img src="img/icons/smile_grin_48.png" /><br /><input type="radio" name="iconSelect" value="smile_grin" /></li><li><img src="img/icons/spanner_48.png" /><br /><input type="radio" name="iconSelect" value="spanner" /></li><li><img src="img/icons/sumbleupon_48.png" /><br /><input type="radio" name="iconSelect" value="sumbleupon" /></li><li><img src="img/icons/technorati_48.png" /><br /><input type="radio" name="iconSelect" value="technorati" /></li><li><img src="img/icons/twitter_48.png" /><br /><input type="radio" name="iconSelect" value="twitter" /></li><li><img src="img/icons/yahoo_48.png" /><br /><input type="radio" name="iconSelect" value="yahoo" /></li></ul></div></div></div>');
	
	var itemSave = $('<div id="itemSave" class="ui-draggable"><p>Add Item</p></div>');
	
	taskbar.prependTo(this.object);
	cpButton.appendTo(this.object);
	addItem.append(itemSave).appendTo(this.object);
	cpPanel.append(cpForm).appendTo(this.object);
	save.appendTo(cpForm);
	
	cpPanel.hide();
	addItem.hide();
	
	cpButton.hover(function() {
		cpButton.css('opacity','1.0');
	},function() {
		cpButton.css('opacity','0.8');
	});
	
	cpButton.click(function() {
		if(cpPanel.is(':visible')) {
			cpPanel.hide("blind", {}, 1000);
		} else {
			cpPanel.show("blind", {}, 1000);
			$('#backgroundImage').val(self.object.css('background-image').split('"')[1]);
		}
	});
	
	save.hover(function() {
		save.css('opacity','1.0');
	},function() {
		save.css('opacity','0.7');
	});
	
	save.click(function() {
		self.object.css('background-image','url("'+$('#backgroundImage').val()+'")');
	});
	
	itemSave.hover(function() {
		itemSave.css('opacity','1.0');
	},function() {
		itemSave.css('opacity','0.7');
	});
	
	$('#itemSave').click(function() {
		var selected = $("#addItemDropdown option:selected").text();
		
		if(selected == "Picture") {
			new pictures($('#itemUrl').val());
		} else if(selected == "External Link") {
			new TaskbarItem($('#itemName').val(),$('#itemUrl').val(),$('input[@name=itemIcon]:checked').val(),'new');
		} else {
			new TaskbarItem($('#itemName').val(),$('#itemUrl').val(),$('input[@name=itemIcon]:checked').val(),'self');
		}
				
	});
}

var percent = 37;

function Window(url,title,feed) {
	var self = this;
	this.container = $('<div class="window ui-draggable ui-widget-content"></div>');
	
	this.close = $('<div class="close"></div>');
	
	this.windowItem = $('<div class="windowItem">'+title+'</div>');
	this.close.appendTo(this.windowItem);
	
	this.windowItem.appendTo(this.container);
	
	if(feed == "rss") {
		this.feed = $('<div id="rssFeeder"></div>');
		this.container.append(this.feed);
		this.feed.rssfeed(url, {
			limit: 7
		});
	} else {
		this.container.append('<iframe src=\"'+url+'\"></iframe><div class="dragme ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se"><img src="img/resize.png" /></div>');
	}
	
	
	
	this.container.draggable();
	this.container.resizable();

	this.close.click(function() {
		self.container.hide("blind", {}, 1000);
		var waitToClose = setInterval(function() {
			self.container.remove();
			clearInterval(waitToClose);
		},1000);
	});
	
	this.container.appendTo('#desktop');
	this.container.hide();
	this.container.show("blind", {}, 1000);
	self.container.css('z-index',zindexCount);
		zindexCount++;
	
	this.container.mousedown(function() {
		$('.window').each(function() {
			$(this).css('z-index','1000');
		});
		self.container.css('z-index',zindexCount);
		zindexCount++;
	});
	
}

function TaskbarItem(itemText,itemUrl,itemIcon,openIn) {
	var self = this;

	this.object = $('<div class="item"><div class="itemText">'+itemText+'</div></div>');
	
	$('#taskbarItems').append(this.object);
	var itemsWidth = parseInt($('#taskbarItems').css('width'))+65;
	var taskbarWidth = parseInt($('#taskbar').css('width'))+74;
	var taskbarPercent = (percent - 1)+'%';
	percent = percent - 1;
	
	$('#taskbarItems').css('width',itemsWidth);
	$('#taskbar').css('width',taskbarWidth);
	$('#taskbar').css('left',taskbarPercent);
	
	if(itemIcon != '') {
		self.object.css('background-image','url("img/icons/'+itemIcon+'_48.png")');
	}
	
	
	this.object.hover(function() {
		self.object.css('margin-top','-25px');
	},function() {
		self.object.css('margin-top','-17px');
	});
	
	if(itemText == 'Add Item') {
		this.object.addClass('addItem');
		this.object.click(function() {
			self.object.effect("bounce", { times:3 }, 200);
			if($('#addItem').is(':visible')) {
				$('#addItem').hide("blind", {}, 1000);
			} else {
				$('#addItem').show("blind", {}, 1000);
			}
		});
	} else {
		this.object.click(function() {
		if(itemIcon == 'rss') {
			self.object.effect("bounce", { times:3 }, 200);
			new Window(itemUrl,itemText,'rss');
		} else if(openIn == "new") {
				self.object.effect("bounce", { times:3 }, 200);
				window.open(itemUrl,'_blank');
			} else {
				self.object.effect("bounce", { times:3 }, 200);
				if(itemUrl != '') {
					new Window(itemUrl,itemText);
				}
			}
		});
	}
}

function pictures(url) {
	var self = this;
	this.container = $('<div class="pictures ui-draggable"></div>');
	
	this.image = $('<img src="'+url+'" />');
	
	var rotation = -45;
	
	this.container.draggable();
	
	var rotation = rotation + (Math.floor(Math.random()*91));
	var totalX = parseInt($('#desktop').css('width').split('px')[0]);
	var totalY = parseInt($('#desktop').css('height').split('px')[0]);
	totalX = -30 + (Math.floor(Math.random()*(totalX-200)));
	totalY = 0 + (Math.floor(Math.random()*(totalY-200)));
	
	this.container.css('-moz-transform','rotate('+rotation+'deg)');
	this.container.css('left',totalX+'px');
	this.container.css('top',totalY+'px');
	
	this.container.append(this.image).appendTo('#desktop');
	
	this.image.polaroid();
	
	this.container.mousedown(function() {
		$('.pictures').each(function() {
			$(this).css('z-index','9');
		});
		self.container.css('z-index',zindexCount);
		zindexCount++;
	});
}

$(document).ready(function() {
	
	new Desktop();
	new TaskbarItem('Add Item','','');
	new TaskbarItem('Photos','http://www.flickr.com','flickr');
	new TaskbarItem('Mail','http://www.gmail.com','mail','new');
	new TaskbarItem('Search','http://www.google.com','search');
	new TaskbarItem('RSS','http://feeds.reuters.com/Reuters/InternetNews','rss');
	new pictures('http://steveram.info/jpolaroid/_images/jquery-logo.gif');
	
	$("#addItemDropdown").draggable();
	$("#cpPanel").draggable();
	
	$('#desktop').append('<div id="weather" class="ui-draggable"></div>');
	
	$.simpleWeather({
        zipcode: '97210',
        unit: 'f',
        success: function(weather) {
            $("#weather").append('<h2>'+weather.city+', '+weather.region+'</h2>');
            $("#weather").append('<img style="float:left;" width="125px" src="'+weather.image+'">');
            $("#weather").append('<p>'+weather.temp+'&deg; '+weather.units.temp+'<br /><span>'+weather.currently+'</span></p>');
            $("#weather").append('<a href="'+weather.link+'">View Forecast &raquo;</a>');
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });

	$('#weather').draggable();
	
	$('#weather').mousedown(function() {
		$(this).css('z-index',zindexCount);
		zindexCount++;
	});

	
	new Window('http://www.yahoo.com','Yahoo');
});