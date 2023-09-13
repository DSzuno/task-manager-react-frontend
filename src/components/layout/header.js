import {NavLink} from "react-router-dom";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

export const Header = () => {
    return (<Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <Typography align="left" variant="h6" component="div" sx={{flexGrow: 1}}>
                    Task manager
                </Typography>
                <Button
                    LinkComponent={NavLink}
                    to="/"
                    style={({isActive}) => {
                        return {backgroundColor: isActive ? "blue" : ""};
                    }}
                    sx={{color: "white"}}
                >
                    Home
                </Button>
                <Button
                    LinkComponent={NavLink}
                    to="/tasks"
                    style={({isActive}) => {
                        return {backgroundColor: isActive ? "blue" : ""};
                    }}
                    sx={{color: "white"}}
                >
                    Tasks
                </Button>
            </Toolbar>
        </AppBar>
    </Box>);
}