import styled from 'styled-components';

export const UlGallery = styled.ul`
  grid-gap: 20px;
  max-width: calc(100vw - 80px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 40px auto 30px;
  padding: 0;
  display: grid;
`;

