import {Box, Button, Card, CardActions, CardContent, Chip, Divider, Grid, Tooltip, Typography} from "@mui/material";
import {
    Delete,
    Edit,
    KeyboardArrowDown,
    KeyboardArrowUp,
    KeyboardDoubleArrowDown,
    KeyboardDoubleArrowUp
} from "@mui/icons-material";

export const TaskListView = ({tasks, onEdit, onDelete}) => {
    const getTaskIcon = (task) => {
        switch (task.priority) {
            case 'low':
                return <KeyboardDoubleArrowDown color='info'/>;
            case 'medium':
                return <KeyboardArrowDown color='primary'/>;
            case 'high':
                return <KeyboardArrowUp color='warning'/>;
            case 'critical':
                return <KeyboardDoubleArrowUp color='error'/>;
            default:
                return <KeyboardDoubleArrowDown color='info'/>;
        }
    }

    return (<Grid container spacing={2} columns={{xs: 4, md: 12}}>
        {tasks.map(task => <Grid key={task._id} item xs={3} alignItems="stretch">
            <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                    <Typography sx={{fontSize: 18}} color="text.secondary" gutterBottom>
                        <Tooltip title={`Priority: ${task.priority}`}>
                            {getTaskIcon(task)}
                        </Tooltip>
                        {task.name}
                    </Typography>
                    <Typography variant="body2">
                        {task.description}
                    </Typography>
                    <Divider/>
                    <Box sx={{mt: 2}}>
                        {task.labels && task.labels.map((label, index) => <Chip key={label + index} label={label}
                                                                                variant="outlined"/>)}
                    </Box>

                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'center', p: 2}}>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Delete/>}
                        onClick={() => onDelete(task)}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        endIcon={<Edit/>}
                        onClick={() => onEdit(task)}
                    >
                        Edit
                    </Button>
                </CardActions>
            </Card>
        </Grid>)}
    </Grid>)
}