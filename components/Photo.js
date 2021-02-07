import React from 'react';
import cn from 'classnames';
import styles from './Photo.module.css';

function Photo({ src = "https://pbs.twimg.com/profile_images/1159877117091418112/QDzZbZ_7_400x400.jpg", alt, size = 47 }) {
    return (
        <div className={cn(styles.photo)} style={{ width: size, height: size }}>
            <img className={styles.img} src={src} alt={alt}></img>
        </div>
    )
}

export default Photo;
