// add to local Store;
const addToDb = id => {
    let jobCart = {};
    const storeCart = localStorage.getItem('job-cart')
    if(storeCart){
        jobCart = JSON.parse(storeCart)
    }

    // add to quantity;
    const quantity = jobCart[id]
    if(quantity){
        const newQuantity = quantity + 1
        jobCart[id] = newQuantity
    }
    else{
        jobCart[id] = 1
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart))

}



// get store cart;
const getStoreCart = () =>{
    
    let jobCart = {};

    const storeCart = localStorage.getItem('job-cart')
    if(storeCart){
        jobCart = JSON.parse(storeCart)
    }


    return jobCart;
}
export { addToDb, getStoreCart };