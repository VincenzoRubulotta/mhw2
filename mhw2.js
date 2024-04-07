function immaginemouse2()
{
  immagineunict.src = "logo.svg";
  immagineunict.removeEventListener("mouseover",immaginemouse2);
  immagineunict.addEventListener("mouseover",immaginemouse);
}

function immaginemouse()
{
  immagineunict.src = "immagineunict.png";
  const immagineunict2 = document.querySelector(".logo img");
  immagineunict2.addEventListener("mouseover",immaginemouse2);
  immagineunict.removeEventListener("mouseover",immaginemouse);
}

function inutile()
{
 console.log('è stato premuto il bottone');
}

function languageclick2()
{
  const codicefiscale = document.querySelector(".selettoredati input");
  codicefiscale.placeholder = 'Codice Fiscale';
  const credenziali = document.createElement('div');
  credenziali.textContent = 'Credenziali';
  const credenzialielim = document.querySelector("#credenziali");
  credenzialielim.innerHTML= '';
  credenzialielim.appendChild(credenziali);
  const recupelim = document.querySelectorAll(".recup");
  for(element of recupelim)
  {
    const index = parseInt(element.dataset.index);
    const recup = document.createElement('div');
    if(index === 0)
    {
       const recupelim1 = element.querySelector("a");
       recupelim1.innerHTML = '';
       recup.textContent = 'Registrati';
       recupelim1.appendChild(recup); 
    }

    if(index === 1)
    {
      const recupelim2 = element.querySelector("a");
       recupelim2.innerHTML = '';
       recup.textContent = 'Password Dimenticata?';
       recupelim2.appendChild(recup); 
    }
  }


  const testoSPIDelim = document.querySelector('.testoselettore');
  testoSPIDelim.innerHTML = '';
  testoSPIDelim.textContent = 'Con il Sistema Pubblico di Identità Digitale accedi in un click ai servizi online della Pubblica Amministrazione e dei privati aderenti.';

  const elementoSPIDelim = document.querySelectorAll('.elementoSPID');
  for(elemento of elementoSPIDelim)
  {
    const indexelemento = parseInt(elemento.dataset.index);
    if(indexelemento ===0)
    {
    const elementolistaelim = elemento.querySelectorAll('div');
    for(elementol of elementolistaelim)
    {
      const indexelementolista = parseInt(elementol.dataset.index);
      const elementolista = document.createElement('small');
      if(indexelementolista === 0)
      {
        const elementolistaelim1 = elementol.querySelector('a');
        elementolistaelim1.innerHTML = '';
        elementolista.textContent = 'Maggiori informazioni su SPID';
        elementolistaelim1.appendChild(elementolista);
      }

      if(indexelementolista === 1)
      {
        const elementolistaelim2 = elementol.querySelector('a');
        elementolistaelim2.innerHTML = '';
        elementolista.textContent = 'hai SPID?';
        elementolistaelim2.appendChild(elementolista);
      }

      if(indexelementolista === 2)
      {
        const elementolistaelim3 = elementol.querySelector('a');
        elementolistaelim3.innerHTML = '';
        elementolista.textContent = 'Serve Aiuto?';
        elementolistaelim3.appendChild(elementolista);
      }

    }
    }

    if(indexelemento ===1)
    {
      const elementolistaelim = elemento.querySelector('button');
      elementolistaelim.innerHTML = '';
      elementolistaelim.textContent = 'Entra con SPID';
    }
  }

  const elementoCIEelim = document.querySelector('.elementoCIE button div');
  elementoCIEelim.innerHTML = '';
  elementoCIEelim.textContent = 'Entra con CIE';

  const testoCIEelim = document.querySelector('#testoCIE span');
  testoCIEelim.innerHTML = '';
  testoCIEelim.textContent = "La Carta di Identità Elettronica (CIE) è il documento personale che attesta l'identità del cittadino. Dotata di microprocessore, oltre a comprovare l'identità personale, permette l'accesso ai servizi digitali della Pubblica Amministrazione.";

  const linkCIEelim = document.querySelector('#testoCIE a');
  linkCIEelim.innerHTML = '';
  linkCIEelim.textContent = 'Maggiori informazioni su CIE';

  const testobloccoelim = document.querySelectorAll('.testoblocco span');

  for(span of testobloccoelim)
  {
    const testoindex = parseInt(span.dataset.index);

    if(testoindex === 0)
    {
      span.innerHTML = '';
      span.textContent = 'Università di Catania ';
    }

    if(testoindex === 1)
    {
      span.innerHTML = '';
      span.textContent = '/ Portale studenti';
    }  
  }

  languagebutton.removeEventListener("click",languageclick2);
  languagebutton.addEventListener("click",languageclick);
}


