import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { format } from 'date-fns';

import { deleteEducation } from '../../../actions/profile';
// import formatDate from '../../utils/formatDate';

const Education = ({ owner, education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <div key={edu._id} className="row">

      <div style={{ background: "#d0cecf" }} className="col-sm-3 container ">
        <i className="text-dark experience-dates">{format(new Date(edu.from), 'yyyy')}</i>   -      {format(new Date(edu.to), 'yyyy')}
      </div>


      <div className="col-sm-9 container ">
        <div className="container">
          {owner &&(<button onClick={() => deleteEducation(edu._id)} className=" btn hoverable is-hovered  is-pulled-right">
            <i class="fa fa-trash"></i>
          </button>)}
        </div>
        <h6 className="opacity"><b>{edu.degree}</b></h6>

        <p>{edu.school}</p>

        <hr></hr>
      </div>
    </div>
    // <div key={edu._id} className="container  shadow">
    //                 <p><b>{edu.degree} / {edu.school}</b></p>
    //                 <i className="text-dark experience-dates"><span className="tag  round">{edu.from}</span> to <span className="tag  round">{edu.to}</span></i>
    //                 <p>{edu.description}
    //                 </p>
    //                 <hr></hr>
    //               </div>
  ));

  return (
    <Fragment>
      {educations}
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, {
  deleteEducation
})(Education);