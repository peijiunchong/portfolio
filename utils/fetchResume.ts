export const fetchResume = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getResume`);

    // const data = await res.json()

    // const resumeURL: String = data.URL;

    // console.log("fetching", resumeURL);

    return "resumeURL";
    
}