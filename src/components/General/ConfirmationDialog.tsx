import React from "react";
import { Dialog, DialogTitle, DialogActions, DialogContent, Button } from "@material-ui/core";


interface Props {
    open: boolean;
    title: string;
    message: string;
    confirm: string;
    cancel: string;
    onConfirm(): void;
    onCancel(): void;
};


export const ConfirmationDialog = ({ 
    open, title, message, confirm, cancel, onConfirm, onCancel }: Props) => {
    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{message}</DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" onClick={onCancel}>
                    {cancel}
                </Button>
                <Button color="secondary" variant="contained" onClick={onConfirm}>
                    {confirm}
                </Button>
            </DialogActions>
        </Dialog>
    );
};