import MeasureTool from 'measuretool-googlemaps-v3'
export default function ({ $config }, inject) {
  let mapLoaded = false
  let mapWaiting = null
  let map = null
  let measureTool = null
  let area = null
  let autocomplete = null

  addScript()

  inject('maps', { showMap, getMeasuredArea, endMeasurement, initAutocomplete, geolocate, startMeasurements })

  function addScript () {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${$config.googleMapsApiKey}&libraries=geometry,places&callback=initMap`
    script.async = true
    window.initMap = initMap
    document.head.appendChild(script)
  }

  function initMap () {
    mapLoaded = true

    if (mapWaiting) {
      const { canvas, lat, lng } = mapWaiting
      renderMap(canvas, lat, lng)
      mapWaiting = null
    }
  }

  function initAutocomplete (element) {
    autocomplete = new window.google.maps.places.Autocomplete(element)
    autocomplete.bindTo('bounds', map)
    autocomplete.setFields(
      ['address_components', 'geometry', 'name'])

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()
      if (!place.geometry) {
        console.log('Returned place contains no geometry')
        return
      }
      const bounds = new window.google.maps.LatLngBounds()

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport)
      } else {
        bounds.extend(place.geometry.location)
      }
      map.fitBounds(bounds)
    })
  }

  function showMap (canvas, lat, lng) {
    if (mapLoaded) {
      renderMap(canvas, lat, lng)
    } else {
      mapWaiting = { canvas, lat, lng }
    }
  }

  function renderMap (canvas, lat, lng) {
    const position = new window.google.maps.LatLng(lat, lng)
    const mapOptions = {
      zoom: 18,
      center: position,
      disableDefaultUI: true,
      zoomControl: true,
      mapTypeId: 'satellite',
      tilt: 0
    }

    map = new window.google.maps.Map(canvas, mapOptions)
    addMeasureTool()
  }

  function addMeasureTool () {
    //  TODO: handle drawing with our UI
    // const config = {
    //   contextMenu: false
    // }
    // eslint-disable-next-line no-unused-vars
    measureTool = new MeasureTool(map)
    measureTool.addListener('measure_end', ({ result }) => {
      //  TODO: save area
      // eslint-disable-next-line no-unused-vars
      area = result.area
    })
  }

  function startMeasurements () {
    measureTool.start()
  }

  function endMeasurement () {
    measureTool.end()
  }

  function getMeasuredArea () {
    return area
  }

  function geolocate () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        map.setCenter(coords)
      })
    }
  }
}
