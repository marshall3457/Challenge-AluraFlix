import Footer from "./Components/Footer";
import FormCategory from "./Components/FormCategory";
import FormVideo from "./Components/FormVideo";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Global from "./Global";
import Error404 from "./Components/Error404";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Editar from "./Components/Editar";
import ExitoEditar from "./Components/ExitoEditar";
import VideoTotal from "./Components/VideoTotal";
import Resultado from "./Components/Resultado";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: start;

`




function App() {
  return (
    <>
      <Global/>
      <Router>
        <Container>
          <Header/>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/formVideo' element={<FormVideo />} />
            <Route path='/formCategory' element={<FormCategory/>}/>
            <Route path='/editar' element={<Editar/>}/>
            <Route path='/exitoEditar' element={<ExitoEditar/>}/>
            <Route path='/videoTotal' element={<VideoTotal/>}/>
            <Route path='/resultado' element={<Resultado/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
          <Footer />
        </Container>
      </Router>
    </>


  );
}

export default App;
