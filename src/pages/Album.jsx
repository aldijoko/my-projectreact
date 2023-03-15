import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import { albumData } from "../data/datas";

const Album = () => {
  //   const getFullAddress = (params) => {
  //     console.log(params);
  //     return `${params.row.address.street || ""} ${
  //       params.row.address.suite || ""
  //     }`;
  //   };
  const columns = [
    {
      field: "userId",
      headerName: "User ID",
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
  ];
  return (
    <Box m="20px">
      <Header title="Album" subtitle="List of Album by User" />
      <Box m="10px 0 0 0" height="75vh">
        <DataGrid rows={albumData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Album;
