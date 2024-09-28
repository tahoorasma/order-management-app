export const getAllData = (Data: any) => {
    return {
        type: "getAll",
        payload: Data
    }
}

export const createData = (NewData: any) => {
    return {
        type: "createNewData",
        payload: NewData
    }
}
    

export const deleteData = (deletedData: any) => {
    return {
        type: "deleteData",
        payload: deletedData
    }
}

export const updateData = (updatedData: any) => {
    return {
        type: "updateData",
        payload: updatedData
    }
}