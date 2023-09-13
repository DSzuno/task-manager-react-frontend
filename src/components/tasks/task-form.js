import {useEffect, useState} from "react";
import {
    Box,
    Button,
    Chip,
    Container,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {Add} from "@mui/icons-material";

export const TaskForm = ({task, onSubmit}) => {
    const availablePriorities = ['low', 'medium', 'high', 'critical'];
    const [name, setName] = useState('');
    const [hasNameError, setHasNameError] = useState(false);
    const [priority, setPriority] = useState(availablePriorities[0]);
    const [description, setDescription] = useState('');
    const [labelText, setLabelText] = useState('');
    const [hasLabelError, setHasLabelError] = useState(false);
    const [labels, setLabels] = useState([])

    useEffect(() => {
        if (task) {
            setName(task.name);
            setPriority(task.priority);
            setDescription(task.description);
            setLabels(task.labels || []);
        }

    }, [task]);
    const handleSubmit = (event) => {
        event.preventDefault();

        if (name === '') {
            setHasNameError(true);
            return;
        }
        if (labelText !== '') {
            setHasLabelError(true);
            return;
        }

        const formData = {
            name,
            description,
            priority,
            labels
        }
        onSubmit(formData)
    }

    const handleDeleteLabel = (index) => {
        labels.splice(index, 1)
        setLabels([...labels])
    }

    const handleAddLabel = () => {
        if (labelText === '') {
            return;
        }
        setHasLabelError(false);
        setLabels([...labels, labelText]);
        setLabelText('');

    }

    const handleNameChange = (event) => {
        setName(event.target.value);
        setHasNameError(false);
    }

    return (<form action="" onSubmit={handleSubmit}>
        <Container sx={{pt: 2}}>
            <Typography variant="h4" sx={{mb: 2}}>
                {task ? "Edit task" : "Create task"}
            </Typography>
            <Stack spacing={2}>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    error={hasNameError}
                    helperText={hasNameError ? "Name required" : ""}
                />
                <FormControl fullWidth>
                    <InputLabel id="priority-select-label">Priority</InputLabel>
                    <Select
                        labelId="priority-select-label"
                        id="priority-select"
                        value={priority}
                        label="Priority"
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        {availablePriorities.map(priority => <MenuItem value={priority}>{priority}</MenuItem>)}
                    </Select>
                </FormControl>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Box>
                    <TextField
                        id="labelInput"
                        label="Label"
                        variant="outlined"
                        type="text"
                        value={labelText}
                        onChange={e => setLabelText(e.target.value)}
                        error={hasLabelError}
                        helperText={hasLabelError ? "Not added label will not be save" : ""}
                    />
                    <Tooltip title="Add label">
                        <IconButton
                            type='button'
                            onClick={handleAddLabel}
                        >
                            <Add/>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Grid container spacing={1} sx={{maxWidth: 250}}>
                    {labels.map((label, index) => <Grid item xs key={label + index}>
                            <Chip label={label} variant="outlined" onDelete={() => handleDeleteLabel(index)}/>
                        </Grid>
                    )}
                </Grid>
                <Button variant="contained" type="submit">Submit</Button>
            </Stack>
        </Container>
    </form>)
}