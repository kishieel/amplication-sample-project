import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StopTitle } from "../stop/StopTitle";
import { UserTitle } from "../user/UserTitle";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="distance" source="distance" />
        <TextInput label="endLocation" source="endLocation" />
        <NumberInput
          step={1}
          label="estimatedTravelTime"
          source="estimatedTravelTime"
        />
        <TextInput label="routeName" source="routeName" />
        <TextInput label="startLocation" source="startLocation" />
        <ReferenceArrayInput source="stops" reference="Stop">
          <SelectArrayInput
            optionText={StopTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
