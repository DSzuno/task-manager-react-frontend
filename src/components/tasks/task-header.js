import {Box, Button, Grid, IconButton, TextField, Tooltip} from "@mui/material";
import {Add, Clear, GridView, ListAlt, Search} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {VIEW_GRID_TYPE, VIEW_LIST_TYPE} from "./task-list";

export const TaskHeader = ({search, onSearch, onClearSearch, viewType, onChangeViewType, addNew}) => {
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setSearchText(search);
    }, [search]);

    const handleSubmitSearch = () => {
        onSearch(searchText);
    }

    const handleClearSearch = () => {
        setSearchText('');
        onClearSearch();
    }

    return (<Box sx={{mb: 2}}>
        <hr/>
        <Grid container spacing={2}>
            <Grid item xs={3} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>

                <Tooltip title="List view">
                    <IconButton
                        color={viewType === VIEW_LIST_TYPE ? 'primary' : ''}
                        onClick={() => onChangeViewType(VIEW_LIST_TYPE)}
                    >
                        <ListAlt/>
                    </IconButton>
                </Tooltip>

                |

                <Tooltip title="Grid view">
                    <IconButton
                        color={viewType === VIEW_GRID_TYPE ? 'primary' : ''}
                        onClick={() => onChangeViewType(VIEW_GRID_TYPE)}
                    >
                        <GridView/>
                    </IconButton>
                </Tooltip>

            </Grid>
            <Grid item xs={6} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                <TextField
                    id="searchInput"
                    label="Search"
                    placeholder="Search in task name"
                    size="small"
                    sx={{mr: 2}}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Tooltip title="Search">
                    <IconButton
                        variant="outlined"
                        onClick={handleSubmitSearch}
                        sx={{mr: 2}}
                    >
                        <Search/>
                    </IconButton>
                </Tooltip>
                {searchText ? <Tooltip title="Clear Search">
                    <IconButton
                        variant="outlined"
                        onClick={handleClearSearch}
                    >
                        <Clear/>
                    </IconButton>
                </Tooltip> : null}
            </Grid>
            <Grid item xs={3} sx={{alignItems: 'center', display: 'flex', justifyContent: 'end'}}>
                <Button variant="contained" endIcon={<Add/>} size="small" onClick={addNew}>
                    Create
                </Button>
            </Grid>
        </Grid>
        <hr/>
    </Box>);
}