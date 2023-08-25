import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function DetalharMedicamento() {
  const { id } = useParams();
  const [medication, setMedication] = useState(null);

  useEffect(() => {
    const medications = JSON.parse(localStorage.getItem('medications')) || [];
    const medicamentoDesejado = medications.find((med) => med.id === id);
    
    if (medicamentoDesejado) {
      setMedication(medicamentoDesejado);
    }
  }, [id]);

  if (!medication) {
    return (
      <div>
        <h1>Medicamento não encontrado.</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h1>Detalhes do Medicamento</h1>
      <p>Nome: {medication.nomeMedicamento}</p>
      <p>Laboratório: {medication.nomeLaboratorio}</p>
      <p>Dosagem: {medication.dosagem} {medication.medida}</p>
      <p>Preço: {medication.preco}</p>
      <p>Tipo: {medication.tipo}</p>
      <p>Descrição: {medication.descricao}</p>
      <Footer />
    </div>
  );
}

export { DetalharMedicamento} 
