See it in action just running `gulp`


Oh, so easy to work with.

Use it like this:
``` html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKdTnpxORlxfcVsuASHCeozz1CCMLM0u4"></script>
<script>
  require(['fl-map-tracker'], function (MapTracker) {
      const tracker  = new MapTracker({
      google: google,
      mapSelector: '#map',
      pointsUrl: 'http://localhost:8080/routes',
      mapOptions: {
        zoom: 15,
        center: { lat: 51.474142, lng: -0.205402 },
      },
      pointOptions: {
        // Check supported events at https://developers.google.com/maps/documentation/javascript/events
        mouseover: console.log,
        // This shoud be a string or a function that returns a string
        infoWindow: info => `<h2>${info.name}</h2>`
      }
    });

    tracker.loadPoints();
    setInterval(tracker.loadPoints, 2000);

    document.querySelector('#focusMarkersBtn').addEventListener('click', tracker.fitPoints);
  });
</script>
```

The `http://localhost:8080/routes` endpoint should return an object with a property
called `points` containing an array of point objects.
Each point object should contain a latitude and a longitude. It can contain an icon
and extra info which will be given to the functions under `pointOptions` in the instantiation array.
