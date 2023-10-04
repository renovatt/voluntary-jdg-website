
import Image from "next/image";
import arrowBack from '@/assets/next-btn.svg';
import userIcon from '../../../../public/icons/user-icon.svg';
import emailIcon from '../../../../public/icons/envelope.svg';
import phoneIcon from '../../../../public/icons/phone.svg';
import linkedlnIcon from '../../../../public/icons/LinkedIn.svg';
import githubIcon from '../../../../public/icons/Github.svg';
import uploadIcon from '../../../../public/icons/upload.svg';


const VacanciesDetailsPage = () => {

  const languages = ['HTML', 'CSS', 'Javascript', 'React'];

  return (
    <section
      className="mt-10 flex flex-col items-center justify-center container"
    >
      <section className=" w-[90%] flex flex-col">
        <div className="border border-gray-600 w-[50px] h-[50px] flex items-center justify-center rounded-full mb-14">
          <Image src={arrowBack} alt="Seta para voltar" className="transform rotate-180 cursor-pointer transition-all duration-300 hover:opacity-70"/>
        </div>

        <div className="border border-[#00EBF0] flex flex-col bg-[#191D20] rounded-lg p-8">
            <div className="bg-[#23282d] w-100 md:w-[300px] p-2 text-center rounded-lg">
              <h3 className="text-[#FAFAFA] text-base">Estamos procurando um novo</h3>
            </div>

            <div className="flex flex-col md:flex-row my-2 justify-between text-[#FAFAFA]">
              <h1 className="font-semibold text-2xl mb-4 md:mb-0 ">Desenvolvedor front-end</h1>  
              <span className="font-semibold text-base">Incrições até 20/08/2023</span>
            </div>

            <div className="flex flex-wrap mb-6 text-[#00EBF0] w-100">
              {languages.map((item, index, array) => (
                <span className="" key={index}>
                
                <span className="text-base">{item}</span>
                
                {index !== array.length - 1 && <span className="mx-6">•</span>}
                </span>
              ))}
            </div>
            
            <p className="text-[#fafafa]">Lorem ipsum dolor sit amet consectetur,     adipisicing elit. Ea modi porro quaerat magni. Recusandae placeat eaque, 
              veniam doloribus, quidem perferendis error culpa distinctio fugiat earum, tenetur laborum laboriosam beatae odit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi porro quaerat magni. Recusandae placeat eaque, 
              veniam doloribus, quidem perferendis error culpa distinctio fugiat earum, tenetur laborum laboriosam beatae odit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi porro quaerat magni. Recusandae placeat eaque, 
              veniam doloribus, quidem perferendis error culpa distinctio fugiat earum, tenetur laborum laboriosam beatae odit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi porro quaerat magni. Recusandae placeat eaque, 
              veniam doloribus, quidem perferendis error culpa distinctio fugiat earum, tenetur laborum laboriosam beatae odit.
            </p>
            
        </div>
      </section>
      
      <section className="w-[90%] mt-20 pt-14 pb-14 flex flex-col bg-[#272727] rounded-lg">
        <div className=" w-[90%] mx-auto text-[#FAFAFA] mt-5 mb-16">
          <h1 className=" text-3xl pb-5 border-b border-[rgba(250,250,250,0.7)] ">Voluntariar-se</h1>
        </div>

        <form className="w-[90%] mx-auto mb-5">
          <fieldset className="flex flex-col justify-around">
            <div className="space-y-16">
                <div className="flex flex-col ">
                    <label className="text-[#FAFAFA] block mb-4" htmlFor="">Nome completo<span className="text-[#00EBF0] text-base">*</span></label>

                    <div className="bg-[#1A1A1A] rounded-lg px-8 h-[75px] flex">
                      <Image src={userIcon} alt="Icone de usuario" className="block w-[32px] mr-6"/>
                      
                      <input type="text" className="bg-transparent text-[#FAFAFA] pr-5 focus:outline-none w-full"/>
                    </div>

                </div>
              
                <div className="flex flex-col ">
                  <label className="text-[#FAFAFA] block mb-4" htmlFor="">E-mail<span className="text-[#00EBF0] text-base">*</span></label>

                  <div className="bg-[#1A1A1A] rounded-lg px-8 h-[75px] flex">
                    <Image src={emailIcon} alt="Icone de usuario" className="block w-[32px] mr-6"/>
                    
                    <input type="text" className="bg-transparent text-[#FAFAFA] pr-5 focus:outline-none w-full"/>
                  </div>

                </div>
              
                <div className="flex flex-col ">
                    <label className="text-[#FAFAFA] block mb-4" htmlFor="">Telefone<span className="text-[#00EBF0] text-base">*</span></label>

                    <div className="bg-[#1A1A1A] rounded-lg px-8 h-[75px] flex">
                      <Image src={phoneIcon} alt="Icone de usuario" className="block w-[32px] mr-6"/>
                      
                      <input type="text" className="bg-transparent text-[#FAFAFA] pr-5 focus:outline-none w-full"/>
                    </div>

                </div>

                <div className="flex flex-col gap-8 md:flex-row">
                  
                  <div className="flex flex-col  w-full">
                    <label className="text-[#FAFAFA] block mb-4" htmlFor="">Linkedln<span className="text-[#00EBF0] text-base">*</span></label>

                    <div className="bg-[#1A1A1A] rounded-lg px-8 h-[75px] flex">
                      <Image src={linkedlnIcon} alt="Icone de usuario" className="block w-[32px] mr-6"/>
                      
                      <input type="text" className="bg-transparent text-[#FAFAFA] pr-5 focus:outline-none w-full"/>
                    </div>

                  </div>
                              
                  <div className="flex flex-col  w-full">
                    <label className="text-[#FAFAFA] block mb-4" htmlFor="">GitHub<span className="text-[#00EBF0] text-base">*</span></label>

                    <div className="bg-[#1A1A1A] rounded-lg px-8 h-[75px] flex">
                      <Image src={githubIcon} alt="Icone de usuario" className="block w-[32px] mr-6"/>
                      
                      <input type="text" className="bg-transparent text-[#FAFAFA] pr-5 focus:outline-none w-full"/>
                    </div>

                  </div>
                
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full mt-[72px]">
              
              <div className="flex flex-col w-full mt-10 justify-center items-center">
                      
                      <div className=" border border-dashed border-[#fafafa] w-full md:w-[548px] h-[106px] relative">
                          <input type="file" className="absolute opacity-0 w-full cursor-pointer h-[106px]" />
                          
                          <div className="bg-transparent h-full text-center cursor-pointer flex flex-col items-center justify-center w-full ">
                            <Image src={uploadIcon} alt="Icone de Upload" className="w-[24px] mb-2" />
                            <span className="text-[#fafafa]">Arraste seu currículo</span>
                          </div>
                      </div>

                <span className="text-[#fafafa] mt-3 mb-[72px] ">Formato: PDF</span>
              </div>
              <button className="bg-[rgba(0,235,240,0.2)] border border-[#00EBF0] w-full h-[72px] flex items-center justify-center text-[#fafafa] rounded-lg cursor-pointer transition-all 
              duration-300 hover:opacity-80 ">Enviar</button>
            </div>
          </fieldset>
        </form>
      </section>

    </section>
  )
}

export default VacanciesDetailsPage
