const url =
  process.env.NODE_ENV === "production"
    ? "https://8qj26plzti.execute-api.us-east-1.amazonaws.com/dev"
    : "http://localhost:3000/dev";
console.log(`Environment: ${process.env.NODE_ENV}`);
const X_API_KEY = process.env.REACT_APP_CHEF_AI_API_KEY;

export const getRecipe = async (foodItem) => {
  const response = await fetch(
    `${url}/get-recipe?food=${foodItem}`,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": X_API_KEY,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
  );
  if (response.status === 200) {
    return response.json(); // parses JSON response into native JavaScript objects
  } else if (response.status === 400) {
    return { error: "Not sure... try rephrasing!" };
  } else {
    return { error: "I took too long, try again!" };
  }// parses JSON response into native JavaScript objects
};
export const saveRecipe = async (recipe) => {
  const response = await fetch(
    `${url}/save-recipe`,
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": X_API_KEY,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(recipe), // body data type must match "Content-Type" header
    
    }
  );
  if (response.status === 200) {
    return response.json(); // parses JSON response into native JavaScript objects
  } else if (response.status === 400) {
    return { error: "Not sure... try rephrasing!" };
  } else {
    return { error: "I took too long, try again!" };
  }// parses JSON response into native JavaScript objects
};
export const updateRecipe = async (user) => {
  const response = await fetch(
    `${url}/update-recipe`,
    {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": X_API_KEY,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(user), // body data type must match "Content-Type" header
    
    }
  );
  if (response.status === 200) {
    return response.json(); // parses JSON response into native JavaScript objects
  } else if (response.status === 400) {
    return { error: "Not sure... try rephrasing!" };
  } else {
    return { error: "I took too long, try again!" };
  }// parses JSON response into native JavaScript objects
};

export const signUp = async (user) => {
  const response = await fetch(`${url}/sign-up`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": X_API_KEY,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(user), // body data type must match "Content-Type" header
  });
  if (response.status === 200) {
    return response.json(); // parses JSON response into native JavaScript objects
  } else if (response.status === 400) {
    return { error: "Email or password incorrect" };
  } else {
    return { error: "Server error, try again later" };
  }
};

export const logIn = async (user) => {
  const response = await fetch(`${url}/log-in`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": X_API_KEY,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(user), // body data type must match "Content-Type" header
  });
  if (response.status === 200) {
    return response.json(); // parses JSON response into native JavaScript objects
  } else if (response.status === 400) {
    return { error: "Email or password incorrect" };
  } else {
    return { error: "Server error, try again later" };
  }
};
