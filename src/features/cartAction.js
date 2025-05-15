
import { useSelector } from "react-redux";
// import { showAlert } from "./alertSlice";
import { showAlert } from "./alretSlice";


export const postDataApi = (cartData, key) => {

    if(!key){
        return;
    }
    return async (dispatch) => {
        const fetchData = async () => {
            

            const res = await fetch(`https://addcart-90bd6-default-rtdb.firebaseio.com/auth/${key}/cart.json`,
                {
                    method: "PUT",
                    body: JSON.stringify({cartData})
                })
            const data = await res.json();
            return data;
        }
        try {
            dispatch(showAlert({message:"Pending...!", color:"amber", status:true}))
            const data = await fetchData()
            dispatch(showAlert({ message: "Added Successfully", color: "green", status: true }))
        } catch (error) {
            dispatch(showAlert({ message: "Something Went Wrong", color: "red", status: true }))
        }
    }
}
