import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";

function StandardImageList() {
  return (
    <ImageList
      sx={{ width: "100%", height: "100%" }}
      cols={2}
      variant="masonry"
    >
      {itemData.map((item) => (
        <ImageListItem key={item.id}>
          <img src={`${item.img}`} alt={item.title} loading="lazy" />
          <ImageListItemBar title={item.date} position="top" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    id: "0",
    img: "msg1.jpeg",
    title: "Intro whats app",
    date: "07/26/24 11:05",
  },
  {
    id: "0.5",
    img: "msg2.jpeg",
    title: "cont.",
    date: "07/26/24 11:06",
  },
  {
    id: "0.7",
    img: "msg3.jpeg",
    title: "Saturn hint",
    date: "07/26/24 11:30",
  },
  {
    id: "1",
    img: "image3.jpg",
    title: "Bookstore",
    date: "07/26/24 1:30",
  },
  {
    id: "1.5",
    img: "msg4.jpeg",
    title: "Scrabble msg hint",
    date: "07/26/24 11:45",
  },
  {
    id: "2.3",
    img: "msg5.jpeg",
    title: "Clock hint",
    date: "07/26/24 12:00",
  },
  {
    id: "3",
    img: "image5.jpg",
    title: "Drill",
    date: "07/26/24 3:30",
  },
  {
    id: "2.5",
    img: "msg6.jpeg",
    title: "Drill hint",
    date: "07/26/24 12:26",
  },
  {
    id: "4",
    img: "image1.jpg",
    title: "Drill Plaque",
    date: "07/26/24 3:30",
  },
  {
    id: "5",
    img: "image7.jpg",
    title: "Restaurant",
    date: "07/26/24 4:00",
  },
  {
    id: "6",
    img: "image4.jpg",
    title: "Menu",
    date: "07/26/24 4:00",
  },
];
function Pictures() {
  return <StandardImageList />;
}

export default Pictures;
