function initMap() {
	var output = document.getElementById("out");

	if(!navigator.geolocation) {
		output.innerHTML = "<p>Geo location is not supported in your browser</p>"
		return;
	}

	function success(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;

		output.innnerHTML = '<p><Latitude is '+ lat +'∘ , Longitude is '+ lng +'∘</p>';

		var img = new Image();
		img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=15&size=600x300&sensor=false"

		output.appendChild(img);
	};

	function error() {
		output.innerHTML = "Unable to retreive your location";
	}

	output.innerHTML = "<p><Locating...</p>"

	navigator.geolocation.getCurrentPosition(success, error);
}