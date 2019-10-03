import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import  M from 'materialize-css/dist/js/materialize.min.js'
import {  updateLog } from '../../actions/logActions';


const EditLogModal = ( {current, updateLog}) => {
    const [message, setMessage] = useState('');
    const [tech, setTech] = useState('');
    const [attention, setAttention] = useState(false);

    useEffect(() => {
        if(current){
            setMessage(current.message);
            setTech(current.tech);
            setAttention(current.attention);
        }
    }, [current])

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html: 'Please enter message and tech'})
        } else {
            //create updated object log
            const updLog = {
                id: current.id,
                message,
                attention,
                tech
            };
            updateLog(updLog)
            M.toast({ html: `Log updated by ${tech} on ` });
        }
        //clear fields 
        setMessage('');
        setTech('');
        setAttention('');
    }
    
    return (
        <div id='Edit-log-modal' className='modal'  style={modalStyle}>
            <div className='modal-content' >
                <h4 className='blue-text center'>Enter log message</h4>

                <div className='row'>
                    <div className="input-field">
                        <input
                        type='text'
                        name='message'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        />
                        <label htmlFor='message' className='active'>
                            Log Message
                        </label>
                    </div>
                </div>


                <div className='row'>
                    <div className='input-field col s12' >
                        <select name='tech' value={tech} onChange={e => setTech(e.target.value)}>
                            <option value="" disabled >Select Tecchnician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Aidarous Jibril ">Aidarous Jibril</option>
                            <option value="Hary Smith">Hary Smith</option>
                        </select>
                    </div>
                </div>
                
                <div className='row'>
                    <div className="input-field">
                        <p>
                        <label >
                            <input type="checkbox" 
                            name='attention'
                            checked={attention}
                            value={attention}
                            onChange={e => setAttention(!attention)}/>
                            <span>Needs Attention</span>
                        </label>
                        </p>
                        
                        
                    </div>
                </div>

                <div className='modal-footer'>
                     <a onClick={onSubmit} href='#!' className="modal-close waves-effect blue waves-light btn">Enter</a>
                </div>
            </div>           
        </div>
    );
};

//modalStyle
const modalStyle = {
    width: '75%',
    height: '75%'
}

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    current: state.log.current
  });
  
export default connect( mapStateToProps, {updateLog}) (EditLogModal);
