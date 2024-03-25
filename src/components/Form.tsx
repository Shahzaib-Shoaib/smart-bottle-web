"use client";
import { useRef, useState } from "react";
import "./Form.module.css";
function Form(props: any) {
  const personalizedInputRef: any = useRef();
  const drinkModeInputRef: any = useRef();
  const drinkAmountInputRef: any = useRef();
  const severityInputRef: any = useRef();
  const ageInputRef: any = useRef();
  const genderInputRef: any = useRef();
  const weightInputRef: any = useRef();
  const exerciseIntensityInputRef: any = useRef();
  const climateFactorRef: any = useRef();

  function submitHandler(event: any) {
    event.preventDefault();
    const enteredPersonalization = personalizedInputRef.current.value;
    const enteredDrinkMode = drinkModeInputRef.current.value;
    const enteredDrinkAmount = drinkAmountInputRef.current.value;
    const enteredSeverity = severityInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredGender = genderInputRef.current.value;
    const enteredWeight = weightInputRef.current.value;
    const enteredExerciseIntensity = exerciseIntensityInputRef.current.value;
    const enteredClimateFactor = climateFactorRef.current.value;
    function calculateWaterIntake(
      enteredExerciseIntensity: any,
      enteredClimateFactor: any,
      enteredWeight: any
    ) {
      const baseline_intake_ml = enteredWeight * 30;
      let exercise_factor;
      let climate_adjustment;
      if (enteredExerciseIntensity == "low") {
        exercise_factor = 0.5;
      } else if (enteredExerciseIntensity == "moderate") {
        exercise_factor = 0.7;
      } else if (enteredExerciseIntensity == "high") {
        exercise_factor = 1.0;
      } else {
        return null;
      }
      if (enteredClimateFactor == "hot") {
        climate_adjustment = 0.2;
      } else if (enteredClimateFactor == "cold") {
        climate_adjustment = -0.1;
      } else {
        return null;
      }
      const total_intake_ml =
        baseline_intake_ml * exercise_factor +
        baseline_intake_ml * climate_adjustment;

      return total_intake_ml;
    }

    const enteredtotalIntakeMl = calculateWaterIntake(
      enteredExerciseIntensity,
      enteredClimateFactor,
      enteredWeight
    );
    const bottleData = {
      personalization: enteredPersonalization,
      drinkMode: enteredDrinkMode,
      drinkAmount: enteredDrinkAmount,
      severity: enteredSeverity,
      age: enteredAge,
      gender: enteredGender,
      weight: enteredWeight,
      exerciseIntensity: enteredExerciseIntensity,
      climateFactor: enteredClimateFactor,
      calculatedtotalIntakeMl: enteredtotalIntakeMl,
    };

    props.onAddData(bottleData);
  }

  return (
    <>
      <div className="bg-gray-800 text-white py-4 ">
        <h1 className="text-xl sm:text-xl md:text-xl lg:text-2xl ml-3 ">
          Form{" "}
        </h1>
      </div>
      <div className="formContainer">
        <form
          action="#"
          method="POST"
          onSubmit={submitHandler}
          className="form"
        >
          <div className="formGroup">
            <label htmlFor="personalized">
              Would you like a personalized experience?
            </label>
            <select
              id="personalized"
              name="personalized"
              className="inputField"
              ref={personalizedInputRef}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="mode">Choose an option:</label>
            <select
              id="mode"
              name="mode"
              className="inputField"
              ref={drinkModeInputRef}
            >
              <option value="">Select</option>
              <option value="drink_more">
                You would like to drink more water
              </option>
              <option value="illness">
                You have an illness that requires more water
              </option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="formGroup">
            <label htmlFor="drinkAmount">
              How much would you like to drink?
            </label>
            <input
              type="number"
              id="drinkAmount"
              name="drinkAmount"
              ref={drinkAmountInputRef}
              className="inputField"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="severity">Severity of illness (1-5):</label>
            <input
              type="number"
              id="severity"
              name="severity"
              min="1"
              max="5"
              ref={severityInputRef}
              className="inputField"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="age">Your age:</label>
            <input
              type="number"
              id="age"
              name="age"
              ref={ageInputRef}
              className="inputField"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="gender">Your gender:</label>
            <select
              id="gender"
              name="gender"
              ref={genderInputRef}
              className="inputField"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="weight">Enter your weight in kilograms:</label>
            <input
              type="number"
              id="weight"
              name="weight"
              ref={weightInputRef}
              className="inputField"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="exerciseIntensity">
              Enter your exercise intensity (low/moderate/high):
            </label>
            <input
              type="text"
              id="exerciseIntensity"
              name="exerciseIntensity"
              ref={exerciseIntensityInputRef}
              className="inputField"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="climateFactor">
              Enter your climate factor (hot/cold):
            </label>
            <input
              type="text"
              id="climateFactor"
              name="climateFactor"
              ref={climateFactorRef}
              className="inputField"
            />
          </div>
          <div className="formGroup">
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
