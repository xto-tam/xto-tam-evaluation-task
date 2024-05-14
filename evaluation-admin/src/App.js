import { Admin, Resource } from 'react-admin';

import { UserList } from './components/UserList';

const App = () => (
  <Admin dataProvider={{}}>
    <Resource name='Users' list={UserList} />
  </Admin>
);

export default App;
