import React, { useState, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------
CropImage.propTypes = {
    getImage: PropTypes.func,
    file: PropTypes.object
};
const CropDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
export default function CropImage({ getImage, file }) {
    const [open, setOpen] = React.useState(false);
    const [crop, setCrop] = useState(null);
    const [image, setImage] = useState(null);

    const handleClose = () => {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        const base64Image = canvas.toDataURL("image/jpeg", 1);
        getImage(base64Image);
        setOpen(false);
    };

    useEffect(() => {
        if (file) {
            setOpen(true);
        }
    }, [file, setOpen]);

    return (
        <CropDialog
            onClose={ handleClose }
            aria-labelledby="customized-dialog-title"
            open={ open }
        >
            <DialogContent dividers>
                <ReactCrop crop={ crop } onChange={ setCrop }>
                    <img src={ file ? file.preview : '' } alt='mn' onLoad={ (img) => setImage(img.target) } />
                </ReactCrop>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={ handleClose }>
                    Save changes
                </Button>
            </DialogActions>
        </CropDialog >
    )
}