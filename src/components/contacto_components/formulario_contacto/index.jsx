import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { useMediaQuery } from '@mui/material';

const initialFormData = {
        nombre: '',
        email: '',
        mensaje: '',
    };


const FormularioContacto = ({Volver}) => {


      const isLargeScreen = useMediaQuery( '(min-width:769px)' );
      
      const [formData, setFormData] = useState( initialFormData );

      const [formVisible, setFormVisible] = useState(false);

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value
            });
      };

      const handleBannerClick = () => {
        setFormVisible(!formVisible);
      };
      
      const handleSubmit = (e) => {
            e.preventDefault();
            sendEmail( formData );
            console.log( formData );
            setFormData( initialFormData );
            setFormVisible(false); 
      };

      const sendEmail = (data) => {
            emailjs.send('service_ts829qq', 'template_dgdhdzh', data, '01kETIMSxzxzI08Gq')
                  .then((response) => {
                  console.log('Correo enviado exitosamente!', response.status, response.text);
                  alert('Mensaje enviado exitosamente!');
                  }, (error) => {
                  console.error('Error al enviar el correo:', error);
                  alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
                  });
      };




  return (
    <>
        <div className='FormularioContacto-container'>
            
            <div className='FormularioContacto-title' onClick={handleBannerClick}>
                Contacta con nosotros:
            </div>

                                 
            <form className='FormularioContacto-div' onSubmit={handleSubmit}>
                
                                        
                    <div className='formularioContacto-escribir-datos-container'>
                        <div className='FormularioContacto-titulo-input'>NOMBRE :</div>
                        <div className='formularioContacto-input-container'>
                            <input type="text" className='formularioContacto-input' name="nombre" value={formData.nombre} onChange={handleChange} required />
                        </div>
                    </div>
                                        
                                        
                    <div className='formularioContacto-escribir-datos-container'>
                        <div className='FormularioContacto-titulo-input'>EMAIL :</div>
                        <div className='formularioContacto-input-container'>
                            <input type="email" className='formularioContacto-input' name="email" value={formData.email} onChange={handleChange} required /> 
                        </div>
                    </div>
                                        
                                    
                    <div className='formularioContacto-escribir-datos-container'>
                        <div className='FormularioContacto-titulo-input FormularioContacto-label-mensaje'>MENSAJE :</div>                          
                        <div>      
                            <textarea name="mensaje" className='formularioContacto-input formularioContacto-textarea' value={formData.mensaje} onChange={handleChange} />    
                        </div>
                    </div>
                                                            
                    <div className='formularioContacto-enviar-container'>
                        <button className='btn-submit' type="submit">Enviar</button>
                    </div>   
                    
            </form>              
                
                    
        </div>
    </>
  );
};

export default FormularioContacto;

















// return (
//     <>
//       <div className='form-container'>
            
//                   <div className='contactForm-banner-title' onClick={handleBannerClick}>
//                         Contacta con nosotros:
//                   </div>

//                   <div className='contactForm-principal-container'>
                              
//                               <form className='form-div' onSubmit={handleSubmit}>
                                    
                                                            
                                                            
                                                            
                                
//                                                             <div className='escribir-datos-container'>
//                                                                   <div className='titulo-input'>Nombre :</div>
//                                                                   <div className='input-obligatorio-container'>
//                                                                         <input type="text" className='obligatorio' name="nombre" value={formData.nombre} onChange={handleChange} required />
//                                                                         <div className='camposObligatorios'> (*) </div>
//                                                                   </div>
//                                                             </div>
                                                            
                                                            
                                                            
                                                            
                                                      
//                                                             <div className='escribir-datos-container'>
//                                                                   <div className='titulo-input'>Email :</div>
//                                                                   <div className='input-obligatorio-container'>
//                                                                         <input type="email" className='obligatorio' name="email" value={formData.email} onChange={handleChange} required />
//                                                                         <div className='camposObligatorios'> (*) </div>
//                                                                   </div>
//                                                             </div>
                                                            
                                                      
//                                                             <div className='escribir-datos-container'>
//                                                                   <div className='titulo-input'>Mensaje :</div>
//                                                                   <div className='input-obligatorio-container'>                            
//                                                                         <textarea name="mensaje" className='opcional' value={formData.mensaje} onChange={handleChange} />
//                                                                         <div className='camposOpcionales'> (o) </div>
//                                                                   </div>
//                                                             </div>
                                                
                                                            
                                                           
                                                
                                                            
                                                            
                                                
                                                
//                                                 <button className='btn-submit' type="submit">Enviar</button>
                                                
                                                      
                                    
                                    
//                               </form>
                        
//                           <div className='btn-card9' onClick={Volver}>
//                                 <ReplyAllIcon sx={{ color: '#ffffff', fontSize: isLargeScreen ? 100 : 40 }}/>
//                                 <div className='volver'>Volver</div>
//                           </div>
                 
//                   </div>
                    
//       </div>
//     </>
//   );
// };






