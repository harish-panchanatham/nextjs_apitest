import { Button } from "@mui/material";

const AppButton = ({type, color, handleClick}) => {
    return (
        <>
            <Button variant="contained" style={{
                backgroundColor : color,
                boxShadow : "none",
                borderRadius : "50px",
                textTransform : "capitalize"
            }} id="" onClick={handleClick}>{type}</Button>
        </>
    )
}

export default AppButton;