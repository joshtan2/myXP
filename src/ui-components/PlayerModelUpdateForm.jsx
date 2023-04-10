/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PlayerModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PlayerModelUpdateForm(props) {
  const {
    id: idProp,
    playerModel: playerModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    games: "",
    experiences: "",
    user_id: "",
  };
  const [games, setGames] = React.useState(initialValues.games);
  const [experiences, setExperiences] = React.useState(
    initialValues.experiences
  );
  const [user_id, setUser_id] = React.useState(initialValues.user_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = playerModelRecord
      ? { ...initialValues, ...playerModelRecord }
      : initialValues;
    setGames(
      typeof cleanValues.games === "string"
        ? cleanValues.games
        : JSON.stringify(cleanValues.games)
    );
    setExperiences(
      typeof cleanValues.experiences === "string"
        ? cleanValues.experiences
        : JSON.stringify(cleanValues.experiences)
    );
    setUser_id(cleanValues.user_id);
    setErrors({});
  };
  const [playerModelRecord, setPlayerModelRecord] =
    React.useState(playerModelModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PlayerModel, idProp)
        : playerModelModelProp;
      setPlayerModelRecord(record);
    };
    queryData();
  }, [idProp, playerModelModelProp]);
  React.useEffect(resetStateValues, [playerModelRecord]);
  const validations = {
    games: [{ type: "JSON" }],
    experiences: [{ type: "JSON" }],
    user_id: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          games,
          experiences,
          user_id,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            PlayerModel.copyOf(playerModelRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlayerModelUpdateForm")}
      {...rest}
    >
      <TextAreaField
        label="Games"
        isRequired={false}
        isReadOnly={false}
        value={games}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              games: value,
              experiences,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.games ?? value;
          }
          if (errors.games?.hasError) {
            runValidationTasks("games", value);
          }
          setGames(value);
        }}
        onBlur={() => runValidationTasks("games", games)}
        errorMessage={errors.games?.errorMessage}
        hasError={errors.games?.hasError}
        {...getOverrideProps(overrides, "games")}
      ></TextAreaField>
      <TextAreaField
        label="Experiences"
        isRequired={false}
        isReadOnly={false}
        value={experiences}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              games,
              experiences: value,
              user_id,
            };
            const result = onChange(modelFields);
            value = result?.experiences ?? value;
          }
          if (errors.experiences?.hasError) {
            runValidationTasks("experiences", value);
          }
          setExperiences(value);
        }}
        onBlur={() => runValidationTasks("experiences", experiences)}
        errorMessage={errors.experiences?.errorMessage}
        hasError={errors.experiences?.hasError}
        {...getOverrideProps(overrides, "experiences")}
      ></TextAreaField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={user_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              games,
              experiences,
              user_id: value,
            };
            const result = onChange(modelFields);
            value = result?.user_id ?? value;
          }
          if (errors.user_id?.hasError) {
            runValidationTasks("user_id", value);
          }
          setUser_id(value);
        }}
        onBlur={() => runValidationTasks("user_id", user_id)}
        errorMessage={errors.user_id?.errorMessage}
        hasError={errors.user_id?.hasError}
        {...getOverrideProps(overrides, "user_id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || playerModelModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || playerModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
