import MeasureTool from 'measuretool-googlemaps-v3'
export default function ({ $config }, inject) {
  let mapLoaded = false
  let mapWaiting = null
  let map = null
  let measureTool = null
  let area = null

  addScript()

  inject('maps', { showMap, getMeasuredArea, endMeasurement })

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
      zoom: 19,
      center: position,
      disableDefaultUI: true,
      zoomControl: true
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
      area = result.areaText
    })
  }

  function endMeasurement () {
    measureTool.end()
  }

  function getMeasuredArea () {
    return area
  }

  // FALLBACK SOLUTION
  // function addPolygon () {
  //   const triangleCoords = [
  //     { lat: 25.774, lng: -80.19 },
  //     { lat: 18.466, lng: -66.118 },
  //     { lat: 32.321, lng: -64.757 }
  //   ]

  //   const bermudaTriangle = new window.google.maps.Polygon({
  //     paths: triangleCoords,
  //     strokeColor: '#FF0000',
  //     strokeOpacity: 0.5,
  //     strokeWeight: 2,
  //     fillColor: '#FF0000',
  //     fillOpacity: 0.3,
  //     editable: true
  //   })
  //   bermudaTriangle.setMap(map)
  // }
}
