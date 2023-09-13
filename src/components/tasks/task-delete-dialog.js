import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export const TaskDeleteDialog = ({selectedTask, isOpen, onClose, onDelete}) => {
    return (<Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            Delete task
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Do you really want to delete "{selectedTask ? selectedTask.name : null}" task?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onDelete} autoFocus>
                Confirm
            </Button>
        </DialogActions>
    </Dialog>)
}