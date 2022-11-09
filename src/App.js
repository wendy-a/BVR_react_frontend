import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
// import Detail from './components/Detail';
import Search from './components/Form';
// import History from './components/History';
import Result from './components/Result'
import Result2 from './components/Result2'

import History from "./components/History";
import LearnMore from "./components/Detail";

function App() {
    return (
        <div className="App">
            <hr/>
            <Routes>
                {/* main search page */}
                <Route path='/' element={<Search/>}/>

                {/* result page */}
                <Route path='/record/:id' element={<Result/>}/>

                {/* result page */}
                <Route path='/historyRecord/:id' element={<Result2/>}/>

                {/* history */}
                <Route path='/history' element={<History/>}/>

                {/* explanation */}
                <Route path='/learnMore' element={<LearnMore/>}/>

                {/* REDIRECT */}
                {/*<Route path='*' element={<Navigate to="/pirate/" replace />} />*/}
            </Routes>
        </div>
    );
}

export default App;
