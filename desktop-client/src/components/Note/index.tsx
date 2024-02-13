import { useEffect, useRef } from 'react';
import NoteContainer from './style.ts';

const Note = () => {
  type NoteMouseEvent = React.MouseEvent<HTMLDivElement> | MouseEvent;

  const noteRef = useRef<any>(null);
  const textRef = useRef<any>(null);
  const dragRef = useRef(false);
  const deltaRef = useRef({ x: 0, y: 0 });

  const DEFAULT_SIZE = { width: '170px', height: '170px' };

  useEffect(() =>{
    textRef.current.style.width = DEFAULT_SIZE.width;
    textRef.current.style.height = DEFAULT_SIZE.height;

    new ResizeObserver(resize).observe(textRef.current);

    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseDown = (e: NoteMouseEvent) => {
    dragRef.current = true;
    deltaRef.current = {
      x: e.clientX - noteRef.current.offsetLeft,
      y: e.clientY - noteRef.current.offsetTop,
    };
  }

  const handleMouseUp = () => {
    dragRef.current = false;
  }

  const handleMouseMove = (e: NoteMouseEvent) => {
    if (dragRef.current) {
      animateMove(e.clientX, e.clientY);
    }
  }

  const animateMove = (x: number, y: number) => {
    noteRef.current.style.left = `${x - deltaRef.current.x}px`;
    noteRef.current.style.top = `${y - deltaRef.current.y}px`;
  }

  const resize = () => {
    noteRef.current.style.width = `${textRef.current.offsetWidth}px`;
    noteRef.current.style.height = `${textRef.current.offsetHeight + 30}px`;
  } 

  return (
    <NoteContainer
      ref={noteRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="header" />
      <textarea
        ref={textRef}
        onMouseDown={e => e.stopPropagation()}
      />
    </NoteContainer>
  );
}

export default Note;
