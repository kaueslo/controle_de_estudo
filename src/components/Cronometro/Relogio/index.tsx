import React from 'react';
import style from './relogio.module.scss';

export default function Relogio() {
  return (
    /*
    uma forma de resolver o erro da solicitacao do elemento pai
    <React.Fragment>
      <span>0</span>
      <span>0</span>
      <span>:</span>
      <span>0</span>
      <span>0</span>
    </React.Fragment>
    */
    //outra forma
    <>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </>
  );
}
