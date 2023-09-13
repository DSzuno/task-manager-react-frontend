import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home";
import {Tasks} from "./pages/tasks";
import {Box} from "@mui/material";

function App() {
    return (
        <div className="App">
            <Box component="main" sx={{p: 3}}>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/tasks' element={<Tasks/>}/>
                </Routes>
            </Box>
        </div>
    );
}

export default App;
