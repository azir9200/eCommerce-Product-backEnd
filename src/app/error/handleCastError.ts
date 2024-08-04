import mongoose from "mongoose";
import { TErrorSources } from "../interface/error";


const handleCastError = (err: mongoose.Error.CastError)=>{
    const errorSource: TErrorSources=[
        {  
            path: err.path,
            message: err.message,
}
    ];
    return{
        errorSource,
        message: "cast Error",
    };
};

export default handleCastError;