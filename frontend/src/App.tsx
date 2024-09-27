import './App.css';
import {Boards} from './sections/Board/Boards';
import {LowerPart} from './sections/LowerPart/LowerPart';
import {UpperPart} from './sections/UpperPart/UpperPart';

function App() {
  return (
    <div className="px-[400px]">
      <div className="flex justify-center pt-[80px] flex-col gap-[40px]">
        <UpperPart />
        <Boards />
        <LowerPart />
      </div>
    </div>
  );
}

export default App;
