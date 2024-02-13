import styled from 'styled-components';

const NoteContainer = styled.div`
  position: absolute;

  color: var(--black);
  background-color: var(--primary-color);
  box-shadow: 1px 1px 8px 0 var(--black);
  padding: 4px;

  .header {
    width: 100%;
    height: 30px;

    border-bottom: 1px solid var(--primary-color-light);
  }

  textarea {
    background-color: unset;
    padding: 16px;
    border: none;
    outline: none;
  }
`;

export default NoteContainer;
