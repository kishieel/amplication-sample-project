import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RouteList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Routes"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="distance" source="distance" />
        <TextField label="endLocation" source="endLocation" />
        <TextField label="estimatedTravelTime" source="estimatedTravelTime" />
        <TextField label="ID" source="id" />
        <TextField label="routeName" source="routeName" />
        <TextField label="startLocation" source="startLocation" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
