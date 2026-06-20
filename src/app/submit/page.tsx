import {FC} from "react";

type Props = {
    searchParams: Promise<{
        [key:string]:string|string[]|undefined
    }>
}

const SubmitPage: FC<Props> = async ({searchParams}) =>{

    fetch('/jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            key1: 'value1',
            key2: 'value2',
        })
    })


    const awaitSP = await searchParams;
    return(
        <>

            this is page after submitting {awaitSP.name}

        </>
    )
}

export default SubmitPage
