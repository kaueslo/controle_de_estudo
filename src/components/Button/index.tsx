import { type } from "os";
import React, { Children } from "react";
import style from './Botao.module.scss';

class Botao extends React.Component<{type?: 'button' | 'submit' | 'reset' | undefined,
children?: React.ReactNode}>{
    render(){
        const {type = "button"} = this.props;
        return(
            <button type={type} className={style.Botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;