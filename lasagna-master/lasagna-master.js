/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return "Lasagna is done.";
  }
  if (remainingTime === undefined) {
    return "You forgot to set the timer.";
  }
  return "Not done, please wait.";
}

export function preparationTime(layers, avgTime) {
  if (avgTime) {
    return layers.length * avgTime;
  }
  return layers.length * 2;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (const l of layers) {
    if (l === "noodles") {
      noodles += 50;
    }
    if (l == "sauce") {
      sauce += 0.2;
    }
  }
  return { noodles, sauce };
}

export function addSecretIngredient(friendsIng, myIng) {
  myIng[myIng.length] = friendsIng[friendsIng.length - 1];
}

export function scaleRecipe(recipe, portions) {
  const newRecipe = {};
  let oneServing = 0;

  for (let r in recipe) {
    oneServing = recipe[r] / 2;
    newRecipe[r] = oneServing * portions;
  }

  return newRecipe;
}
