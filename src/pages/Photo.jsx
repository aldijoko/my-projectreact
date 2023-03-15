import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import { photoAlbum } from "../data/datas";

const Photo = () => {
  //   const getFullAddress = (params) => {
  //     console.log(params);
  //     return `${params.row.address.street || ""} ${
  //       params.row.address.suite || ""
  //     }`;
  //   };
  const columns = [
    {
      field: "albumId",
      headerName: "Album ID",
      flex: 0.5,
    },
    {
      field: "id",
      headerName: "Id",
      flex: 1,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "url",
      headerName: "Url",
      flex: 1,
    },
    {
      field: "thumbnailUrl",
      headerName: "Thumbnail Url",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header title="Photo" subtitle="List of Photo from an Album" />
      <Box m="10px 0 0 0" height="75vh">
        <DataGrid rows={photoAlbum} columns={columns} />
      </Box>
    </Box>
  );
};

export default Photo;
