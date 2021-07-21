import React from 'react';
import { ReactComponent as IconRightArrow} from '../../../assets/right-arrow.svg'
import { ReactComponent as IconLeftArrow} from '../../../assets/left-arrow.svg'

export const NextArrow = (props)=> {
    const { className, style, onClick } = props;
  
    return (
        <IconRightArrow
            className={className}
            style={{...style,height:'40px' }}
            onClick={onClick}
        />   
    );
  }
export const PreviewArrow = (props)=> {
    const { className, style, onClick } = props;
  
    return (
        <IconLeftArrow
            className={className}
            style={{...style,height:'40px' }}
            onClick={onClick}
        />   
    );
  }

