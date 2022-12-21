import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";

class Legend extends MapControl {
  createLeafletElement(props) {}

  componentDidMount() {
    const getColor = (tree) => {
      return tree === "Banyan"
        ? "#0000FF"
        : tree === "Teak"
        ? "#8959A8"
        : tree === "Neem"
        ? "#BADA55"
        : tree === "Asopalav"
        ? "#FF0000"
        : "#FFB6C1";
    };

    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const trees = ["Banyan", "Teak", "Neem", "Asopalav", "Chedar"];
      let labels = [];
      let from;
      let to;

      for (let i = 0; i < trees.length; i++) {
        from = trees[i];
        to = trees[i + 1];

        labels.push(
          '<i style="background: ' +
            getColor(from + 1) +
            '"></i>' +
            from +
            (to ? "&ndash;" + to : "+")
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };
    const { map } = this.props.leaflet;
    legend.addTo(map);
  }
}

export default withLeaflet(Legend);
