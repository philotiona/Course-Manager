export const fetchDataGetCourses = async() => {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch("http://localhost:4000/courses/all", {
            headers: {
                "Authorization": token,
                "Accept": "*/*"
            }
        });
        const data = await response.json();
        console.log("Fetched courses:", data); 
        if(response.ok) {
            return data.result || []; 
        } 
        throw new Error("Failed to fetch courses");
    } catch(error) {
        console.error(`Error fetching courses: ${error}`);
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
    try {
        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        console.log("Login response:", data); // Debug log
        if (response.ok) {
            return {
                token: data.result,
                name: data.user?.name,
                email: data.user?.email,
                role: data.user?.role,
                isAuth: true
            }
        }
        throw new Error("Failed to fetch")
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
}

export const logoutUserService = async (token) => {
    try {
        const response = await fetch("http://localhost:4000/logout", {
            method: "DELETE",
            headers: {
                "Authorization": token,
                "Accept": "*/*"
            }
        });
        return response.ok;
    } catch (error) {
        console.error("Logout failed:", error);
        return false;
    }
};