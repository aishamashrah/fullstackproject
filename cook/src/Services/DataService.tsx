

let userData = {};


let loginUser = {};

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

async function GetNutritionByName(ingredient: string) {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/Nutrition/GetItemsByName/${ingredient}`);
    let data = await response.json();
    userData = data;
    return data;
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

async function GetAllSearchpage() {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/Recipe/GetAllRecipeItems`);
    let data = await response.json();
    return data;
  }
  
  async function GetAllArticel() {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/Article/GetAllArticleItems`);
    let data = await response.json();
    return data;
  }
  




  async function ArticelData(loginUser: any) {
    const response = await fetch('https://cookeaseapi.azurewebsites.net/Article/AddArticleItem', {
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


  
async function GetAllbyId(Id: number) {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/Article/GetAllArticleItems${Id}`);
    let data = await response.json();
    return data;
  }

async function PostRecipeData (recipeData: object) {
    const response = await fetch('https://cookeaseapi.azurewebsites.net/Recipe/AddRecipeItem', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipeData)
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

async function PostIngredientData (recipeData: object) {
  const response = await fetch('https://cookeaseapi.azurewebsites.net/Ingredients/AddIngredients', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeData)
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

async function GetIngredientsByRecipeId(Id: number) {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/Ingredients/GetItemsByRecipeId/${Id}`);
    let data = await response.json();
    return data;
  }


  async function GetArticleById(Id: number) {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/Article/GetArticleById/${Id}`);
    let data = await response.json();
    return data;
  }

  async function GetRecipeByName(name: string) {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/Recipe/GetItemsByTitle/${name}`);
    let data = await response.json();
    return data;
  }

  
  async function GetRecipeById(id: number) {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/Recipe/GetItemsByRecipeId/${id}`);
    let data = await response.json();
    return data;
  }

export { CreateAccountFetch, login, getLoggedInUserData, GetAllSearchpage,GetAllArticel,ArticelData,GetAllbyId, PostRecipeData, PostIngredientData, GetNutritionByName, GetIngredientsByRecipeId, GetArticleById, GetRecipeByName, GetRecipeById };
















  




