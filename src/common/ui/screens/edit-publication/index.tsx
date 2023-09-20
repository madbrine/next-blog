import { IPublication } from "@/common/types/IPublication";
import { useEffect, useState } from "react";
import Editor from "../../components/editor";

interface IProps {
    data: IPublication;
}
function EditPublicationScreen({data}: IProps) {

    const [isEdit, setEdit] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            
        }
    }, [])
    return (
        <>
            <Editor data={data}/>
        </>
    )
}
export default EditPublicationScreen;