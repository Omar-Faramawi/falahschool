var Contact = function () {

    return {
        //main function to initiate the module
        init: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#gmapbg',
        // 26.2264254,50.5536027
				lat: 26.2264254,
				lng:50.5536027,
        zoom:12
			  });
			   var marker = map.addMarker({
                //26.1550063,50.526784
                lat: 26.1550063,
					      lng: 50.526784,
		            title: 'مدارس الفلاح الخاصة',
		            infoWindow: {
		                content: "<br>مدارس الفلاح الخاصة - بنين -بنات</br>عالي"
		            }
		        });

            var marker2 = map.addMarker({
                  //26.2526849,50.6067338
                  lat: 26.2526849,
                  lng: 50.6067338,
                  title: 'مدارس الفلاح الخاصة',
                  infoWindow: {
                      content: "<br>مدارس الفلاح الخاصة - بنين</br>المحرق"
                  }
                });

         marker.infoWindow.open(map, marker);
			   marker2.infoWindow.open(map, marker2);
			});
        }
    };

}();

jQuery(document).ready(function() {
   Contact.init();
});
