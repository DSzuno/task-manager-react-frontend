import {Card, CardContent, Container, Divider, Typography} from "@mui/material";
import {NoteSharp} from "@mui/icons-material";

export const EmptyListCard = ({icon, message}) => {
    return (<Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 10}}>
        <Card variant="outlined" sx={{maxWidth: 300}}>
            <CardContent sx={{textAlign: 'center'}}>
                {icon || <NoteSharp sx={{fontSize: 100}} color="primary"/>}
            </CardContent>
            <Divider variant="middle"/>
            <CardContent>
                <Typography variant="h5" align="center" color="text.secondary">
                    {message || "No listable items"}
                </Typography>
            </CardContent>
        </Card>
    </Container>);
}