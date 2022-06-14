import { UserStore } from '../store/index'
import { observer } from "mobx-react-lite";
function Home(){
  const rootStroe = UserStore()
  return (
    <div>
      home
      {rootStroe.CounterStore.count}
    </div>
  );
}

export default observer(Home);