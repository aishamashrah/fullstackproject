

let userData = {};



async function CreateAccountFetch(createdUser: object) {
    const response = await fetch('https://cookeaseapi.azurewebsites.net/User/AddUser', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdUser)
    });

    // Check if no error for duplicate account
    if(!response.ok) {
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }

    let data = await response.json();
    console.log(data);
    // POST so no return needed (not getting anything)
}





async function login(loginUser: object) {
    const response = await fetch('https://cookeaseapi.azurewebsites.net/User/Login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
    });

    // Check if no error for duplicate account
    if(!response.ok) {
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }

    let data = await response.json();
    console.log(data);
    return data;
    // POST so no return needed (not getting anything)
}



async function getLoggedInUserData(username: any) {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/User/GetUserByUsername/${username}`);
    let data = await response.json();
    userData = data;
    console.log(userData);
}


async function GetNutritionByName(ingredient: string) {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/Nutrition/GetItemsByName/${ingredient}`);
    let data = await response.json();
    userData = data;
    return data;
}














export { CreateAccountFetch, login, getLoggedInUserData, GetNutritionByName };