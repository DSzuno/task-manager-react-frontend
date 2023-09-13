import {Box, Card, CardContent, Container, Grid, Link, Typography} from "@mui/material";
import {GitHub} from "@mui/icons-material";
import {NavLink} from "react-router-dom";

export const Home = () => {
    return (
        <Container>
            <Typography variant="h3">
                Task manager application
            </Typography>
            <hr/>
            <Grid container spacing={2} sx={{mt: 3}}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Box>
                                <Typography variant="body">
                                    This is an example application for React frontend management.
                                    <br/>
                                    The application can list, create, update and delete the <NavLink to="/tasks">tasks</NavLink>.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>

                            <Box>
                                <Typography variant="body">
                                    You can find the opensource application on
                                    <Link href="https://github.com/DSzuno/task-manager-react-frontend" target="_blank" underline="hover">
                                        <GitHub/> GitHub
                                    </Link>
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Box>
                                <Typography variant="body">
                                    The application has a backend pair in express js that is also available on

                                    <Link href="https://github.com/DSzuno/task-manager-expressjs-backend" target="_blank" underline="hover">
                                        <GitHub/> GitHub
                                    </Link>
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
