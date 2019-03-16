import { connect } from 'react-redux';

import { Board, mapDispatchToProps, mapStateToProps } from './Board';

import './Board.css';

export default connect(mapStateToProps, mapDispatchToProps)(Board);
