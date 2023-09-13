import {
    Chip,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip
} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";

export const TaskGridView = ({tasks, onEdit, onDelete}) => {

    return (<TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Priority</TableCell>
                    <TableCell align="right">Labels</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tasks.map((task) => (
                    <TableRow
                        key={task.id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row">
                            {task.name}
                        </TableCell>
                        <TableCell align="right">{task.description}</TableCell>
                        <TableCell align="right">{task.priority}</TableCell>
                        <TableCell align="right">{task.labels && task.labels.map(label => <Chip label={label}
                                                                                                variant="outlined"/>)}</TableCell>
                        <TableCell align="right">
                            <Tooltip title="Edit">
                                <IconButton
                                    onClick={() => onEdit(task)}
                                >
                                    <Edit/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="List view">
                                <IconButton
                                    onClick={() => onDelete(task)}
                                >
                                    <Delete/>
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>);
}