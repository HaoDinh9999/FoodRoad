import React from "react";

import { Box } from "@mui/system";

import { Pagination, Chip, Stack, Avatar, Typography } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 250,
    editable: true,
    // headerAlign: "center",
    sortable: false,
    // align: "center",
    renderCell: (params) => {
      return (
        <Stack spacing={2} alignItems="center" direction="row">
          <Avatar src={params.row.image}></Avatar>
          <Typography variant="subtitle2">{params.row.name}</Typography>
        </Stack>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    // headerAlign: "center",
    sortable: false,
    // align: "center",
    renderCell: (params) => {
      let color,
        fontColor = "#fff";
      if (params.row.status === "Processed") {
        color = "success";
      } else if (params.row.status === "Processing") {
        color = "info";
      }
      if (params.row.status === "Cancelled") {
        fontColor = "#777";
      }
      return (
        <Chip
          size="small"
          sx={{ color: fontColor }}
          label={params.row.status}
          color={color}
          variant="contained"
        />
      );
    },
  },
  {
    field: "dateStart",
    headerName: "Date booked",
    width: 200,
    // headerAlign: "center",
    // align: "center",

    sortable: false,
  },
  {
    field: "price",
    headerName: "Price",
    width: 70,
    // headerAlign: "center",
    // align: "center",
    sortable: false,
  },
];
const data = [
  {
    id: 1,
    image: "../images/cards/card-image1.jpg",
    name: "Saigon Barbecue",
    price: 69,
    dateStart: "21/12/2021",
    dateEnd: "22/12/2021",
    status: "Processed",
  },
  {
    id: 2,
    image: "../images/cards/card-image2.jpg",
    name: "In Love With Saigon",
    price: 59,
    dateStart: "21/12/2021",
    dateEnd: "22/12/2021",
    status: "Cancelled",
  },
  {
    id: 3,
    image: "../images/cards/card-image3.jpg",
    name: "Saigon Vegan",
    price: 49,
    dateStart: "21/12/2021",
    dateEnd: "22/12/2021",
    status: "Processing",
  },
  {
    id: 4,
    image: "../images/cards/card-image4.jpg",
    name: "Saigon BackStreet",
    price: 39,
    dateStart: "21/12/2021",
    dateEnd: "22/12/2021",
    status: "Cancelled",
  },
  {
    id: 5,
    image: "../images/cards/card-image5.jpg",
    name: "In Love With Saigon",
    price: 59,
    dateStart: "21/12/2021",
    dateEnd: "22/12/2021",
    status: "Processed",
  },
];

const OrderList = () => {
  return (
    <>
      <Typography fontWeight="600" fontSize={24}>
        Orders history
      </Typography>
      <DataGrid
        sx={{
          border: "none",
          "& .MuiDataGrid-columnSeparator": { display: "none" },
          ".MuiDataGrid-columnHeader": { p: 0 },
          ".MuiDataGrid-columnHeaders": { border: "none" },

          // ".MuiDataGrid-columnHeaderTitleContainer": { p: 0 },
          ".MuiDataGrid-cell": { border: "none" },
          ".MuiDataGrid-row": {
            background: "#fff",
            marginBottom: 2,
          },
          "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus-within, &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within":
            {
              outline: "none",
            },
        }}
        components={{
          Pagination: CustomPagination,
        }}
        disableColumnMenu
        disableSelectionOnClick
        rows={data}
        columns={columns}
      />
    </>
  );
};
const CustomPagination = () => {
  return (
    <Box display="flex" sx={{ justifyContent: "center", mb: 1 }}>
      <Pagination count={3} />
    </Box>
  );
};

export default OrderList;
