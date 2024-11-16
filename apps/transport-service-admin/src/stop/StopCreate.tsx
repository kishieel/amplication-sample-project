import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RouteTitle } from "../route/RouteTitle";

export const StopCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="latitude" source="latitude" />
        <TextInput label="locationName" source="locationName" />
        <NumberInput label="longitude" source="longitude" />
        <ReferenceInput source="route.id" reference="Route" label="Route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
