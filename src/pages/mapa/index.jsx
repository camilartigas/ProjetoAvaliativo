import { Header } from '../../components/header';
import React, { useState, useEffect } from 'react';
import "./style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Mapa(){

  const customIcon = new icon({
    iconUrl:"https://cdn-icons-png.flaticon.com/128/252/252106.png",
    iconSize:[38,38]
  })

    const [farmacias, setFarmacias] = useState([]);

    useEffect(() => {
        const storedFarmacias = JSON.parse(localStorage.getItem('novaFarmacia')) || [];
        setFarmacias(storedFarmacias);
      }, []);

    return(
        <>
        <Header />
        <MapContainer center={[-25.448431245504, -49.25946724454275]} zoom={13}scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {farmacias.map((farmacia, index) => (
        <Marker key={index} position={[farmacia.latitude, farmacia.longitude]} icon={customIcon}>
          <Popup>
            <div>
            <h2>{farmacia.razaoSocial}</h2>
              <p>CNPJ: {farmacia.cnpj}</p>
              <p>Nome Fantasia: {farmacia.nomeFantasia}</p>
              <p>E-mail: {farmacia.email}</p>
              {farmacia.telefone && <p>Telefone: {farmacia.telefone}</p>}
              <h3>Endereço:</h3>
                <p>CEP: {farmacia.cep}</p>
                <p>Logradouro: {farmacia.logradouro}</p>
                <p>Número: {farmacia.numero}</p>
                <p>Bairro: {farmacia.bairro}</p>
                <p>Cidade: {farmacia.cidade}</p>
                <p>Estado: {farmacia.estado}</p>
                {farmacia.complemento && <p>Complemento: {farmacia.complemento}</p>}
              {farmacia.celular && (
                <p>
                  Celular: <a href={`https://wa.me/55${farmacia.celular}`}>{farmacia.celular}</a>
                </p>
              )}
            </div>
            </Popup>
        </Marker>
      ))}
        </MapContainer>
       
        </>
    )
}

export { Mapa };