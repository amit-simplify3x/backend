// const asynHandler=(fn)=>async(req,res,next)=>{

//     try {
//         await fn(req,res,next)

//     } catch (error) {
//         console.log(error)
//         res.status(error.code||500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }

const asynHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler()).catch((error) => next(error));
  };
};

export { asynHandler };
