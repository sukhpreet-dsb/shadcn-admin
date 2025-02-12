declare module 'geojson-to-kml' {
    interface KmlConverter {
      (geojson: GeoJSON.FeatureCollection): string;
    }
  
    const convert: KmlConverter;
    export default convert;
  }
  