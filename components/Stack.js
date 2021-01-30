import React from 'react';
import cn from 'classnames';
import styles from './Stack.module.css';

function Stack({ gap = 10, column = false, className, children }) {
    return (
        <div className={cn(styles.stack, column && styles.column, className)} style={{ '--gap': `${gap}px` }}>
            {children}
        </div>
    )
}

export default Stack;
