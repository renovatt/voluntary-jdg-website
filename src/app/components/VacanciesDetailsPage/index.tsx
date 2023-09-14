
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

        <div className="border border-[#00EBF0] flex flex-col bg-[#191D20] rounded-[8px]">
            <div className="bg-[#23282d] w-[20%] min-w-[200px] px-[16px] py-[10px] text-center rounded-[8px] mt-4 mb-4 ml-5">
              <h3 className="text-[#FAFAFA]">Estamos procurando um novo</h3>
            </div>
            
            <div className="mt-4 mb-4 ml-5 flex justify-between text-[#FAFAFA]">
              <h1 className="font-bold text-[30px]">Desenvolvedor front-end</h1>
              <span className="font-bold mr-10">Incrições até 20/08/2023</span>
            </div>

            <div className="mt-4 mb-4 ml-5 text-[#00EBF0] w-[50%] flex">
              {['HTML', 'CSS', 'Javascript', 'React'].map((item, index, array) => (
                <span className="flex items-center" key={index}>
                <span>{item}</span>
                {index !== array.length - 1 && <span className="ml-2 mr-2">-</span>}
                </span>
              ))}
            </div>

            <div  className="mt-4 mb-4 ml-5 text-[#fafafa]">
              <p className="pr-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi porro quaerat magni. Recusandae placeat eaque, 
              veniam doloribus, quidem perferendis error culpa distinctio fugiat earum, tenetur laborum laboriosam beatae odit.
              </p>
            </div>

        </div>
      </section>
      
      <section className="w-[90%] mt-10 flex flex-col bg-[#272727] rounded-[8px]">
        <div className=" w-[95%] mx-auto text-[#FAFAFA] mt-4 mb-4 ml-5">
          <h1 className=" text-[30px] mt-5 pb-5 border-b border-[rgba(250,250,250,0.7)] ">Voluntariar-se</h1>
        </div>

        <form className="w-[95%] mx-auto mt-4 mb-4 ml-5">
          <fieldset className="">
            <div className="flex flex-col">
                <label className="text-[#FAFAFA] block mb-2" htmlFor="">Nome completo<span className="text-[#00EBF0]">*</span></label>
                <div className="bg-[#1A1A1A] rounded-[8px] py-[10px] flex justify-around">
                  <Image src={userIcon} alt="Icone de usuario" className="block w-[30px]"/>
                  <input type="text" className="bg-transparent text-[#FAFAFA] pl-5 focus:outline-none" style={{ width: 'calc(100% - 70px)' }} />
                </div>
            </div>
            
            <div className="flex flex-col mt-5">
              <label className="text-[#FAFAFA] block mb-2" htmlFor="">E-mail<span className="text-[#00EBF0]">*</span></label>
              <div className="bg-[#1A1A1A] rounded-[8px] py-[10px] flex justify-around">
                <Image src={emailIcon} alt="Icone de e-mail" className="block w-[30px]" />
                <input type="email" className="bg-transparent text-[#FAFAFA] pl-5 focus:outline-none" style={{ width: 'calc(100% - 70px)' }} />
              </div>
            </div>
            
            <div className="flex flex-col mt-5">
              <label htmlFor="" className="text-[#FAFAFA] block mb-2">Telefone<span className="text-[#00EBF0]">*</span></label>
              <div className="bg-[#1A1A1A] rounded-[8px] py-[10px] flex justify-around">
                <Image src={phoneIcon} alt="Icone de telefone" className="block w-[30px]"/>
                <input type="number" className="bg-transparent text-[#FAFAFA] pl-5 focus:outline-none" style={{ width: 'calc(100% - 70px)' }}/>
              </div>
            </div>
            
            <div className="flex justify-between">
              
              <div className="flex flex-col mt-5 w-[48%]">
                <label htmlFor="" className="text-[#FAFAFA] block mb-2">Linkedln<span className="text-[#00EBF0]">*</span></label>
                <div className="bg-[#1A1A1A] rounded-[8px] py-[10px] flex justify-around">
                  <Image src={linkedlnIcon} alt="Icone de Linkedln" className="block w-[30px]" />
                  <input type="text"  className="bg-transparent text-[#FAFAFA] pl-5 focus:outline-none" style={{ width: 'calc(100% - 70px)' }} />
                </div>
              </div>
              
              <div className="flex flex-col mt-5 w-[48%]">
                <label htmlFor="" className="text-[#FAFAFA] block mb-2">Github</label>
                <div className="bg-[#1A1A1A] rounded-[8px] py-[10px] flex justify-around">
                  <Image src={githubIcon} alt="Icone de Github" className="block w-[30px]"/>
                  <input type="text" className="bg-transparent text-[#FAFAFA] pl-5 focus:outline-none" style={{ width: 'calc(100% - 70px)' }} />
                </div>
              </div>

            </div>

            <div className="flex flex-col justify-center items-center w-[100%]">
              <div className="flex flex-col h-[100px] w-[100%] mt-10 justify-center items-center">
                <div className="relative w-[20%] min-w-[230px] mx-auto  transition-all duration-300 hover:opacity-70">
                  <input type="file" className="absolute opacity-0 w-full h-full cursor-pointer"/>
                  <div className="bg-transparent border border-dashed border-[#fafafa] p-5 text-center cursor-pointer text-[#fafafa] flex justify-between">
                    <Image src={uploadIcon} alt="Icone de Upload" className="w-[30px]"/>Arraste seu currículo
                </div>
                </div>
                <span className="text-[#fafafa] mt-5 mb-5">Formato: PDF</span>
              </div>
              <button className="bg-[rgba(0,235,240,0.2)] border border-[#00EBF0] w-[100%] pt-3 pb-3 mt-5 text-[#fafafa] rounded-[8px] cursor-pointer transition-all 
              duration-300 hover:opacity-80 ">Enviar</button>
            </div>
          </fieldset>
        </form>
      </section>

    </section>
  )
}

export default VacanciesDetailsPage
