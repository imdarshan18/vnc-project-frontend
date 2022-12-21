import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import L from "leaflet";

export function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:9000/trees").then(async (res) => {
        const dataFetch = await res.text();
        const obj = JSON.parse(dataFetch);

        const googleStreets = L.tileLayer(
          "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
          {
            maxZoom: 20,
            subdomains: ["mt0", "mt1", "mt2", "mt3"],
          }
        );

        const satellite = L.tileLayer(
          "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
          {
            maxZoom: 20,
            subdomains: ["mt0", "mt1", "mt2", "mt3"],
          }
        );

        var map = L.map("map", {
          center: [22.5645, 72.9289],
          zoom: 4,
          layers: [googleStreets, satellite],
          maxZoom: 18,
          minZoom: 2,
        });

        var baseMaps = {
          "Street View": googleStreets,
          "Satellite View": satellite,
        };

        var banyanTreeGroup = L.layerGroup([]);
        var neemTreeGroup = L.layerGroup([]);
        var cedarTreeGroup = L.layerGroup([]);
        var asopalavTreeGroup = L.layerGroup([]);
        var teakTreeGroup = L.layerGroup([]);

        for (let i = 0; i < obj.length; i++) {
          let row = obj[i];

          if (row.tree_name === "Banyan") {
            const defaultIcon = new L.icon({
              iconUrl: require("./Trafficlight-green-icon.png"),
              iconSize: [12, 12],
              iconAnchor: [2, 2],
              popupAnchor: [0, -2],
            });
            var content = `<h3>Banyan Tree</h3>
            <p><b>Gujarati name:</b> વડ</p>
            <p><b>Scientific name:</b> <i>Ficus benghalensis</i></p>
            <p><b>Height:</b> 25m ( approx )</p>
            <p><b>Girth:</b> 300m ( approx )</p>
            <p><b>Description:</b> This is information about Banyan Tree</p>
            <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Big_Banyan_Tree_at_Bangalore.jpg/330px-Big_Banyan_Tree_at_Bangalore.jpg' height=200vh width = 200vw/>
            <div>
            <a href='https://en.wikipedia.org/wiki/Banyan' target='_blank'>Read more about Banyan Tree</a>
            </div>`;

            var popup = L.popup({ maxHeight: 150, maxWidth: 250 }).setContent(
              content
            );
            const banyanTree = L.marker([row.latitude, row.longitude], {
              icon: defaultIcon,
            })
              .bindPopup(popup)
              .openPopup()
              .on("mouseover", function (e) {
                this.openPopup();
              });

            banyanTreeGroup.addLayer(banyanTree);
          } else if (row.tree_name === "Neem") {
            const defaultIcon = new L.icon({
              iconUrl: require("./purple-circle-emoji.png"),
              iconSize: [15, 15],
              iconAnchor: [2, 2],
              popupAnchor: [0, -2],
            });

            var content = `<h3>Neem Tree</h3>
            <p><b>Gujarati name:</b> લીમડો</p>
            <p><b>Scientific name:</b> <i>Azadirachta indica</i></p>
            <p><b>Height:</b> 30m ( approx )</p>
            <p><b>Grith:</b> 2.5m ( approx )</p>
            <p><b>Description:</b> This is information about Neem Tree</p>
            <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Neem_%28Azadirachta_indica%29_in_Hyderabad_W_IMG_6976.jpg/330px-Neem_%28Azadirachta_indica%29_in_Hyderabad_W_IMG_6976.jpg' height=200vh width = 200vw/>
            <div>
            <a href='https://en.wikipedia.org/wiki/Azadirachta_indica' target='_blank'>Read more about Neem Tree</a>
            </div>`;

            var popup = L.popup({ maxHeight: 150, maxWidth: 250 }).setContent(
              content
            );

            const neemTree = L.marker([row.latitude, row.longitude], {
              icon: defaultIcon,
            })
              .bindPopup(popup)
              .openPopup()
              .on("mouseover", function (e) {
                this.openPopup();
              });
            neemTreeGroup.addLayer(neemTree);
          } else if (row.tree_name === "Cedar") {
            const defaultIcon = new L.icon({
              iconUrl: require("./red-circle.png"),
              iconSize: [12, 12],
              iconAnchor: [2, 2],
              popupAnchor: [0, -2],
            });

            var content = `<h3>Cedar Tree</h3>
            <p><b>Gujarati name:</b> દેવદાર</p>
            <p><b>Scientific name:</b> <i>Cedrus</i></p>
            <p><b>Height:</b> 40 - 50m ( approx )</p>
            <p><b>Grith:</b> 3m ( approx )</p>
            <p><b>Description:</b> This is information about Cedar Tree</p>
            <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Neem_%28Azadirachta_indica%29_in_Hyderabad_W_IMG_6976.jpg/330px-Neem_%28Azadirachta_indica%29_in_Hyderabad_W_IMG_6976.jpg' height=200vh width = 200vw/>
            <div>
            <a href='https://en.wikipedia.org/wiki/Cedrus' target='_blank'>Read more about Cedar Tree</a>
            </div>`;

            var popup = L.popup({ maxHeight: 150, maxWidth: 250 }).setContent(
              content
            );

            const cedarTree = L.marker([row.latitude, row.longitude], {
              icon: defaultIcon,
            })
              .bindPopup(popup)
              .openPopup()
              .on("mouseover", function (e) {
                this.openPopup();
              });
            cedarTreeGroup.addLayer(cedarTree);
          } else if (row.tree_name === "Asopalav") {
            const defaultIcon = new L.icon({
              iconUrl: require("./blue-circle-emoji.png"),
              iconSize: [15, 15],
              iconAnchor: [2, 2],
              popupAnchor: [0, -2],
            });

            var content = `<h3>Asopalav Tree</h3>
            <p><b>Gujarati name:</b> આસોપાલવ</p>
            <p><b>Scientific name:</b> <i>Polyalthia Longifolia</i></p>
            <p><b>Height:</b> 20m ( approx )</p>
            <p><b>Grith:</b> 1.2 - 4.5m  ( approx )</p>
            <p><b>Description:</b> This is information about Asopalav Tree</p>
            <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Polyalthia_longifolia.jpg/330px-Polyalthia_longifolia.jpg' height=200vh width = 200vw/>
            <div>
            <a href='https://en.wikipedia.org/wiki/Monoon_longifolium' target='_blank'>Read more about Asopalav Tree</a>
            </div>`;

            var popup = L.popup({ maxHeight: 150, maxWidth: 250 }).setContent(
              content
            );

            const asopalavTree = L.marker([row.latitude, row.longitude], {
              icon: defaultIcon,
            })
              .bindPopup(popup)
              .openPopup()
              .on("mouseover", function (e) {
                this.openPopup();
              });
            asopalavTreeGroup.addLayer(asopalavTree);
          } else {
            const defaultIcon = new L.icon({
              iconUrl: require("./yellow-circle-emoji.png"),
              iconSize: [15, 15],
              iconAnchor: [2, 2],
              popupAnchor: [0, -2],
            });

            var content = `<h3>Teak Tree</h3>
            <p><b>Gujarati name:</b> સાગ</p>
            <p><b>Scientific name:</b> <i>Tectona grandis</i></p>
            <p><b>Height:</b> 45m  ( approx )</p>
            <p><b>Grith: 2m</b>  ( approx )</p>
            <p><b>Description:</b> This is information about Teak Tree</p>
            <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Starr_010304-0485_Tectona_grandis.jpg/330px-Starr_010304-0485_Tectona_grandis.jpg' height=200vh width = 200vw/>
            <div>
            <a href='https://en.wikipedia.org/wiki/Teak' target='_blank'>Read more about Teak Tree</a>
            </div>`;

            var popup = L.popup({ maxHeight: 150, maxWidth: 250 }).setContent(
              content
            );

            const teakTree = L.marker([row.latitude, row.longitude], {
              icon: defaultIcon,
            })
              .bindPopup(popup)
              .openPopup()
              .on("mouseover", function (e) {
                this.openPopup();
              });
            teakTreeGroup.addLayer(teakTree);
          }
        }

        var groupOfTrees = L.layerGroup([
          banyanTreeGroup,
          neemTreeGroup,
          cedarTreeGroup,
          asopalavTreeGroup,
          teakTreeGroup,
        ]);

        map.addLayer(
          banyanTreeGroup,
          neemTreeGroup,
          cedarTreeGroup,
          asopalavTreeGroup,
          teakTreeGroup
        );

        var treesObj = {
          "Banyan Trees": banyanTreeGroup,
          "Neem Tree": neemTreeGroup,
          "Cedar Tree": cedarTreeGroup,
          "Asopalav Tree": asopalavTreeGroup,
          "Teak Tree": teakTreeGroup,
        };
        var layerControl = L.control.layers(baseMaps, treesObj).addTo(map);

        var legend = L.control({ position: "bottomright" });

        legend.onAdd = function (map) {
          var div = L.DomUtil.create("div", "legend");
          div.innerHTML += "<h4>Map Legend</h4>";
          div.innerHTML +=
            '<i style="background: #00FF00"></i><span>Banyan Tree</span><br>';
          div.innerHTML +=
            '<i style="background: #800080"></i><span>Neem Tree</span><br>';
          div.innerHTML +=
            '<i style="background: #FF0000"></i><span>Cedar Tree</span><br>';
          div.innerHTML +=
            '<i style="background: #0000FF"></i><span>Asopalav</span><br>';
          div.innerHTML +=
            '<i style="background: #FFFF00"></i><span>Teak</span><br>';
          div.innerHTML +=
            '<i style="background: #808080"></i><span>New Tree</span><br>';

          return div;
        };

        legend.addTo(map);

        map.on("dblclick", function (e) {
          var latlng = map.mouseEventToLatLng(e.originalEvent);
          const defaultIcon = new L.icon({
            iconUrl: require("./black-circle-emoji.png"),
            iconSize: [15, 15],
            iconAnchor: [2, 2],
            popupAnchor: [0, -2],
          });

          const marker = L.marker([latlng.lat, latlng.lng], {
            icon: defaultIcon,
          }).addTo(map);
        });
      });
      return () => clearInterval(interval);
    }, 1000);
  });
}

export default App;
