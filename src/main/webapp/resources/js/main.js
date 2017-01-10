$(document).ready(function() {

	//TODO: Refactor into something a human would have actually written
	var currentdate = new Date(); 
    var dateAndTime = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds();
	
    var springColors = ['#5484A4','#F6D155', '#004B8D', '#F2552C', 
                        '#95DEE3', '#EDCDC2', '#88B04B', '#CE3175', 
                        '#5A7247', '#CFB095'];
    var fallColors = ['#4C6A92', '#92B6D5', '#838487', '#B93A32',
                      '#AF9483', '#AD5D5D', '#006E51', '#D8AE47', 
                      '#9E4624', '#B76BA3'];
    var rand;
    
    if (currentdate.getHours() <= 9 || currentdate.getHours() >= 18) {
        rand = fallColors[Math.floor(Math.random() * springColors.length)];
    } else {
        rand = springColors[Math.floor(Math.random() * springColors.length)];
    }
    
    if (rand === "#CFB095" || 
        rand === '#EDCDC2' || 
        rand === '#95DEE3' || 
        rand === '#F6D155' ||
        rand === '#92B6D5' ||
        rand === '#D8AE47' ||
        rand === '#B76BA3' ||
        rand === '#88B04B') {
    	$('.container-fluid').css('background-color', rand).css('color', '#2f2f2f');
    } else {
    	$('.container-fluid').css('background-color', rand).css('color', 'white');
    }
	
	var colors = ['#5484A4', '#F6D155', '#004B8D', '#F2552C', '#95DEE3', '#EDCDC2', '#88B04B', '#CE3175', '#5A7247'];
	
	$('.navbar-nav li a, .navbar-brand').mouseenter(function() {
	    var rand = colors[Math.floor(Math.random() * colors.length)];
	    $(this).css('color', rand);
	});
	
	$('.navbar-nav li a, .navbar-brand').mouseleave(function() {
	    var rand = colors[Math.floor(Math.random() * colors.length)];
	    $(this).css('color', 'grey');
	});
	
	$('footer a, .mid-page i').mouseenter(function() {
	    var rand = colors[Math.floor(Math.random() * colors.length)];
	    $(this).css('color', rand);
	});
	
	$('footer a, .mid-page i').mouseleave(function() {
	    var rand = colors[Math.floor(Math.random() * colors.length)];
	    $(this).css('color', 'white');
	});
	
	
	$('[data-toggle="tooltip"]').tooltip();
	
//	TODO: Make switchable between categories
	
	$('#categoryFilter').change(function() {
		if($(this).val() == '1') {
			$('h2:not(.category-id-1)').toggle();
			$('.book:not(.book-category-1)').toggle();
		} 
		if($(this).val() == '2') {
			$('h2:not(.category-id-2)').toggle();
			$('.book:not(.book-category-2)').toggle();
		}
		if($(this).val() == '0') {
			location.reload();
		}
		
	});
		
		
//		if($(this).val() == '1') {
//			$('h2:not(.category-id-1)').hide();
//			$('.book:not(.book-category-1)').hide();
//		} 
//		if($(this).val() == '2') {
//			$('h2:not(.category-id-2)').hide();
//			$('.book:not(.book-category-2)').hide();
//		} 
//		if($(this).val() == '0') {
//			location.reload();
//		}
//	});
});