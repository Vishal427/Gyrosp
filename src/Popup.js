
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");


    function SignUp() {
        console.warn({ Name, Email, Mobile });
        let data = { Name, Email, Mobile }
        fetch("https://api.gyros.farm/api/AdminApi/AddHealthFraiend", {
            method: 'POST',
            headers: {  
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.warn("result", result);
        })


    }


    const visible = localStorage.getItem("formModal");


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 3000)
        return () => clearTimeout(timer);



    }

    useEffect(() => {
        if (!visible) {
          localStorage.setItem("formModal", 1);
          handleOpen();
          console.log("first load");
        }
        if (visible) {
         
          console.log("second load");
        }
      }, [visible])



    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
            <BootstrapDialog
           
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} className="cardDesign">

                <div className='responsiveForm '>
                            <h1 className='contentpopup  bestseller Healty' style={{ color: "#3bbf10" }}><b className="Healty">Hii Healthy Friends !!! </b> </h1>
                            <h3 className='text-black font-bold text-xl text-center overWhelmed ' > Overwhelmed to see you here.
                            </h3>
                            <div className='flex' >
                                <h3 className='text-black font-bold text-md SendLove'>
                                    Sending Our Love
                                </h3>
                                <h3 className="textparagraph!" style={{color:"red" ,marginLeft:"5px"}} >♥</h3>
                            </div>
                            <h3 className='text-black font-bold text-sm DiscountCoupan' >
                                (Special Discount Coupon)
                            </h3>

                            <form class="popup">
                                <div class="form-group1 row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg "></label>
                                    <div class="col-sm-10">
                                        <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }} class="form-control11 namecontrol form-control-lg" id="name" placeholder="Enter Your Name" />
                                    </div>
                                </div>

                                <div class="form-group1 row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg "></label>
                                    <div class="col-sm-10">
                                        <input type="text" value={Email} onChange={(e) => { setEmail(e.target.value) }} class="form-control11 namecontrol form-control-lg" id="name" placeholder="Enter Your Email" />
                                    </div>
                                </div>

                                <div class="form-group1 row ">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg "></label>
                                    <div class="col-sm-10">
                                        <input type="number" value={Mobile} onChange={(e) => { setMobile(e.target.value) }} class="form-control11 namecontrol form-control-lg focus:outline-green-400" id="name" placeholder="Enter Your Mobile" />
                                    </div>

                                </div>
                                <button type="button" onClick={SignUp} class=" rounded-full p-2 w-52 mb-10 ml-16 border-none text-white focus:outline-none bgbg" style={{ background: "#3bbf10", border: "none" }}>Get Your Discount</button>
                            </form>


                        </div>
                  
                </BootstrapDialogTitle>
                
                
            </BootstrapDialog>
        </div>
    );
}
