import React from "react";

function Info() {
  return (
    <div className="info">
      <h1>Tekijä</h1>
      <p>Jussi Rinta-Kiikka</p>
      <h2>Käyttöohjeet</h2>
      <p>
        Tämä on react pohjainen nettisivusto jossa on kolme erillistä sivua
        joissa voi liikkua ylhäällä olevan valikkorivin kautta.
      </p>
      <p>
        Tasklist sivulla voidaan "add task" formilla luoda tehtävä ja valita
        alla olevasta checkboxista siihen sopivan kontekstin.
      </p>
      <p>
        Listaa voi muokata poistamalla taskeja tai nimeämällä niitä uudestaan ja
        vaihtamalla niihin sopivia konteksteja.
      </p>
      <p>
        Contextlist sivulla on mahdollista luoda uusia konteksteja, jotka
        tulostuvat listana sekä kyseiselle että edeltävälle sivulle.
      </p>
    </div>
  );
}

export default Info;
