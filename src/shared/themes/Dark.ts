import { createTheme } from '@mui/material'
import { cyan, yellow } from '@mui/material/colors'

export const DarkTheme = createTheme({
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
        background: { //config cor fundo (diferença entre light e dark)
            default: '#202124', //fundo da tela
            paper: '#303134' //fundo areas do sistema
        }
    }
})