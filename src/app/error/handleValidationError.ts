import mongoose from "mongoose";
import { TErrorSources } from "../interface/error";

const handleValidationError = (err: mongoose.Error.ValidationError) => {
const errorSource: TErrorSources = Object.values(err.errors).map((
    val:mongoose.Error.ValidatorError | mongoose.Error.CastError
)=>{
    return{
        path: val?.path,
        message: val?.message,
    };
})

return {
    message: "Validation error",
    errorSource,
}

};

export default handleValidationError;