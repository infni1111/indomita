import React,{useState,useEffect} from 'react'

import {database,get,set,ref,push,update,onValue} from '../firebase.js'







import { motion } from "framer-motion";




import stylo from '../assets/stylo.png'

import casque from '../assets/casque.png'


import fille from '../assets/fille.png'


import ordi from '../assets/ordi.jpg'

import logo from '../assets/logo.png'



import './accueil.css'


import { FaHeart } from "react-icons/fa";

import { FiMenu } from "react-icons/fi";






async function set_db_image(path,data){
	const refdb = ref(database,`images/${path}`)

	

	await set(refdb,data)

	console.log("mise à jour reussie")

}


 function ImageLoader() {
  const [loaded, setLoaded] = useState(false);
  const imageUrl =
    "https://res.cloudinary.com/dbxd1bibc/image/upload/v1741492827/ordi_kp67a6.png";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!loaded && <div className="animate-spin h-10 w-10 border-4 border-gray-300 border-t-blue-500 rounded-full"></div>}
      
      <img
        src={imageUrl}
        alt="Ordinateur"
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
      
      {loaded && <p className="mt-4 text-green-600 font-semibold">Image chargée avec succès !</p>}
    </div>
  );
}


const Entete = ()=>{


	return(
			<div
			className = "div_entete" 

			>		
					 <div
					 className = "text_logo"
					 >

					 	indomita


					 </div>

				<div
				className = "div_menu"
				>

					<div
					className = "div_en"
					>
						English

					</div>

				


					<FiMenu size={30} color = "black" />


				</div>

				

			</div>
		)
}


const Presentation =()=>{

	return(
		<div

		className = "div_presentation"

		>
			
			<div
			className ="doctrine"
			>
				<div
				className ="resilience"
				>
					Resilience

				</div>


				<div
				className ="for center"
				>
					for 

				</div>

				<div
				className ="everyone"
				>
					Everyone

				</div>



			</div>

		</div>

		)
}



const Message = ()=>{
	return(
		<div

		className = "div_message"
		>

			<div 
			className = "bienvenue" 
			>


			Bienvenue chez 

			</div>

			<div

			className = "div_coeur"

			>
				<div
				className = "text_indomita"
				>


				indomita

				</div>

			</div>
			

		</div>



		)
}




const Milieu = ()=>{

	return(
		<div

		className = "div_milieu"
		>

			<img src={fille} className = "fille" />

			<div

			className = "pub"

			>
				<div
				className="grace global"

				>
					Grace à la

				</div>

					

				<div
				className="techno global"
				>

					techonologie
				</div>



				<div
				className = "inovente global"
				>
					inovente
				</div>

				<div
				className = "ens global"
				>
					Ensemble
				</div>

				<div
				className = "faisons global"
				>
					Faisons la
				</div>

				<div
				className = "diff global"
				>
					différence
				</div>
	

			</div>	
			

		</div>



		)
}


const text_description = "Indomita, c'est bien plus qu'une entreprise : c'est une vision, une passion et un engagement. Nous sommes spécialisés dans l'infomatique générale, avec pour mission d'offrir des solutions innovantes et de qualité à nos clients. Chez Indomita, nous croyons en : l'excellence, la créativité, la durabilité…. Chaque jour, nous travaillons pour simplifier la vie de nos clients, tout en plaçant l'humain au cœur de notre démarche. Rejoignez-nous dans cette aventure et découvrez ce qui fait d’Indomita une référence dans son domaine ! 🚀"


const Description = ({text}) => {
	
    const list = text.split('')
    const [currentText, setCurrentText] = useState("");
    const [indiceCurrentText, setIndiceCurrentText] = useState(0);
    const [visible,setVisible] = useState(false)
    const [time,setTime]=useState(1000)

    useEffect(() => {
        if (indiceCurrentText < list.length){
        	setVisible(true)
            if(list[indiceCurrentText+1]===" "){
            	setTime(10)
            }

            else{
            	setTime(300)
            }

            const interval = setTimeout(() => {
                setCurrentText((prevText) => prevText + list[indiceCurrentText]);
                setIndiceCurrentText((prevIndex) => prevIndex + 1);
            }, time); // Modifie la vitesse de l'écriture

            return () => {
            		clearTimeout(interval)
            		setVisible(false)

        			};
        }
    }, [indiceCurrentText]);

    return (
        <div className="div_description">
            <span className="h_coeur">{currentText}</span>
            {visible?<img src={stylo} className="stylo" alt="stylo" />:null}
        </div>
    );
};



const Text = ({text})=>{

	return(
		<div
		className = "div_text"
		>

			{text}



		</div>
		)
}



const Titre = ()=>{

	return (

		<div

		className = "div_titre"

		>	
			<div
			className = "div_first_titre"
			>
				<div
				className= "div_plonge"

				>
					<div
					className ="plonge"
					>

						Plongez au

					</div>

					<div
					className = "au"
					>

						<FaHeart color ="red" size={40} className = "div_coeur_titre" />


					</div>

				</div>


				<div
				className = "text_vision"
				>

				     De notre vision

				</div>






			</div>

			<img src ={casque} className = "casque" />

		</div>

		)
}


const Accueil = ()=>{
	return(

		<div

		className = "div_accueil"

		>

			<Entete />

			<Presentation />

			<Message />

			<Milieu />

			<Titre />
			
			<Text text = {text_description} />
	
		</div>
		)
}



export default Accueil