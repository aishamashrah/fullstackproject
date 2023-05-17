

let userData = {};

async function CreateAccountFetch(createdUser: object) {
    try {
      const response = await fetch('https://cookeaseapi.azurewebsites.net/User/AddUser', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdUser)
      });
  
      if (!response.ok) {
        const message = `An error has occurred ${response.status}`;
        throw new Error(message);
      }
  
      const data = await response.json();
      return { response, data }; // Return both the response and data
    } catch (error: any) {
      throw new Error(error.message);
    }
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
    return data;
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

  
  async function PostWeightChanges (recipeData: object) {
    const response = await fetch('https://cookeaseapi.azurewebsites.net/Ingredients/UpdateIngrdientItem', {
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


  async function PostRecipeUpdate (recipeData: object) {
    const response = await fetch('https://cookeaseapi.azurewebsites.net/Recipe/UpdateRecipeItem', {
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



export { CreateAccountFetch, login, getLoggedInUserData, GetAllSearchpage,GetAllArticel,ArticelData,GetAllbyId, PostRecipeData, PostIngredientData, GetNutritionByName, GetIngredientsByRecipeId, GetArticleById, GetRecipeByName, GetRecipeById, PostWeightChanges, PostRecipeUpdate };
















  




