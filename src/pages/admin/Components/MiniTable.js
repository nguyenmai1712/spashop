import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import emptyBox from 'assets/icons/empty-box.png' 
import { Button } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: '230px',
    '&>MuiTableBody-root': {
        height: '100%',
    }
  },

  tBody: {
    position: 'relative',
  },

  emptyDataTable: {
    position: 'absolute',
    right: '50%',
    marginTop: 50,
    '&>img': {
        width: 50,
        height: 50,
    }
  }
});

export default function MiniTable({columns, rows, hasDeleteBtn, onDeleteItem}) {
  const classes = useStyles();
  
  const handleRemoveItem = (id) => {
    onDeleteItem(id);
  }
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
              ))}
                <TableCell align="center">
                    { hasDeleteBtn && "Xóa"}
                  </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tBody}>
            {
                rows.length > 0 ? (
                    <>
                        {
                            rows.map((row) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                        </TableCell>
                                    );
                                    })}
                                    <TableCell align='center'>
                                      {
                                        hasDeleteBtn && (
                                        <Button
                                          onClick={() => handleRemoveItem(row.id)}
                                          variant="contained"
                                          color="secondary"
                                        > Xóa </Button>)
                                      }
                                    </TableCell>
                                </TableRow>
                                );
                            })
                        }
                    </>
                ) : (
                    <div className={classes.emptyDataTable}>
                        <img src={emptyBox} alt="" />
                    </div>
                )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
