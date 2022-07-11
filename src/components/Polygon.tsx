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
    fillColor: "blue",
    fillOpacity: 0.2,
    strokeColor: "purple",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  const paths = polygon.paths.map((e) => new google.maps.LatLng(e[0], e[1]));
  const options: PolygonProps = {
    paths: paths,
    options: {...defaultOptions, ...polygon.options},
  };

  return <GoogleMapsPolygon options={options} />;
};

export default IPolygon;
