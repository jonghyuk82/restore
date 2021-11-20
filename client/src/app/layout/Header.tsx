import { ShoppingCart } from '@mui/icons-material'
import {
  AppBar,
  Badge,
  FormControlLabel,
  FormGroup,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { Link, NavLink } from 'react-router-dom'
import { useStoreContext } from '../context/StoreContext'

interface Props {
  darkMode: boolean
  themeLabel: string
  handleThemeChange: () => void
}

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
]

const navStyles = {
  color: 'inherit',
  textDecoration: 'none',
  typography: 'h6',
  '&:hover': {
    color: 'grey.500',
  },
  '&.active': {
    color: 'grey.500',
  },
}

export default function Header({
  darkMode,
  handleThemeChange,
  themeLabel,
}: Props) {
  const { basket } = useStoreContext()
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* title and theme change  */}
        <Box display='flex' alignItems='center'>
          <Typography
            variant='h6'
            component={NavLink}
            to='/'
            exact
            sx={navStyles}
          >
            RE-STORE
          </Typography>
          {/* <Switch onChange={handleThemeChange} checked={darkMode} /> */}
          <FormGroup sx={{ marginLeft: '1em' }}>
            <FormControlLabel
              control={
                <Switch onChange={handleThemeChange} checked={darkMode} />
              }
              label={themeLabel}
              labelPlacement='end'
            ></FormControlLabel>
          </FormGroup>
        </Box>

        {/* page link */}
        <List sx={{ display: 'flex' }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display='flex' alignItems='center'>
          {/* shopping cart link */}
          <IconButton
            component={Link}
            to='/basket'
            size='large'
            sx={{ color: 'inherit' }}
          >
            <Badge badgeContent={itemCount} color='warning'>
              <ShoppingCart />
            </Badge>
          </IconButton>
          {/* login, register link */}
          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
