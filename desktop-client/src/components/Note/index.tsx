import { useState, useEffect, useRef } from 'react';
import NoteContainer from './style.ts';

const Note = () => {
  const [onDrag, toggleDrag] = useState(false);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  // const [animationFrame, setAnimationFrame] = useState(0);
  const noteRef = useRef<any>(null);
  const textRef = useRef<any>(null);

  // let animationFrame = 0;

  const DEFAULT_SIZE = { width: '270px', height: '270px' };

  useEffect(() =>{
    textRef.current.style.width = DEFAULT_SIZE.width;
    textRef.current.style.height = DEFAULT_SIZE.height;

    new ResizeObserver(() => {
      noteRef.current.style.width = `${textRef.current.offsetWidth}px`;
      noteRef.current.style.height = `${textRef.current.offsetHeight + 30}px`;
    }).observe(textRef.current);
  }, []);

  const handleMouseDown = (e: any) => {
    toggleDrag(true);
    setDeltaPosition({
      x: e.clientX - noteRef.current.offsetLeft,
      y: e.clientY - noteRef.current.offsetTop,
    });
  }

  const handleMouseUp = () => {
    toggleDrag(false);
    // cancelAnimationFrame(animationFrame);
  }

  const handleMouseLeave = () => {
    toggleDrag(false);
    // cancelAnimationFrame(animationFrame);
  }

  const handleMouseMove = (e: any) => {
    if (onDrag) {
      animateMove(e.clientX, e.clientY);
    }
  }

  const animateMove = (x: number, y: number) => {
    noteRef.current.style.left = `${x - deltaPosition.x}px`;
    noteRef.current.style.top = `${y - deltaPosition.y}px`;

    // setAnimationFrame(requestAnimationFrame(() => animateMove(x, y)));
    // requestAnimationFrame(() => animateMove(x, y));
  }

  return (
    <NoteContainer
      ref={noteRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="header" />
      <textarea
        ref={textRef}
        placeholder='Type something...'
        onMouseDown={e => e.stopPropagation()}
      />
    </NoteContainer>
  );
}

export default Note;
