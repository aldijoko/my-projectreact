import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import { dataUsers } from "../data/datas";

const User = () => {
  const getFullAddress = (params) => {
    console.log(params);
    return `${params.row.address.street || ""} ${
      params.row.address.suite || ""
    }`;
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "username",
      headerName: "Username",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      valueGetter: getFullAddress,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "website",
      headerName: "Website",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header title="User" subtitle="List of User" />
      <Box m="10px 0 0 0" height="75vh">
        <DataGrid rows={dataUsers} columns={columns} />
      </Box>
    </Box>
  );
};

export default User;
