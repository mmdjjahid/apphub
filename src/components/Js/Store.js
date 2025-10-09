export const getStoredApp = ()=>{
    const storeAppStr = localStorage.getItem("installedApp")
    if (storeAppStr){
        const storeApp = JSON.parse(storeAppStr)
        return storeApp
    } else return []
}

export const addStore = (id)=>{

    const storedAppData = getStoredApp()

    if (storedAppData.includes(id)){
        alert("Id alredi exsist")
    }
    else{
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem('installedApp', data)
    }
}

export const removeApp = (id)=>{
    const allStoreApp = getStoredApp()
    // const typeId = JSON.stringify(id)
    const filterAllStoreApp = allStoreApp.filter(storeItem => id !== storeItem)
    localStorage.setItem('installedApp', JSON.stringify(filterAllStoreApp))
    console.log(filterAllStoreApp)
    
}