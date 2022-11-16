import React from 'react';
import DataTable from '../Components/DataTable';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    header: {
        padding: 10,
        height: 70,
        width: "100%",
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 8,
    },

    tableContent: {
        marginTop: 30,
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",
    },

}));

function TreatmentManage(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.leftContent}> right content </div>
                    <div className={classes.rightContent}>
                        <Button variant="contained" color="secondary"> Thêm sản phẩm </Button>
                    </div>
                </div>
            </div>
            <div className={classes.tableContent}>
                <DataTable />
            </div>
        </div>
    );
}

export default TreatmentManage;