// use local storage to manage cart data
const addToDb = (e) => {
    let timeStore = {};

//get the shopping cart from local storage
const storedTime = localStorage.getItem('break-container');
    if (storedTime) {
        timeStore = JSON.parse(storedTime);
    }
    localStorage.setItem('setBreakTime', JSON.stringify(timeStore));
}




export {
    addToDb
    
}
