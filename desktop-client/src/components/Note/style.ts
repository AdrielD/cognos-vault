import styled from 'styled-components';

const NoteContainer = styled.div`
  position: absolute;

  color: var(--black);
  background-color: var(--primary-color);
  box-shadow: 2px 2px 8px 0 var(--black);

  .header {
    width: 100%;
    height: 30px;
  }

  textarea {
    background-color: unset;
    padding: 16px;
  }
`;

export default NoteContainer;
