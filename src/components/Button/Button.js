import React from 'react';
import PropTypes from 'prop-types';
import { SubmitButton, LinkButton, Icon } from './styles';

const Button = ({ children, icon = null, href = null, target='_self', disabled }) => !href 
  ? (
    <SubmitButton type="submit" disabled={disabled}>
      {icon && <Icon src={icon}/>}
      {children}
    </SubmitButton>
  ) : (
    <LinkButton className="link-button" to={href} target={target}>
      {icon && <Icon src={icon}/>}
      {children}
    </LinkButton>
  );

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;