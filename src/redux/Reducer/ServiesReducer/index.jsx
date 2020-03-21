
const initialServices ={
    user :{}
}

const ServicesReducer = (state=initialServices,action)=>{
    switch (action.type) {

        case"hello":{
            console.log(action.data);
            
        }
    
        default:{

           return {...state}
        }
    }
}
export default ServicesReducer;