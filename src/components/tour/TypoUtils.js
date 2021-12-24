import { red } from "@mui/material/colors"
import Typography from "@mui/material/Typography"
export const Typographyf14light = (props) => {
    return (
        <Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'light' }}>{props.children}</Typography>
    )
}
export const Typographyf14medium = (props) => {
    return (
        <Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'medium' }}>{props.children}</Typography>
    )
}
export const TypographyMod = (props) => {
    return (
        <Typography variant="h6" component="h2" fontSize={props.fontSize || "18px"} fontWeight={props.fontWeight || "medium"}>{props.children}</Typography>
    )
}

export const TypographyModWarning = (props) => {
    return (
        <Typography variant="h6" component="h2" fontSize={props.fontSize || "18px"} fontWeight={props.fontWeight || "medium"} color={red[600]}>{props.children}</Typography>
    )
}
