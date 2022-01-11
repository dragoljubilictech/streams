import React, { useEffect, useRef, useState } from 'react';
import flv from 'flv.js';
import { fetchStream } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const StreamShow = () => {
  const [player, setPlayer] = useState(null);

  const { id } = useParams();
  const dispatch = useDispatch();
  const videoRef = React.createRef();

  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      dispatch(fetchStream(Number(id)));
      buildPlayer();
    } else {
      buildPlayer();
    }

    return () => {
      if (player) player.destroy();
    };
  }, []);

  const stream = useSelector(state => state.streams[Number(id)]);

  const buildPlayer = () => {
    if (player || !stream) {
      return;
    }
    const player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();
    setPlayer(player);
  };

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default StreamShow;
