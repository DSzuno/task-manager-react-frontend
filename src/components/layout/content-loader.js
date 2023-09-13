import {CircularProgress, Container} from "@mui/material";

export const ContentLoader = () => {
    return (<Container sx={{textAlign: "center", mt: 10}}>
        <CircularProgress sx={{m: 10}} size={100}/>
    </Container>)
}