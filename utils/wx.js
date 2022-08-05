function wxToPromise(method='request',options={}){
     return new Promise((resovle,reject)=>{
         options.success=resovle
         options.fail=error=>{
              reject(error)
         }
         wx[method](options)
     })
}
export default wxToPromise