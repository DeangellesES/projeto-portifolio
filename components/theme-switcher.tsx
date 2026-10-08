"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {useTheme} from "next-themes"

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme()

    return(
        <Button className="cursor-pointer h-7 w-7 p-0" onClick={ ()=> setTheme( theme  === 'light' ? 'dark' : 'light' )} >
            {theme === "light" ? (<Moon className="text-primary-foreground" />) : (<Sun className="text-primary-foreground" />)}
        </Button>
    )
}

export default ThemeSwitcher