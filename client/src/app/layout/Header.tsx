import {
  AppBar,
  FormControlLabel,
  FormGroup,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material'

interface Props {
  darkMode: boolean
  themeLabel: string
  handleThemeChange: () => void
}

export default function Header({
  darkMode,
  handleThemeChange,
  themeLabel,
}: Props) {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant='h6'>RE-STORE</Typography>
        {/* <Switch onChange={handleThemeChange} checked={darkMode} /> */}
        <FormGroup sx={{ marginLeft: '1em' }}>
          <FormControlLabel
            control={<Switch onChange={handleThemeChange} checked={darkMode} />}
            label={themeLabel}
            labelPlacement='end'
          ></FormControlLabel>
        </FormGroup>
      </Toolbar>
    </AppBar>
  )
}
