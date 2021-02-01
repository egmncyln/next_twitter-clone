import React from 'react';
import styles from './TextBody.module.css';
import cn from 'classnames';

function TextBody({ bold = false, className, children, ...props }) {
    return <span className={cn([styles.body, bold && styles.bold, className])} {...props}>{children}</span>
}

export default TextBody;
