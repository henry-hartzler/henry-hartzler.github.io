import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import ResponsiveAppBar from './Components/ResponsiveAppBar'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<>
				<ResponsiveAppBar />
			</>
		</ThemeProvider>
	)
}

export default App
