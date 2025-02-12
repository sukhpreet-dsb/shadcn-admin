import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import geojsonToKml from 'geojson-to-kml';
import * as toGeoJSON from '@mapbox/togeojson'; // Import everything from toGeoJSON
import JSZip from "jszip";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertAndDownloadGeoJson = (geoJson: any, format: string) => {
  let parsedGeoJson;
  try {
    parsedGeoJson = typeof geoJson === 'string' ? JSON.parse(geoJson) : geoJson;
  } catch (error) {
    console.error('Error parsing GeoJSON:', error);
    return;
  }


  if (format === 'kml') {

    try {

      const kmlData = geojsonToKml(parsedGeoJson);
      const blob = new Blob([kmlData], { type: 'application/vnd.google-earth.kml+xml' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `test.${format}`;
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error in KML conversion:', error);
    }
  } else if (format === 'kmz') {
    try {

      const kml = geojsonToKml(parsedGeoJson);
      const zip = new JSZip();
      zip.file('doc.kml', kml);  // Add the KML file inside the ZIP

      zip.generateAsync({ type: 'blob' }).then((kmzBlob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(kmzBlob);
        link.download = 'KmzFile.kmz';
        link.click();
      });
    } catch (error) {
      console.error('Error in KMZ conversion:', error);
    }
  }
};



export const geoJsonConverter = async (file: File, ext: string) => {
  try {
    let geoJSON = {};

    if (ext === ".kmz") {
      // For KMZ files: Unzip and convert KML to GeoJSON
      const kmzBuffer = await file.arrayBuffer(); // Convert file to ArrayBuffer
      geoJSON = await kmzToGeoJson(kmzBuffer); // Process KMZ and convert to GeoJSON
    } else if (ext === ".kml") {
      // For KML files: Convert directly to GeoJSON
      const kmlText = await file.text(); // Read the file as text
      const kmlDoc = new DOMParser().parseFromString(kmlText, "text/xml"); // Parse the KML text into an XML document
      geoJSON = toGeoJSON.kml(kmlDoc); // Convert KML to GeoJSON
    } else {
      throw new Error("Invalid file type. Please upload a KML or KMZ file.");
    }

    return geoJSON; // Return the converted GeoJSON
  } catch (error) {
    console.error("Error during KML/KMZ conversion:", error);
    throw new Error("Error while converting KML/KMZ to GeoJSON");
  }
};

// Function to handle KMZ to GeoJSON conversion using JSZip (Browser-friendly)

export const kmzToGeoJson = async (kmzBuffer: ArrayBuffer): Promise<any> => {
  const zip = await JSZip.loadAsync(kmzBuffer); // Load the KMZ buffer as a zip

  try {
    const kmlFile = Object.keys(zip.files).find((fileName) => fileName.endsWith(".kml")); // Find the KML file inside the KMZ

    if (!kmlFile) {
      throw new Error("No KML file found inside the KMZ archive.");
    }

    // Extract the KML file content as text
    const kmlContent = await zip.file(kmlFile)!.async("text");
    const kmlDoc = new DOMParser().parseFromString(kmlContent, "text/xml");

    // Convert the KML content to GeoJSON
    return toGeoJSON.kml(kmlDoc);
  } catch (error) {
    console.error("Error processing KMZ file:", error);
    throw new Error("Error converting KMZ to GeoJSON");
  }
};


