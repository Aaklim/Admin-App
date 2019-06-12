import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from './components/Users/Users';
import { PostList } from './components/PostList/PostList';
import { PostEdit } from "./components/PostEdit/PostEdit";
import { PostCreate } from "./components/PostCreate/PostCreate";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./components/Dashboard/Dashboard";
import authProvider from "./components/authProvider/authProvider";



const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}  >
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>

  </Admin>
);

export default App;
