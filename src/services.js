export const fetchDataGetCourses = async() => {
    try {
        const response = await fetch("http://localhost:4000/courses/all");
        const data = await response.json();
        if(response.ok) {
            return data.result || []; 
        } 
        throw new Error("Failed to fetch");
    } catch(error) {
        console.error(`Error: ${error}`);
        return []; 
    }
}
export const fetchDataGetAuthors = async() => {
    try {
        const response = await fetch("http://localhost:4000/authors/all");
        const data = await response.json()
        console.log("here ",data)
        if(response.ok) {
            return data.result || [];
        }
        throw new Error("Falied to fetch")
    } catch(error) {
        console.error(`Error: ${error}`)
        return [];
    }
}
export const loginFetchUser = async(userData) => {
    const response = await fetch("http://localhost:4000/login", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (response.ok) {
        return {
            token: data.result, 
            name: data.user?.name,
            email: data.user?.email
        }
    }
    throw new Error("Failed to fetch")
}