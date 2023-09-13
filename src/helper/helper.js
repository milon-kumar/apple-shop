export const catechError = async (error) =>{
    return {
        success: false,
        message: "Something went wrong",
        data: error.message
    }
}