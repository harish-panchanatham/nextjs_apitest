import { useEffect, useState } from "react"
import AppButton from "./AppButton";
import AppTextField from "./AppTextField";
import { getValue } from "@/services";
import { saveValue } from "@/services";
import { Typography } from "@mui/material";

export default function Form() {

    const [userName, setUserName] = useState("");
    const [data, setData] = useState("")

    useEffect(() => {
       async function fetch() {
        const result = await getValue();
        setUserName(result.value)
       }

       fetch()
    },[])

    const handleClick = async () => {

        await saveValue(data)
        setData("")
        const newUserName = await getValue();
        setUserName(newUserName.value)
    }

    return (
        <>

        <div className="form">

            <Typography>hi, {userName}</Typography>
            <br />
            <AppTextField placeholder="change username" value={data} onChange={(e)=> {setData(e.target.value)}}></AppTextField>
            <br />
            <br />
            <AppButton type={"submit"} color={"orange"} handleClick={handleClick}></AppButton>

        </div>

        </>
    )
}