import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreatmentCard from 'components/TreatmentCard';
import product1 from 'assets/images/adsModel.jpg';
import ShoppageHeader from 'components/ShoppageHeader';
import { Grid } from '@material-ui/core';
import { productsData } from 'pages/FakeData';

const useStyles = makeStyles(() => {

});

const breadcrumbsList = {
    list: [
      { text: 'Home', link: '/home' },
    ],
    active: 'Treatments',
  };

function Treatment(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ShoppageHeader amountOfProduct={productsData.length} breadcrumbsList={breadcrumbsList} title="Danh sách liệu trình"/>
            <Grid container className={classes.productContainer} spacing={2}>
                {
                productsData.map(item => (
                    <Grid 
                    item
                    xs={12}
                    md={4}
                    lg={3}
                    key={item.id}
                    >
                         <TreatmentCard data={item}/>
                    </Grid>
                ))
                }
            </Grid>
        </div>
    );
}

export default Treatment;