import { createTheme } from '@mui/material'
import { cyan, yellow } from '@mui/material/colors'

export const LightTheme = createTheme({
    //cores do tema
    palette: {
        primary: { //config cor primaria
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff',
        },
        secondary: { //config cor secundaria
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff',
        },
        background: { //config cor fundo
            default: '#f7f6f3', //fundo da tela
            paper: '#ffffff' //fundo areas do sistema
        }
    }
})