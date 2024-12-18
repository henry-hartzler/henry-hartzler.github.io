import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<></>
		</ThemeProvider>
	)
}

export default App
