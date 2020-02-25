import React from 'react';
import styled from 'styled-components';
import Card from '../atoms/Card';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
`;

const Home = () => (
  <Container>
    <Card>
      <div>
        Foto
      </div>
      <span>
        Duilio Felix
      </span>
      Profissao
    </Card>
    <div>
      <Card>
        Conhecimentos
      </Card>
      <Card>
        Experiencia
      </Card>
      <Card>
        Resumo
      </Card>
      <Card>
        Contato
      </Card>
    </div>
  </Container>
);

export default Home;
