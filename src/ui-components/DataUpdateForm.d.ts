/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Data } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DataUpdateFormInputValues = {
    games?: string;
    experiences?: string;
    user_info?: string;
    profile_img?: string;
};
export declare type DataUpdateFormValidationValues = {
    games?: ValidationFunction<string>;
    experiences?: ValidationFunction<string>;
    user_info?: ValidationFunction<string>;
    profile_img?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataUpdateFormOverridesProps = {
    DataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    games?: PrimitiveOverrideProps<TextAreaFieldProps>;
    experiences?: PrimitiveOverrideProps<TextAreaFieldProps>;
    user_info?: PrimitiveOverrideProps<TextAreaFieldProps>;
    profile_img?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type DataUpdateFormProps = React.PropsWithChildren<{
    overrides?: DataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    data?: Data;
    onSubmit?: (fields: DataUpdateFormInputValues) => DataUpdateFormInputValues;
    onSuccess?: (fields: DataUpdateFormInputValues) => void;
    onError?: (fields: DataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DataUpdateFormInputValues) => DataUpdateFormInputValues;
    onValidate?: DataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DataUpdateForm(props: DataUpdateFormProps): React.ReactElement;
