class Storage {
  static getCalorieLimit(defaultLimit = 2000) {
    let calorieLimit = localStorage.getItem('calorieLimit');
    if (calorieLimit === null) {
      calorieLimit = defaultLimit;
    } else {
      calorieLimit = parseInt(calorieLimit);
    }
    return calorieLimit;
  }

  static setCalorieLimit(calorieLimit) {
    localStorage.setItem('calorieLimit', calorieLimit);
  }

  static getTotalCalories(defaultCalories = 0) {
    let totalCalories = localStorage.getItem('totalCalories');
    if (totalCalories === null) {
      totalCalories = defaultCalories;
    } else {
      totalCalories = parseInt(totalCalories);
    }
    return totalCalories;
  }

  static updateTotalCalories(calories) {
    localStorage.setItem('totalCalories', calories);
  }

  static getMeals() {
    let meals = localStorage.getItem('meals');
    if (meals === null) {
      meals = [];
    } else {
      meals = JSON.parse(meals);
    }
    return meals;
  }

  static saveMeal(meal) {
    const meals = Storage.getMeals();
    meals.push(meal);
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static removeMeal(id) {
    const meals = Storage.getMeals();
    meals.forEach((meal, index) => {
      if (meal.id === id) {
        meals.splice(index, 1);
      }
    });

    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static getWorkouts() {
    let workouts = localStorage.getItem('workouts');
    if (workouts === null) {
      workouts = [];
    } else {
      workouts = JSON.parse(workouts);
    }
    return workouts;
  }

  static removeWorkout(id) {
    const workouts = Storage.getWorkouts();
    workouts.forEach((workout, index) => {
      if (workout.id === id) {
        workouts.splice(index, 1);
      }
    });

    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static saveWorkout(workout) {
    const workouts = Storage.getWorkouts();
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  clearAll() {
    localStorage.removeItem('totalCalories');
    localStorage.removeItem('meals');
    localStorage.removeItem('workouts');
    // localStorage.clear();    // remove everything
  }
}

export default Storage;
