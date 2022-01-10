import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editStream, fetchStream } from '../../actions';

const StreamEdit = () => {
  useEffect(() => {
    fetchStream(Number(id));
  }, []);

  let { id } = useParams();

  const selectedStream = useSelector(state => state.streams[Number(id)]);
  const dispatch = useDispatch();

  if (!selectedStream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form className="ui form error">
        <div className="field">
          <label>Edit Title</label>
          <input type="text" name="title" defaultValue={selectedStream.title} />
        </div>
        <div className="field">
          <label>Edit Description</label>
          <input
            type="text"
            name="description"
            defaultValue={selectedStream.description}
          />
        </div>
        <button
          onClick={() =>
            dispatch(
              editStream(Number(id), {
                title: selectedStream.title,
                description: selectedStream.description,
              })
            )
          }
          className="ui button primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StreamEdit;
