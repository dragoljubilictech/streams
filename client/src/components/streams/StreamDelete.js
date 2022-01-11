import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { useParams, Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';

const StreamDelete = () => {
  const [title, setTitle] = useState('');

  const { id } = useParams();

  const selectedStream = useSelector(state => state.streams[Number(id)]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(Number(id)));
  }, []);

  useEffect(() => {
    setTitle(selectedStream.title);
  }, [title]);

  const actions = (
    <React.Fragment>
      <button
        onClick={() => dispatch(deleteStream(Number(id)))}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content={`Are you sure you want to delete stream with title:${title} `}
        actions={actions}
        onDismiss={() => history.go(-1)}
      />
    </div>
  );
};

export default StreamDelete;
