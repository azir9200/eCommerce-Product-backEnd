import { TErrorSources } from "../interface/error";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err:any) => {
    const match = err.message.match(/"([^"]*)"/);
   const extractedMessage = match && match[1];
  

   const errorSource: TErrorSources = [
    {
        path: "",
        message: `${extractedMessage}  already exists !`,
    },
   ];
   return {
    errorSource,
   }
};

export default handleDuplicateError;