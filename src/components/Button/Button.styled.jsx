import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  display: block;
  padding: 10px 50px;
  margin: auto;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${p => p.theme.colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #303f9f;
  }
`;
