import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const maxStyle = makeStyles({
    root:{
        width:"100%",
        height:"900px",
        maxHeight:"700px",
        border:0,
        frameborder:0,

    }
})
// MapCompony.propTypes = {
    
// };

function MapCompony(props) {
    const classe = maxStyle();
    return (
        <iframe className={classe.root} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0238466860737!2d106.69705161434615!3d10.732644062936176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b2747a81a3%3A0x33c1813055acb613!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUw7RuIMSQ4bupYyBUaOG6r25n!5e0!3m2!1svi!2s!4v1589125634002!5m2!1svi!2s"  ></iframe>
    );
}

export default MapCompony;