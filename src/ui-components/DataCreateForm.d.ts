/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DataCreateFormInputValues = {
    games?: string;
    experiences?: string;
    user_info?: string;
    profile_img?: string;
};
export declare type DataCreateFormValidationValues = {
    games?: ValidationFunction<string>;
    experiences?: ValidationFunction<string>;
    user_info?: ValidationFunction<string>;
    profile_img?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataCreateFormOverridesProps = {
    DataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    games?: PrimitiveOverrideProps<TextAreaFieldProps>;
    experiences?: PrimitiveOverrideProps<TextAreaFieldProps>;
    user_info?: PrimitiveOverrideProps<TextAreaFieldProps>;
    profile_img?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type DataCreateFormProps = React.PropsWithChildren<{
    overrides?: DataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DataCreateFormInputValues) => DataCreateFormInputValues;
    onSuccess?: (fields: DataCreateFormInputValues) => void;
    onError?: (fields: DataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DataCreateFormInputValues) => DataCreateFormInputValues;
    onValidate?: DataCreateFormValidationValues;
} & React.CSSProperties>;
export default function DataCreateForm(props: DataCreateFormProps): React.ReactElement;
