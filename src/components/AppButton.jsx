import { Button } from "@mui/material";

const AppButton = ({type, color, handleClick}) => {
    return (
        <>
            <Button variant="contained" style={{backgroundColor : color}} className="button" id="" onClick={handleClick}>{type}</Button>
        </>
    )
}

export default AppButton;