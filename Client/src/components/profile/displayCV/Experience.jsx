import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { deleteExperience } from '../../../actions/profile';
// import formatDate from '../../utils/formatDate';

const Experience = ({owner, experience,deleteExperience}) => {
  const experiences = experience.map((exp) => (
    <div key={exp._id} className="container  shadow py-2">
                    <p><b>{exp.title} / {exp.company}</b></p>
                    <i className="text-dark experience-dates"><span className="tag  round">{format(new Date(exp.from), 'yyyy-MM-dd')}</span> to <span className="tag  round">{format(new Date(exp.to), 'yyyy-MM-dd')}</span></i>
                    {owner && (<>
                    <button onClick={() => deleteExperience(exp._id)} className=" btn hoverable is-hovered  is-pulled-right"><i class="fa fa-trash"></i></button>
                    </>)}
                  <div className="py-1">
                    <p>{exp.description}
                    
                    </p>
                    </div>
                  </div>
   
  ));

  return (
    <Fragment>
       {experiences}
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, {
     deleteExperience
    })(Experience);