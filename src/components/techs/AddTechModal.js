import React, {useState} from 'react';
import  M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';


const AddTechModal = ({addTech}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({html: 'Please enter first n last names'})
        } else {
           addTech({firstName, lastName});
           M.toast({ html: `${firstName} ${lastName} was added as a tech` });
        }
        //clear fields 
        setFirstName('');
        setLastName('');
    }
    return (
        <div id='add-tech-modal' className='modal'  style={modalStyle}>
            <div className='modal-content' >
                <h4 className='blue-text center'>Add new Technician</h4>

                <div className='row'>
                    <div className="input-field">
                        <input
                        type='text'
                        name='lastName'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor='message' className='active'>
                            FirstName
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className="input-field">
                        <input
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor='message' className='active'>
                            lastName
                        </label>
                    </div>
                </div>
                

                <div className='modal-footer'>
                     <a onClick={onSubmit} href='#!' className="modal-close waves-effect blue waves-light btn">
                         Enter
                     </a>
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
AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
  };
export default connect( null, {addTech})(AddTechModal);


