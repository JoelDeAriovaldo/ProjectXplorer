import { createTheme } from '@mui/material'


export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#BD83B8'[700],
            dark:'#BD83B8'[800],
            light:'#BD83B8'[500],
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#F5D7DB'[700],
            dark:'#F5D7DB'[800],
            light:'#F5D7DB'[500],
            contrastText: '#FFFFFF',
        },
        background: {
            paper: '#FFFFFF',
            default: '#FBE4D8'
        }
    }
});