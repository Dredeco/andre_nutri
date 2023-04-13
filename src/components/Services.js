import React from 'react'
import {FaClipboardList, FaVideo} from 'react-icons/fa'
import {TbTargetArrow} from 'react-icons/tb'
import {MdContactPhone} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import {GiGiftOfKnowledge} from 'react-icons/gi'


export default function Services() {
  let services = [
    {name: "Planejamentos específicos e individualizados.", image: <FaClipboardList />},
    {name: "Foco no objetivo e rotina do paciente.", image: <TbTargetArrow />},
    {name: "Aproximação e comunicação direta e com frequência ao paciente.", image: <MdContactPhone />},
    {name: "Contato direto comigo via WhatsApp para quaisquer dúvidas.", image: <IoLogoWhatsapp />},
    {name: "Consultas on-line via videoconferência.", image: <FaVideo />},
    {name: "Mais de 8 anos estudando a teoria e colocando-a em prática.", image: <GiGiftOfKnowledge />},
  ]

  return (
    <div className='services' id='services'>
      <div className='layer'>
        <div className='container'>
          <h1>Porque comigo é diferente e os meus pacientes tem um <strong>resultado diferenciado?</strong></h1>
          <div className='wrapper'>
            {services.map((service) => (
              <div key={service.name} className='card'>
                <i>{service.image}</i>
                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
