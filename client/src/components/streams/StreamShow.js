import React, { useEffect } from 'react';
import { fetchStream } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const StreamShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(Number(id)));
  }, []);

  const stream = useSelector(state => state.streams[Number(id)]);

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default StreamShow;
