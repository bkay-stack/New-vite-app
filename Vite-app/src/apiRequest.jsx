const apiRequest = async (url = '', optioObj = null , errMsg = null) => {
    try{
         const res = await fetch(url, optioObj);
         if(!res.ok) throw Error('Please reload the app')
    } catch (err) {
        errMsg = err.message;
    } finally {
        return errMsg
    }
}

export default apiRequest;