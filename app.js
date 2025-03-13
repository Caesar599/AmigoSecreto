// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];


function agregarAmigo ()
 {let NombreAmigo = document.getElementById('amigo').value;
    if (NombreAmigo == '')
     {alert('Por favor, inserte un nombre'); 
      return;
     }
    else    
     {if (Amigos.includes(NombreAmigo))
         {alert (`${NombreAmigo} ya se encuentra en la lista`);
         document.getElementById('amigo').value = '';
         }
       else
         {console.log (NombreAmigo);
          Amigos.push(NombreAmigo);
          console.log (Amigos);
          document.getElementById('amigo').value = '';
          MostrarAmigos ();
          return NombreAmigo;
         }
     }
 }

function MostrarAmigos ()
   {let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(i=0; i<Amigos.length; i++)
      {let Index = document.createElement("li");
       Index.textContent = Amigos[i];
       listaAmigos.appendChild(Index);
      }
   }

   function AsignarTextoAElemento (elemento, texto) 
      {let ElementoHTML = document.querySelector(elemento);
       ElementoHTML.innerHTML = texto;
       return;
      }

function sortearAmigo ()
   {if (Amigos.length == 0)
      {alert("Aún no haz agregado ningún amigo");
      }
    else
      {let NumeroAmigoSecreto = Math.floor(Math.random()*Amigos.length)
       AsignarTextoAElemento ('h2',`El amigo secreto es ${Amigos[NumeroAmigoSecreto]}`);
      }
   }