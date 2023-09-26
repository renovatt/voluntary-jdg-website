
import Image from "next/image";
import arrowBack from '@/assets/next-btn.svg';
import userIcon from '../../../../public/icons/user-icon.svg';
import emailIcon from '../../../../public/icons/envelope.svg';
import phoneIcon from '../../../../public/icons/phone.svg';
import linkedlnIcon from '../../../../public/icons/LinkedIn.svg';
import githubIcon from '../../../../public/icons/Github.svg';
import uploadIcon from '../../../../public/icons/upload.svg';


const VacanciesDetailsPage = () => {
  return (
    <section
      className="mt-10 flex flex-col items-center justify-center container"
    >
      <section className=" w-[90%] flex flex-col">
        <div className="border border-gray-600 w-[50px] h-[50px] flex items-center justify-center rounded-full mb-4">
          <Image src={arrowBack} alt="Seta para voltar" className="transform rotate-180 cursor-pointer transition-all duration-300 hover:opacity-70"/>
        </div>

        <div className="border border-[#00EBF0] flex flex-col bg-[#191D20] rounded-sm p-8">
            <div className="bg-[#23282d] w-100 md:w-[300px] px-2 py-2 text-center rounded-sm mb-5">
              <h3 className="text-[#FAFAFA] text-base">Estamos procurando um novo</h3>
            </div>

            <div className="flex flex-col md:flex-row mb-5 justify-between text-[#FAFAFA]">
              <h1 className="font-semibold text-2xl mb-4 md:mb-0 ">Desenvolvedor front-end</h1>  
              <span className="font-semibold text-base">Incrições até 20/08/2023</span>
            </div>

            <div className="flex flex-wrap mb-5 text-[#00EBF0] w-100">
              {['HTML', 'CSS', 'Javascript', 'React','Java'].map((item, index, array) => (
                <span key={index}>
                <span className="text-base">{item}</span>
                {index !== array.length - 1 && <span className="ml-2 mr-2">•</span>}
                </span>
              ))}
            </div>

            <div  className=" text-[#fafafa] mb-5">
              <p className="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi porro quaerat magni. Recusandae placeat eaque, 
              veniam doloribus, quidem perferendis error culpa distinctio fugiat earum, tenetur laborum laboriosam beatae odit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi porro quaerat magni. Recusandae placeat eaque, 
              veniam doloribus, quidem perferendis error culpa distinctio fugiat earum, tenetur laborum laboriosam beatae odit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi porro quaerat magni. Recusandae placeat eaque, 
              veniam doloribus, quidem perferendis error culpa distinctio fugiat earum, tenetur laborum laboriosam beatae odit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi porro quaerat magni. Recusandae placeat eaque, 
              veniam doloribus, quidem perferendis error culpa distinctio fugiat earum, tenetur laborum laboriosam beatae odit.
              </p>
            </div>

        </div>
      </section>
      
      <section className="w-[90%] mt-20 pt-14 pb-14 flex flex-col bg-[#272727] rounded-sm">
        <div className=" w-[90%] mx-auto text-[#FAFAFA] mt-5 mb-16">
          <h1 className=" text-3xl pb-5 border-b border-[rgba(250,250,250,0.7)] ">Voluntariar-se</h1>
        </div>

        <form className="w-[90%] mx-auto mb-5">
          <fieldset className="flex flex-col justify-around">
            <div className="flex flex-col mb-10">
                <label className="text-[#FAFAFA] block mb-4" htmlFor="">Nome completo<span className="text-[#00EBF0] text-base">*</span></label>
                <div className="bg-[#1A1A1A] rounded-sm py-3 flex justify-around">
                  <Image src={userIcon} alt="Icone de usuario" className="block w-[24px] ml-4"/>
                  <input type="text" className="bg-transparent text-[#FAFAFA] h-[32px] pr-5 focus:outline-none" style={{ width: 'calc(100% - 100px)' }} />
                </div>
            </div>
            
            <div className="flex flex-col mb-10">
              <label className="text-[#FAFAFA] block mb-4" htmlFor="">E-mail<span className="text-[#00EBF0] text-base">*</span></label>
              <div className="bg-[#1A1A1A] rounded-sm py-3 flex justify-around">
                <Image src={emailIcon} alt="Icone de e-mail" className="block w-[24px] ml-4" />
                <input type="email" className="bg-transparent text-[#FAFAFA] focus:outline-none  h-[32px] pr-5" style={{ width: 'calc(100% - 100px)' }} />
              </div>
            </div>
            
            <div className="flex flex-col mb-10">
              <label htmlFor="" className="text-[#FAFAFA] block mb-4">Telefone<span className="text-[#00EBF0] text-base">*</span></label>
              <div className="bg-[#1A1A1A] rounded-sm py-3 flex justify-around">
                <Image src={phoneIcon} alt="Icone de telefone" className="block w-[24px] ml-4"/>
                <input type="number" className="bg-transparent text-[#FAFAFA] h-[32px] focus:outline-none  pr-5" style={{ width: 'calc(100% - 100px)' }}/>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between mb-10">
              
              <div className="flex flex-col w-100 md:w-[48%] mb-5 md:mb-0 ">
                <label htmlFor="" className="text-[#FAFAFA] block mb-4">Linkedln<span className="text-[#00EBF0] text-base">*</span></label>
                <div className="bg-[#1A1A1A] rounded-sm py-3 flex justify-around">
                  <Image src={linkedlnIcon} alt="Icone de Linkedln" className="block w-[24px] ml-4" />
                  <input type="text" className="bg-transparent text-[#FAFAFA] h-[32px] focus:outline-none pr-5" style={{ width: 'calc(100% - 100px)' }} />
                </div>
              </div>
                          
              <div className="flex flex-col w-100 md:w-[48%] mb-5 md:mb-0 ">
                <label htmlFor="" className="text-[#FAFAFA] block mb-4">Github</label>
                <div className="bg-[#1A1A1A] rounded-sm py-3 flex justify-around">
                  <Image src={githubIcon} alt="Icone de Github" className="block w-[24px] ml-4"/>
                  <input type="text" className="bg-transparent text-[#FAFAFA] h-[32px] focus:outline-none pr-5" style={{ width: 'calc(100% - 100px)' }} />
                </div>
              </div>
            
            </div>

            <div className="flex flex-col justify-center items-center w-[100%]">
              <div className="flex flex-col h-[100px] w-[100%] mt-10 justify-center items-center">
                    <div className="relative w-[40%] min-w-[230px] mx-auto transition-all duration-300 hover:opacity-70 flex items-center justify-center mt-[72px]">
                      <input type="file" className="absolute opacity-0 w-full cursor-pointer h-[106px]" />
                      <div className="bg-transparent border border-dashed border-[#fafafa] pt-[40px] pr-[60px] pb-[40px] pl-[60px] text-center cursor-pointer flex flex-col items-center justify-center h-[106px]">
                        <Image src={uploadIcon} alt="Icone de Upload" className="w-[24px] mb-2" />
                        <span className="text-[#fafafa]">Arraste seu currículo</span>
                      </div>
                    
                </div>
                <span className="text-[#fafafa] mt-[20px] mb-[40px] ">Formato: PDF</span>
              </div>
              <button className="bg-[rgba(0,235,240,0.2)] border border-[#00EBF0] w-[100%] pt-3 pb-3 mt-[110px] text-[#fafafa] rounded-sm cursor-pointer transition-all 
              duration-300 hover:opacity-80 ">Enviar</button>
            </div>
          </fieldset>
        </form>
      </section>

    </section>
  )
}

export default VacanciesDetailsPage
