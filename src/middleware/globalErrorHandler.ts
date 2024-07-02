import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { TErrorSources } from '../interface/error.interface';
import handleValidationError from '../error/handleValidationError';
import handleCastError from '../error/handleCastError';
import handleDuplicateError from '../error/handleDuplicateError';
import { ZodError } from 'zod';
import handleZodError from '../error/handleZodError';


const globalErrorHandler: ErrorRequestHandler = (err, req, res, next ) => {

    let  statusCode = 500;
    let  message = "Something went wrong from Global Error";

    let errorSources: TErrorSources = [
    {
        path: "",
        message: "Something went wrong from Global Error",
    },    
    ];

    if(err.name === "validationError"){
        const simplified = handleValidationError(err);
        errorSources = simplified.errorSource;
        console.log(simplified);
    }else if(err.name === "CastError"){
        const simplified = handleCastError(err);
        errorSources = simplified.errorSource;
    }else if (err.code === 1100){
        const simplified = handleDuplicateError(err);
        errorSources = simplified.errorSource;
    }else if (err instanceof ZodError) {
        const simplified = handleZodError(err);
        errorSources = simplified.errorSources;
      }

  res.status(500).json({
    success: false,
    message: "Hey Azir,  this error from GLOBAL ERROR page !", 
    errorSources,
  });
};

export default globalErrorHandler;