
import Footer from "../Footer";
import Image from "next/image";
import arrowBack from '@/assets/next-btn.svg';
import userIcon from '../../../../public/icons/user-icon.svg';
import emailIcon from '../../../../public/icons/envelope.svg';
import phoneIcon from '../../../../public/icons/phone.svg';
import linkedlnIcon from '../../../../public/icons/LinkedIn.svg';
import githubIcon from '../../../../public/icons/Github.svg';


const VacanciesDetailsPage = () => {
  return (
    <section
      className="mt-10 flex flex-col items-center justify-center"
    >
      <section>
        <div>
        <Image src={arrowBack} alt="Seta para voltar" />
        </div>

        <div>
            <div>
              <h3>Estamos procurando um novo</h3>
            </div>
            
            <div>
              <h1>Desenvolvedor front-end</h1>
              <span>Incrições até 20/08/2023</span>
            </div>

            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>React</span>
            </div>

            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi porro quaerat magni. Recusandae placeat eaque, 
              veniam doloribus, quidem perferendis error culpa distinctio fugiat earum, tenetur laborum laboriosam beatae odit.
              </p>
            </div>

        </div>
      </section>
      
      <section>
        <div>
          <h1>Voluntariar-se</h1>
        </div>

        <form>
          <fieldset>
            <div>
              <label htmlFor="">Nome completo</label>
              <div>
                <Image src={userIcon} alt="Icone de usuario" />
                <input type="text" />
              </div>
            </div>
            
            <div>
              <label htmlFor="">E-mail</label>
              <div>
                <Image src={emailIcon} alt="Icone de e-mail" />
                <input type="email" />
              </div>
            </div>
            
            <div>
              <label htmlFor="">Telefone</label>
              <div>
                <Image src={phoneIcon} alt="Icone de telefone" />
                <input type="number" />
              </div>
            </div>
            
            <div>
              
              <div>
                <label htmlFor="">Linkedln</label>
                <div>
                  <Image src={linkedlnIcon} alt="Icone de Linkedln" />
                  <input type="text" />
                </div>
              </div>
              
              <div>
                <label htmlFor="">Github</label>
                <div>
                  <Image src={githubIcon} alt="Icone de Github" />
                  <input type="text" />
                </div>
              </div>


            </div>

            <div>
              <div>
                <input type="file" />
                <span>Formato: PDF</span>
              </div>
              <button>Enviar</button>
            </div>
          </fieldset>
        </form>
      </section>
      <Footer/>
    </section>
  )
}

export default VacanciesDetailsPage
