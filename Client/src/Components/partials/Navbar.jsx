import React from "react"
import { IconButton, Typography, Toolbar, AppBar, makeStyles, List, ListItem, ListItemText } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import { Link } from "react-router-dom"

/** **********************************************************************************
 * @description     Navbar Items
 */
const navItems = [
   {
      text: "Home",
      href: "/",
      display: "nav-item",
   },
   {
      text: "SignIn",
      href: "/signin",
      display: "nav-item signin-btn",
   },
   {
      text: "Login",
      href: "/login",
      display: "nav-item login-btn",
   },
   {
      text: "Logout",
      href: "/logout",
      display: "nav-item logout-btn",
   },
]

/** **********************************************************************************
 * @description     Navbar Style
 */

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   appbar: {
      color: "#333",
      backgroundColor: " #fff",
   },
   rightSide: {
      marginLeft: theme.spacing("auto"),
      display: "flex",
   },
   title: {
      flexGrow: 1,
   },
}))

/** **********************************************************************************
 * @description     Navbar Component
 */

const Navbar = () => {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         <AppBar position="static" className={classes.appbar}>
            <Toolbar>
               <Typography variant="h6" className={classes.title}>
                  Mentsy
               </Typography>

               <List component="nav" aria-label="contacts" className={classes.rightSide}>
                  {navItems.map((navitem, i) => (
                     <ListItem button key={i} component="a" href={navitem.href} className={navitem.display}>
                        <ListItemText primary={navitem.text} />
                     </ListItem>
                  ))}

                  <IconButton display={{ xs: 'block', md: 'none' }} edge="start" color="inherit" aria-label="menu">
                     <MenuIcon />
                  </IconButton>
               </List>
            </Toolbar>
         </AppBar>
      </div>
   )
}

export default Navbar
