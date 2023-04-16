/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PlayerModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayerModelUpdateFormInputValues = {
    data?: string;
};
export declare type PlayerModelUpdateFormValidationValues = {
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerModelUpdateFormOverridesProps = {
    PlayerModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    data?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PlayerModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlayerModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    playerModel?: PlayerModel;
    onSubmit?: (fields: PlayerModelUpdateFormInputValues) => PlayerModelUpdateFormInputValues;
    onSuccess?: (fields: PlayerModelUpdateFormInputValues) => void;
    onError?: (fields: PlayerModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayerModelUpdateFormInputValues) => PlayerModelUpdateFormInputValues;
    onValidate?: PlayerModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlayerModelUpdateForm(props: PlayerModelUpdateFormProps): React.ReactElement;
