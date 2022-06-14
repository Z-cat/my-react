import { Outlet} from 'react-router-dom'
import { observer } from 'mobx-react-lite'
function Layout() {

  return (
    <div>
      layout
      <Outlet />
    </div>
  );
}

export default observer(Layout)
