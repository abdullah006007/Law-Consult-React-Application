import toast from "react-hot-toast"

export const getInfo = () =>{
    const lawyerInfo = localStorage.getItem('lawyerInfo')
    if(lawyerInfo) return JSON.parse(lawyerInfo)
        return[]

    // return lawyerInfo ? JSON.parse(lawyerInfo) : []
}

export const addToLocal = (person)=> {
    const lawyerInfo = getInfo()
    console.log(lawyerInfo);
    console.log(person.id);
    const isExist = lawyerInfo.find(p => p.id === person.id)
    if(isExist){
        toast.error("Already Added")
    }
    else{
        lawyerInfo.push(person)
    }
    
    localStorage.setItem('lawyerInfo', JSON.stringify(lawyerInfo))

}

// remove item

export const removeLawyer = id =>{
    const lawyerInfo = getInfo();
    const remainingFavorites = lawyerInfo.filter(p=>p.id!== id)
    localStorage.setItem('lawyerInfo', JSON.stringify(remainingFavorites))
    toast.error("Appointment removed!!")



}