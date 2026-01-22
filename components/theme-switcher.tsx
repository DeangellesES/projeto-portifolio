"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {useTheme} from "next-themes"

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme()

    return(
        <Button className="cursor-pointer" onClick={ ()=> setTheme( theme  === 'light' ? 'dark' : 'light' )} >
            {theme === "light" ? (<Moon className="text-white"/> ): (<Sun />)}
        </Button>
    )
}

export default ThemeSwitcher