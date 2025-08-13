{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Initialize the map\
var map = L.map('map').setView([-33.9249, 18.4241], 12); // Cape Town coords\
\
// Add OpenStreetMap tiles\
L.tileLayer('https://\{s\}.tile.openstreetmap.org/\{z\}/\{x\}/\{y\}.png', \{\
  maxZoom: 19,\
\}).addTo(map);\
\
// Load crime data\
fetch('crime_data.json')\
  .then(response => response.json())\
  .then(data => \{\
    data.forEach(crime => \{\
      L.marker([crime.lat, crime.lng])\
        .addTo(map)\
        .bindPopup(`<b>$\{crime.type\}</b><br>$\{crime.date\}`);\
    \});\
  \});}