// import Cookies from "js-cookie";

export async function movies(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/`,{
        method: "GET",
        headers:{
            "Content-Type": "applications/json",
        }
    })
    if (res.ok){
        const data = await res.json();
        return data
    } else{
        throw new Error("Error to fetch")
    }
}