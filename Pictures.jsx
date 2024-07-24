import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";

function StandardImageList() {
  return (
    <ImageList
      sx={{ width: "100%", height: "100%" }}
      cols={3}
      variant="masonry"
    >
      {itemData.map((item) => (
        <ImageListItem key={item.id}>
          <img src={`${item.img}`} alt={item.title} loading="lazy" />
          <ImageListItemBar title={"TEst datee"} position="top" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    id: "1",
    img: "image3.jpg",
    title: "Bookstore",
  },
  {
    id: "2",
    img: "image2.jpg",
    title: "Scrabble",
  },
  {
    id: "3",
    img: "image5.jpg",
    title: "Drill",
  },
  {
    id: "4",
    img: "image1.jpg",
    title: "Drill Plaque",
  },
  {
    id: "5",
    img: "image7.jpg",
    title: "Restaurant",
  },
  {
    id: "6",
    img: "image4.jpg",
    title: "Menu",
  },
];
function Pictures() {
  return <StandardImageList />;
}

export default Pictures;
