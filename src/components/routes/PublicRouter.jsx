import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Menu from '../organisms/Menu';

const Container = styled.div`
  margin: 50px auto;
  max-width: 980px;
`;

const PublicRouter = () => (
  <Container>
    <Menu />
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Container>
);

export default PublicRouter;
