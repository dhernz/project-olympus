import React from "react";
import {
  Polygon as GoogleMapsPolygon,
  PolygonProps,
} from "@react-google-maps/api";

interface IPolygon {
  key: string;
  paths: number[][];
  options: object | null;
}

interface Props {
  polygon: IPolygon;
}

export const PolygonComponent: React.FC<Props> = ({ polygon }) => {
  const defaultOptions = {
    fillColor: "lightblue",
    fillOpacity: 1,
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: true,
    draggable: true,
    editable: true,
    geodesic: false,
    zIndex: 1,
  };

  const paths = polygon.paths.map((e) => new google.maps.LatLng(e[0], e[1]));
  const options: PolygonProps = {
    paths: paths,
    options: polygon.options ? polygon.options : defaultOptions,
  };

  return <GoogleMapsPolygon options={options} />;
};

export default IPolygon;