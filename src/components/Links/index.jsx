import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      twitter: author.twitter,
      github: author.github,
      email: author.email
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={links.twitter}>
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.github}>
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

Links.propTypes = {
  data: PropTypes.object.isRequired
};

export default Links;
