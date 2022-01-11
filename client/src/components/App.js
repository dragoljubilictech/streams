import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

// const App = () => {
//   return (
//     <BrowserRouter history={history}>
//       <div className="ui container">
//         <div>
//           <Header />
//           <Routes>
//             <Route exact path="/" element={<StreamList />} />
//             <Route path="/streams/new" element={<StreamCreate />} />
//             <Route path="/streams/edit/:id" element={<StreamEdit />} />
//             <Route path="/streams/delete" element={<StreamDelete />} />
//             <Route path="/streams/show" element={<StreamShow />} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

const App = () => {
  return (
    <Router history={history}>
      <div className="ui container">
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<StreamList />} />
            <Route path="/streams/new" element={<StreamCreate />} />
            <Route path="/streams/edit/:id" element={<StreamEdit />} />
            <Route path="/streams/delete/:id" element={<StreamDelete />} />
            <Route path="/streams/show" element={<StreamShow />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
