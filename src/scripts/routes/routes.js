import List from '../views/pages/home';
import Detail from '../views/pages/detail';

const routes = {
  '/': List,
  '/list': List,
  '/detail/:id': Detail,
};

export default routes;
