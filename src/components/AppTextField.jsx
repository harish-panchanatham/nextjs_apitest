import { TextField } from "@mui/material";

const AppTextField = ({placeholder, value, onChange}) => {
    return (
        <>
            <TextField size="small" className="" id={placeholder} placeholder={placeholder} value={value} onChange={onChange} />
        </>
    )
}

export default AppTextField;