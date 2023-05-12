

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

  async function GetIngredientsByRecipeId() {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/Ingredients/GetItemsByRecipeId/1`);
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

async function GetNutritionByName(ingredient: string) {
    let response = await fetch(`https://cookeaseapi.azurewebsites.net/Nutrition/GetItemsByName/${ingredient}`);
    let data = await response.json();
    userData = data;
    return data;
}

// async function PostRecipeData (recipeData: object) {
//     const response = await fetch('https://cookeaseapi.azurewebsites.net/Recipe/AddRecipeItem', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(recipeData)
//     });

//     // Check if no error for duplicate account
//     if(!response.ok) {
//         const message = `An error has occured ${response.status}`;
//         throw new Error(message);
//     }

//     let data = await response.json();
//     console.log(data);
//     return data;
//     // POST so no return needed (not getting anything)
// }
// async function PostRecipeData(recipeData: object): Promise<number> {
//     const response = await fetch('https://cookeaseapi.azurewebsites.net/Recipe/AddRecipeItem', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(recipeData)
//     });
  
//     if (!response.ok) {
//       const message = `An error has occurred: ${response.status}`;
//       throw new Error(message);
//     }
  
//     const responseData = await response.json();
//     const newRecipeId = responseData.Id; // Assuming the server returns an 'id' field
  
//     console.log(`New recipe created with ID ${newRecipeId}`);
  
//     return newRecipeId;
//   }





  async function PostRecipeData(recipeData: object): Promise<object> {
    const response = await fetch('https://cookeaseapi.azurewebsites.net/Recipe/AddRecipeItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeData)
    });
  
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
  
    const responseData = await response.json();
    if (responseData && responseData.id) {
      const newRecipeId = responseData;
    //   console.log(`New recipe created with ID ${newRecipeId}`);
    console.log(newRecipeId)
      return newRecipeId;
    } else {
      throw new Error('Invalid response data');
    }
  }







export { CreateAccountFetch, login, getLoggedInUserData, GetNutritionByName, GetAllSearchpage, GetAllArticel, ArticelData, userData, loginUser, GetIngredientsByRecipeId, PostRecipeData };
