import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import  M from 'materialize-css/dist/js/materialize.min.js'
import { deleteLog, setCurrent } from '../../actions/logActions';
import { connect } from 'react-redux';


const LogItems = ({log, deleteLog, setCurrent}) => {

    const onDelete = () => {
        deleteLog(log.id);
        M.toast({ html: 'Log Deleted' });
    };

    return (
        <li className='collection-item' style={{marginBottom:'8px', padding: '5px'}}>
            <div>
                <a href='#Edit-log-modal' 
                    className={`modal-trigger 
                    ${log.attention ? 'red-text' : 'blue-text'}`}
                    onClick={() => setCurrent(log)}
                    > 
                    {log.message} 
                </a> <br />
                
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id}</span> lst update by {' '} 
                    <span className='black-text'>{log.tech}</span > on {' '}
                        <Moment className='black-text' format='MMMM Do YYYY h-mm-ss:a'>{log.date}</Moment>
                    <div  className='secondary-content'>
                        <a href='#!' 
                            onClick={onDelete}
                        >
                            <i className='material-icons red-text float-right'>delete</i>
                        </a>
                    </div>
                </span> 
                
            </div>
        </li>
    );
}

LogItems.prototype = {
  log:  PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
 setCurrent: PropTypes.func.isRequired,
}
export default connect(null, {deleteLog, setCurrent})(LogItems);
