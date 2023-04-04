import React from 'react'
import Image from 'next/legacy/image'

import User from './../../public/images/user.jpg'

export default function About() {
  return (
    <div className='about' id='about'>
        <div className='about-container'>
            <h1>Quem sou eu?</h1>
            <div className='about-wrapper'>
                <div className='image'>
                <Image 
                    src={User}
                    width={300}
                    height={300}
                    objectFit='cover'
                    alt=''
                />
                </div>
                <div>
                <span>
                    Meu nome é André Fernandes, sou um nutricionista especializado em NUTRIÇÃO ESPORTIVA, EMAGRECIMENTO e METABOLISMO, além de ser um atleta fitness.
                    <br /><br />
                    A nutrição não apenas transformou meu corpo, mas também mudou minha vida em diversos aspectos. Minha missão e objetivo são ajudar a transformar a vida dos meus pacientes através de uma alimentação mais saudável e equilibrada, sem restrições extremas. Tenho total confiança de que, com sua dedicação em seguir um plano alimentar específico e calculado para suas necessidades, podemos alcançar qualquer resultado que você deseje. Estou ansioso para trabalhar com você nessa jornada em busca de uma vida mais saudável e plena.
                </span>
                <a href='#about'>Saiba mais</a>
                </div>
            </div>
        </div>
    </div>
  )
}
