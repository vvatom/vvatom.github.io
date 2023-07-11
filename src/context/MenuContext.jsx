import React from "react"

export const menuItems = {
    about: "about",
    blog: "blog",
    projects: "projects"
}

const MenuContext = React.createContext({ menuItem: menuItems.about, setMenuItem: () => { } })

export default MenuContext