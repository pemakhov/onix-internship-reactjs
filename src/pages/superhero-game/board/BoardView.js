import React from 'react';
import PropTypes from 'prop-types';
import './Board.scss';

const BoardView = (props) => {
  const { cards } = props;
  const row0 = cards.slice(0, 3);
  const row1 = cards.slice(3, 6);
  const row2 = cards.slice(6, 9);

  return (
    <div id="superhero-board">
      <div className="row">{row0}</div>
      <div className="row">{row1}</div>
      <div className="row">{row2}</div>
    </div>
  );
};

BoardView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element),
};

BoardView.defaultProps = {
  cards: [{}],
};

export default BoardView;
