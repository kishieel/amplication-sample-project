import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RouteTitle } from "../route/RouteTitle";

export const StopEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="latitude" source="latitude" />
        <TextInput label="locationName" source="locationName" />
        <NumberInput label="longitude" source="longitude" />
        <ReferenceInput source="route.id" reference="Route" label="Route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
