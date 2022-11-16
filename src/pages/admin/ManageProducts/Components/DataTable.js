import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import product1 from 'assets/images/home_beauty_salon_shop_1.jpg';
import { Avatar, Chip, IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  
  tableContainer: {
    "& .MuiTableCell-root" : {
        padding: 12
    }
  },

  centerColumn: {
    height: '100%',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },

  chip: {
    margin: 2
  },
  
  tableBody: {
    width: '100%',
    height: 'calc(100vh - 250px)',
    overflow: 'scroll'
  }
  
});

function createData(id, image, amount, oldPrice, newPrice, category, vote, description) {
  return { id, image, amount, oldPrice, newPrice, category, vote, description };
}

const rows = [
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
  createData('#123', product1, "Sản phẩm chăm sóc da mặt", 10, "169.000$", "150.000$", ["beauty", "skins"], 4, "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus."),
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <div className={classes.tableContainer}>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="left" >Ảnh SP</TableCell>
                        <TableCell align="left">Tên Sản Phẩm</TableCell>
                        <TableCell align="center">Số lượng</TableCell>
                        <TableCell align="center">Giá cũ</TableCell>
                        <TableCell align="center">Giá mới</TableCell>
                        <TableCell align="center">Danh mục</TableCell>
                        <TableCell align="center">Vote</TableCell>
                        <TableCell align="center">Mô tả SP</TableCell>
                        <TableCell align="center"> Xem thêm </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            <Table>
                {/* <div className={classes.tableBody}> */}
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row" >
                                {row.id}
                            </TableCell>
                            <TableCell align="center" >
                                <Avatar 
                                    alt="ImageProduct"
                                    variant="rounded"
                                    src={row.image}
                                />
                            </TableCell>
                            <TableCell align="left" >{row.name}</TableCell>
                            <TableCell align="center" >{row.amount}</TableCell>
                            <TableCell align="center" >{row.oldPrice}</TableCell>
                            <TableCell align="center" >{row.newPrice}</TableCell>
                            <TableCell align="left" >
                                {row.category.map(item => {
                                    return (
                                        <p> {item}</p>
                                    )
                                })}
                               
                            </TableCell>
                            <TableCell align="center" >
                                <Rating name="size-small" defaultValue={row.vote} size="small" readOnly="true"/>
                            </TableCell>
                            <TableCell align="center">{row.description}</TableCell>
                            <TableCell align="center" >
                                <IconButton aria-label="delete">
                                    <MoreHorizIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                {/* </div> */}
            </Table>
        </TableContainer>
    </div>
  );
}