function languageclick()
{
  const codicefiscale = document.querySelector(".selettoredati input");
  codicefiscale.placeholder = 'Tax Code';
  const credenziali = document.createElement('div');
  credenziali.textContent = 'Credentials';
  const credenzialielim = document.querySelector("#credenziali");
  credenzialielim.innerHTML= '';
  credenzialielim.appendChild(credenziali);
  const recupelim = document.querySelectorAll(".recup");
  for(element of recupelim)
  {
    const index = parseInt(element.dataset.index);
    const recup = document.createElement('div');
    if(index === 0)
    {
       const recupelim1 = element.querySelector("a");
       recupelim1.innerHTML = '';
       recup.textContent = 'Sign In';
       recupelim1.appendChild(recup); 
    }

    if(index === 1)
    {
      const recupelim2 = element.querySelector("a");
       recupelim2.innerHTML = '';
       recup.textContent = 'Forgot Password?';
       recupelim2.appendChild(recup); 
    }
  }


  const testoSPIDelim = document.querySelector('.testoselettore');
  testoSPIDelim.innerHTML = '';
  testoSPIDelim.textContent = 'With the Public Digital Identity System you can access the online services of the Public Administration and participating private individuals in one click.';

  const elementoSPIDelim = document.querySelectorAll('.elementoSPID');
  for(elemento of elementoSPIDelim)
  {
    const indexelemento = parseInt(elemento.dataset.index);
    if(indexelemento ===0)
    {
    const elementolistaelim = elemento.querySelectorAll('div');
    for(elementol of elementolistaelim)
    {
      const indexelementolista = parseInt(elementol.dataset.index);
      const elementolista = document.createElement('small');
      if(indexelementolista === 0)
      {
        const elementolistaelim1 = elementol.querySelector('a');
        elementolistaelim1.innerHTML = '';
        elementolista.textContent = 'More information on SPID';
        elementolistaelim1.appendChild(elementolista);
      }

      if(indexelementolista === 1)
      {
        const elementolistaelim2 = elementol.querySelector('a');
        elementolistaelim2.innerHTML = '';
        elementolista.textContent = 'Do you Have SPID?';
        elementolistaelim2.appendChild(elementolista);
      }

      if(indexelementolista === 2)
      {
        const elementolistaelim3 = elementol.querySelector('a');
        elementolistaelim3.innerHTML = '';
        elementolista.textContent = 'Need help?';
        elementolistaelim3.appendChild(elementolista);
      }

    }
    }

    if(indexelemento ===1)
    {
      const elementolistaelim = elemento.querySelector('button');
      elementolistaelim.innerHTML = '';
      elementolistaelim.textContent = 'Enter with SPID';
    }
  }

  const elementoCIEelim = document.querySelector('.elementoCIE button div');
  elementoCIEelim.innerHTML = '';
  elementoCIEelim.textContent = 'Enter with CIE';

  const testoCIEelim = document.querySelector('#testoCIE span');
  testoCIEelim.innerHTML = '';
  testoCIEelim.textContent = 'The Electronic Identity Card (CIE) is the personal document that certifies the citizens identity. Equipped with a microprocessor, in addition to proving personal identity, it allows access to the digital services of the Public Administration.';

  const linkCIEelim = document.querySelector('#testoCIE a');
  linkCIEelim.innerHTML = '';
  linkCIEelim.textContent = 'More information on CIE';

  const testobloccoelim = document.querySelectorAll('.testoblocco span');

  for(span of testobloccoelim)
  {
    const testoindex = parseInt(span.dataset.index);

    if(testoindex === 0)
    {
      span.innerHTML = '';
      span.textContent = 'University of Catania ';
    }

    if(testoindex === 1)
    {
      span.innerHTML = '';
      span.textContent = '/ Student portal';
    }  
  }

  languagebutton.removeEventListener("click",languageclick);
  languagebutton.addEventListener("click",languageclick2);
}



function clicktransizione(event)
{
  const credenziali = document.querySelector("#transizionecredenziali div");
  const SPID = document.querySelector("#transizioneSPID div");
  const CIE = document.querySelector("#transizioneCIE div");

  if(event.currentTarget == document.querySelector("#credenziali"))
  {
    credenziali.classList.replace('hidden','tavoladati');
    SPID.classList.replace('tavoladati','hidden');
    CIE.classList.replace('tavoladati','hidden');
  }

  if(event.currentTarget == document.querySelector("#SPID"))
  {
    SPID.classList.replace('hidden','tavoladati');
    credenziali.classList.replace('tavoladati','hidden');
    CIE.classList.replace('tavoladati','hidden');
  }

  if(event.currentTarget == document.querySelector("#CIE"))
  {
    CIE.classList.replace('hidden','tavoladati');
    SPID.classList.replace('tavoladati','hidden');
    credenziali.classList.replace('tavoladati','hidden');
  }

}


const languagebutton = document.querySelector("#languagebutton");
languagebutton.addEventListener("click",languageclick);




const bottonitransizione = document.querySelectorAll("#pulsantitransizione button");

for(let bottone of bottonitransizione)
{
  bottone.addEventListener("click",clicktransizione);
}


const immagineunict = document.querySelector(".logo img");
immagineunict.addEventListener("mouseover",immaginemouse);
